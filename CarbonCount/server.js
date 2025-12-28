const express = require('express');
const PDFDocument = require('pdfkit');
const { create } = require('xmlbuilder2');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// CBAM Calculation Engine Logic
const calculateEmissions = (data) => {
    // Base benchmarks (Mock data based on EU CBAM Annex IV)
    const benchmarks = {
        'Steel - Hot Rolled Products': 1.85, // tCO2e per tonne
        'Aluminum - Unwrought': 6.2,
        'Cement - Clinker': 0.82,
        'Fertilizers - Ammonia': 2.1
    };

    const factor = benchmarks[data.category] || 1.0;
    const quantity = parseFloat(data.quantity) || 0;
    const embeddedEmissions = quantity * factor;

    // Mock CBAM Price (Current EU-ETS approximate €85/tonne)
    const carbonPrice = 85;
    const estimatedLiability = embeddedEmissions * carbonPrice;

    return {
        embeddedEmissions: embeddedEmissions.toFixed(2),
        estimatedLiability: estimatedLiability.toFixed(2),
        currency: 'EUR',
        unit: 'tCO2e'
    };
};

// API Endpoints
app.post('/api/calculate', (req, res) => {
    const result = calculateEmissions(req.body);
    res.json(result);
});

app.post('/api/export/pdf', (req, res) => {
    const doc = new PDFDocument();
    const filename = `CBAM_Report_${Date.now()}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

    doc.pipe(res);

    // Branded Header
    doc.fontSize(25).text('CarbonCount™ CBAM Report', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Generated on: ${new Date().toLocaleDateString()}`);
    doc.text(`Company: ${req.body.companyName || 'N/A'}`);
    doc.moveDown();

    // Report Data
    doc.fontSize(16).text('Calculation Summary', { underline: true });
    doc.fontSize(12).text(`Goods Category: ${req.body.category}`);
    doc.text(`Quantity: ${req.body.quantity} Metric Tonnes`);
    doc.text(`Total Embedded Emissions: ${req.body.embeddedEmissions} tCO2e`);
    doc.moveDown();
    doc.fontSize(14).fillColor('green').text(`Estimated CBAM Liability: €${req.body.estimatedLiability}`);

    doc.end();
});

app.post('/api/export/xml', (req, res) => {
    const obj = {
        CBAMReport: {
            Header: {
                Version: '1.0',
                ReportingPeriod: req.body.reportingPeriod || '2025-Q1'
            },
            Declarant: {
                Name: req.body.companyName,
                ID: req.body.companyId
            },
            Goods: {
                CNCode: req.body.category,
                Quantity: req.body.quantity,
                Emissions: req.body.embeddedEmissions
            }
        }
    };

    const xml = create({ version: '1.0' }).ele(obj).end({ prettyPrint: true });
    res.setHeader('Content-Type', 'application/xml');
    res.send(xml);
});

app.post('/api/ai/extract', async (req, res) => {
    try {
        const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${req.body.apiKey || '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'}`,
                "HTTP-Referer": "https://carboncount.io",
                "X-Title": "CarbonCount SaaS",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1-0528:free",
                "messages": [{ "role": "user", "content": req.body.prompt }]
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("AI Proxy Error:", error);
        res.status(500).json({ error: "Failed to fetch from OpenRouter" });
    }
});

app.listen(PORT, () => {
    console.log(`CarbonCount Backend running on http://localhost:${PORT}`);
});
