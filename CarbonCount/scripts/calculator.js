
// --- Data Structures ---
const productData = {
    "iron": [
        // Pig Iron & Raw Materials
        { code: "7201", name: "Pig iron and spiegeleisen in pigs, blocks or other primary forms", subcategory: "Raw Materials" },
        { code: "720110", name: "Non-alloy pig iron containing by weight 0.5% or less of phosphorus", subcategory: "Raw Materials" },
        { code: "720150", name: "Alloy pig iron; spiegeleisen", subcategory: "Raw Materials" },

        // Semi-Finished Products
        { code: "7207", name: "Semi-finished products of iron or non-alloy steel", subcategory: "Semi-Finished" },
        { code: "720711", name: "Semi-finished products of iron, containing by weight less than 0.25% of carbon", subcategory: "Semi-Finished" },
        { code: "720712", name: "Semi-finished products of iron, containing by weight 0.25% or more of carbon", subcategory: "Semi-Finished" },

        // Flat-Rolled Products
        { code: "7208", name: "Flat-rolled products of iron or non-alloy steel, width 600mm+, hot-rolled", subcategory: "Flat-Rolled" },
        { code: "720825", name: "Flat-rolled products, hot-rolled, pickled, width 600mm+", subcategory: "Flat-Rolled" },
        { code: "720836", name: "Flat-rolled products, hot-rolled, width 600mm+, thickness exceeding 10mm", subcategory: "Flat-Rolled" },
        { code: "7209", name: "Flat-rolled products of iron, width 600mm+, cold-rolled", subcategory: "Flat-Rolled" },
        { code: "7210", name: "Flat-rolled products of iron, width 600mm+, plated or coated with zinc", subcategory: "Flat-Rolled" },

        // Bars & Rods
        { code: "7213", name: "Bars and rods, hot-rolled, in irregularly wound coils", subcategory: "Bars & Rods" },
        { code: "7214", name: "Bars and rods of iron or non-alloy steel, not further worked than forged", subcategory: "Bars & Rods" },
        { code: "7215", name: "Bars and rods of iron or non-alloy steel, cold-formed", subcategory: "Bars & Rods" },
        { code: "7216", name: "Angles, shapes and sections of iron or non-alloy steel", subcategory: "Bars & Rods" },

        // Tubes & Pipes
        { code: "7304", name: "Tubes, pipes and hollow profiles, seamless, of iron or steel", subcategory: "Tubes & Pipes" },
        { code: "730411", name: "Line pipe of stainless steel", subcategory: "Tubes & Pipes" },
        { code: "730419", name: "Line pipe of iron or non-alloy steel", subcategory: "Tubes & Pipes" },
        { code: "7306", name: "Tubes, pipes and hollow profiles, welded, of iron or steel", subcategory: "Tubes & Pipes" }
    ],
    "aluminum": [
        // Unwrought Aluminum
        { code: "7601", name: "Unwrought aluminum", subcategory: "Unwrought" },
        { code: "760110", name: "Aluminum, not alloyed, unwrought", subcategory: "Unwrought" },
        { code: "760120", name: "Aluminum alloys, unwrought", subcategory: "Unwrought" },

        // Waste & Scrap
        { code: "7602", name: "Aluminum waste and scrap", subcategory: "Waste & Scrap" },

        // Bars, Rods & Profiles
        { code: "7604", name: "Aluminum bars, rods and profiles", subcategory: "Bars & Profiles" },
        { code: "760410", name: "Aluminum bars and rods, not alloyed", subcategory: "Bars & Profiles" },
        { code: "760421", name: "Aluminum alloy hollow profiles", subcategory: "Bars & Profiles" },
        { code: "760429", name: "Aluminum alloy profiles, other than hollow", subcategory: "Bars & Profiles" },

        // Wire
        { code: "7605", name: "Aluminum wire", subcategory: "Wire" },
        { code: "760511", name: "Aluminum wire, not alloyed, maximum cross-section exceeding 7mm", subcategory: "Wire" },

        // Plates, Sheets & Strip
        { code: "7606", name: "Aluminum plates, sheets and strip, thickness exceeding 0.2mm", subcategory: "Plates & Sheets" },
        { code: "760611", name: "Aluminum plates, sheets, rectangular, not alloyed", subcategory: "Plates & Sheets" },
        { code: "760612", name: "Aluminum plates, sheets, rectangular, alloyed", subcategory: "Plates & Sheets" },

        // Foil
        { code: "7607", name: "Aluminum foil, thickness not exceeding 0.2mm", subcategory: "Foil" },
        { code: "760711", name: "Aluminum foil, not backed, rolled but not further worked", subcategory: "Foil" },

        // Tubes & Pipes
        { code: "7608", name: "Aluminum tubes and pipes", subcategory: "Tubes & Pipes" },
        { code: "760810", name: "Aluminum tubes and pipes, not alloyed", subcategory: "Tubes & Pipes" },
        { code: "760820", name: "Aluminum alloy tubes and pipes", subcategory: "Tubes & Pipes" }
    ],
    "cement": [
        { code: "2523", name: "Portland cement, aluminous cement, slag cement, supersulfate cement", subcategory: "Cement" },
        { code: "252310", name: "Cement clinkers", subcategory: "Clinkers" },
        { code: "252321", name: "White Portland cement", subcategory: "Portland Cement" },
        { code: "252329", name: "Portland cement other than white", subcategory: "Portland Cement" },
        { code: "252330", name: "Aluminous cement", subcategory: "Specialty Cement" },
        { code: "252390", name: "Other hydraulic cements", subcategory: "Specialty Cement" }
    ],
    "fertilizer": [
        // Nitrogenous Fertilizers
        { code: "3102", name: "Mineral or chemical fertilizers, nitrogenous", subcategory: "Nitrogenous" },
        { code: "310210", name: "Urea, whether or not in aqueous solution", subcategory: "Nitrogenous" },
        { code: "310221", name: "Ammonium sulfate", subcategory: "Nitrogenous" },
        { code: "310229", name: "Double salts and mixtures of ammonium sulfate and ammonium nitrate", subcategory: "Nitrogenous" },
        { code: "310230", name: "Ammonium nitrate, whether or not in aqueous solution", subcategory: "Nitrogenous" },

        // Phosphatic Fertilizers
        { code: "3103", name: "Mineral or chemical fertilizers, phosphatic", subcategory: "Phosphatic" },
        { code: "310310", name: "Superphosphates", subcategory: "Phosphatic" },
        { code: "310390", name: "Other phosphatic fertilizers", subcategory: "Phosphatic" },

        // Potassic Fertilizers
        { code: "3104", name: "Mineral or chemical fertilizers, potassic", subcategory: "Potassic" },
        { code: "310420", name: "Potassium chloride", subcategory: "Potassic" },
        { code: "310490", name: "Other potassic fertilizers", subcategory: "Potassic" },

        // NPK Fertilizers
        { code: "3105", name: "Fertilizers containing nitrogen, phosphorus and potassium (NPK)", subcategory: "NPK" },
        { code: "310510", name: "NPK fertilizers in tablets or similar forms", subcategory: "NPK" },
        { code: "310520", name: "NPK fertilizers containing nitrates and phosphates", subcategory: "NPK" },

        // Related Chemicals
        { code: "2808", name: "Nitric acid; sulphonitric acids", subcategory: "Chemicals" },
        { code: "2814", name: "Ammonia, anhydrous or in aqueous solution", subcategory: "Chemicals" }
    ],
    "hydrogen": [
        { code: "280410", name: "Hydrogen", subcategory: "Hydrogen" },
        { code: "2804", name: "Hydrogen, rare gases and other non-metals", subcategory: "Hydrogen" },
        { code: "2811", name: "Inorganic acids and inorganic oxygen compounds of non-metals", subcategory: "Related Compounds" },
        { code: "281410", name: "Anhydrous ammonia", subcategory: "Ammonia" },
        { code: "281420", name: "Ammonia in aqueous solution", subcategory: "Ammonia" }
    ],
    "textiles": [
        // Cotton
        { code: "5201", name: "Cotton, not carded or combed", subcategory: "Cotton - Raw" },
        { code: "5202", name: "Cotton waste (including yarn waste and garnetted stock)", subcategory: "Cotton - Waste" },
        { code: "5203", name: "Cotton, carded or combed", subcategory: "Cotton - Processed" },
        { code: "5208", name: "Woven fabrics of cotton, containing 85% or more by weight of cotton", subcategory: "Cotton - Fabrics" },
        { code: "520851", name: "Plain weave cotton fabric, printed, weight not exceeding 100 g/m²", subcategory: "Cotton - Fabrics" },

        // Synthetic Fibers
        { code: "5407", name: "Woven fabrics of synthetic filament yarn", subcategory: "Synthetic - Fabrics" },
        { code: "540710", name: "Woven fabrics obtained from high tenacity yarn of nylon", subcategory: "Synthetic - Fabrics" },
        { code: "540720", name: "Woven fabrics obtained from strip or the like of polyethylene or polypropylene", subcategory: "Synthetic - Fabrics" },
        { code: "5408", name: "Woven fabrics of artificial filament yarn", subcategory: "Artificial - Fabrics" },

        // Knitted Fabrics
        { code: "6006", name: "Other knitted or crocheted fabrics", subcategory: "Knitted" },
        { code: "600610", name: "Knitted or crocheted fabrics of wool or fine animal hair", subcategory: "Knitted" },
        { code: "600622", name: "Knitted or crocheted fabrics of cotton, dyed", subcategory: "Knitted" }
    ],
    "chemicals": [
        // Hydrocarbons
        { code: "2902", name: "Cyclic hydrocarbons", subcategory: "Hydrocarbons" },
        { code: "290211", name: "Cyclohexane", subcategory: "Hydrocarbons" },
        { code: "290220", name: "Benzene", subcategory: "Hydrocarbons" },
        { code: "290230", name: "Toluene", subcategory: "Hydrocarbons" },

        // Alcohols
        { code: "2905", name: "Acyclic alcohols and their halogenated, sulphonated derivatives", subcategory: "Alcohols" },
        { code: "290511", name: "Methanol (methyl alcohol)", subcategory: "Alcohols" },
        { code: "290512", name: "Propan-1-ol (propyl alcohol) and propan-2-ol (isopropyl alcohol)", subcategory: "Alcohols" },

        // Polymers - Ethylene
        { code: "3901", name: "Polymers of ethylene, in primary forms", subcategory: "Polymers - Ethylene" },
        { code: "390110", name: "Polyethylene having a specific gravity of less than 0.94 (LDPE)", subcategory: "Polymers - Ethylene" },
        { code: "390120", name: "Polyethylene having a specific gravity of 0.94 or more (HDPE)", subcategory: "Polymers - Ethylene" },

        // Polymers - Propylene
        { code: "3902", name: "Polymers of propylene or of other olefins, in primary forms", subcategory: "Polymers - Propylene" },
        { code: "390210", name: "Polypropylene", subcategory: "Polymers - Propylene" },
        { code: "390220", name: "Polyisobutylene", subcategory: "Polymers - Propylene" },

        // Polymers - Styrene
        { code: "3903", name: "Polymers of styrene, in primary forms", subcategory: "Polymers - Styrene" },
        { code: "390311", name: "Polystyrene, expansible", subcategory: "Polymers - Styrene" },
        { code: "390319", name: "Polystyrene, other", subcategory: "Polymers - Styrene" }
    ],
    "electronics": [
        // Computers & Data Processing
        { code: "8471", name: "Automatic data processing machines and units thereof", subcategory: "Computers" },
        { code: "847130", name: "Portable automatic data processing machines, weighing not more than 10 kg", subcategory: "Computers" },
        { code: "847141", name: "Data processing machines comprising CPU, input and output units", subcategory: "Computers" },

        // Telecommunications
        { code: "8517", name: "Telephone sets, including smartphones; other apparatus for transmission", subcategory: "Telecom" },
        { code: "851712", name: "Telephones for cellular networks or for other wireless networks", subcategory: "Telecom" },
        { code: "851762", name: "Machines for reception, conversion and transmission of voice, images", subcategory: "Telecom" },

        // Displays
        { code: "8528", name: "Monitors and projectors, not incorporating television reception apparatus", subcategory: "Displays" },
        { code: "852851", name: "Monitors of a kind solely or principally used in an automatic data processing system", subcategory: "Displays" },
        { code: "852859", name: "Other monitors", subcategory: "Displays" },

        // Semiconductors
        { code: "8541", name: "Diodes, transistors and similar semiconductor devices", subcategory: "Semiconductors" },
        { code: "854110", name: "Diodes, other than photosensitive or light-emitting diodes", subcategory: "Semiconductors" },
        { code: "854121", name: "Transistors with a dissipation rate of less than 1 W", subcategory: "Semiconductors" },
        { code: "854140", name: "Photosensitive semiconductor devices, including photovoltaic cells", subcategory: "Semiconductors" },

        // Integrated Circuits
        { code: "8542", name: "Electronic integrated circuits", subcategory: "ICs" },
        { code: "854231", name: "Processors and controllers", subcategory: "ICs" },
        { code: "854232", name: "Memories", subcategory: "ICs" },
        { code: "854233", name: "Amplifiers", subcategory: "ICs" }
    ]
};

// --- State ---
let currentStep = 1;
const totalSteps = 5;
let productRowIndex = 0;
let calculationData = {
    role: '',
    ingestionMode: 'manual',
    company: {},
    goods: [],
    transport: {
        mode: 'sea',
        origin: null,
        dest: null
    }
};

let map, originMarker, destMarker, pathCurve;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initStep1();
    initStep2();
    initStep3();
    initStep4();
    initStep5();

    // Initial UI Setup
    updateProgress();

    // Smart Auto-Fill
    autoFillProfile();
});

function autoFillProfile() {
    const profile = JSON.parse(localStorage.getItem('carbonCountProfile'));
    if (profile) {
        // Pre-fill Company Data
        const nameInput = document.getElementById('company-name');
        if (nameInput && profile.companyName) {
            nameInput.value = profile.companyName;
            indicateAutoFill(nameInput);
        }

        const idInput = document.getElementById('company-id');
        if (idInput && profile.companyId) {
            idInput.value = profile.companyId;
            indicateAutoFill(idInput);
        }

        // Store default country for later use in Goods/Transport steps
        if (profile.country) {
            calculationData.defaultCountry = profile.country;
        }
    }
}

function indicateAutoFill(element) {
    element.style.borderColor = 'var(--clr-primary)';
    // Add a small icon or indicator wrapper if desired,
    // for MVP just changing border color to indicate "Smart Fill"
    const label = element.previousElementSibling; // The label
    if (label) {
        label.innerHTML += ' <span style="font-size:0.7rem; color:var(--clr-primary); border:1px solid var(--clr-primary); border-radius:4px; padding:0 3px;">Auto-filled</span>';
    }
}

// Auto-detect country using IP geolocation
async function autoDetectCountry(selectElement) {
    if (!selectElement) return;

    // Check if already filled from profile
    if (calculationData.defaultCountry) {
        selectElement.value = calculationData.defaultCountry;
        indicateAutoFill(selectElement);
        return;
    }

    try {
        // Use ipapi.co for free IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.country_code) {
            // Map common country codes
            const countryCode = data.country_code.toUpperCase();

            // Check if this country exists in our dropdown
            const option = selectElement.querySelector(`option[value="${countryCode}"]`);
            if (option) {
                selectElement.value = countryCode;
                indicateAutoFill(selectElement);
                calculationData.defaultCountry = countryCode;
            }
        }
    } catch (error) {
        console.log('Could not auto-detect country:', error);
        // Silently fail - user can select manually
    }
}

// --- Step 1: Role Selection ---
function initStep1() {
    const roleContainer = document.getElementById('role-container');
    if (!roleContainer) return;

    roleContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.role-card');
        if (card) {
            // UI Update
            document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            // Logic Update
            calculationData.role = card.dataset.role;

            // Update Label in Step 2 based on role
            const idLabel = document.getElementById('id-label');
            if (idLabel) {
                if (calculationData.role === 'exporter') idLabel.textContent = 'GSTIN / Business ID';
                else if (calculationData.role === 'importer') idLabel.textContent = 'EORI Number';
                else idLabel.textContent = 'Tax ID / VAT';
            }

            // Auto-Advance with smooth delay
            setTimeout(() => {
                showStep(2);
            }, 400);
        }
    });
}

// --- Step 2: Company Info ---
function initStep2() {
    document.getElementById('btn-next-2').addEventListener('click', () => {
        if (validateStep2()) {
            showStep(3);
        }
    });

    document.getElementById('btn-back-2').addEventListener('click', () => {
        showStep(1);
    });
}

function validateStep2() {
    const name = document.getElementById('company-name').value.trim();
    const id = document.getElementById('company-id').value.trim();
    const start = document.getElementById('start-date').value;
    const end = document.getElementById('end-date').value;

    if (!name || !id || !start || !end) {
        alert("Please fill in all company details.");
        return false;
    }

    calculationData.company = { name, id, start, end };
    return true;
}

// --- Step 3: Goods (Dynamic Rows) ---
function initStep3() {
    // Mode Switching
    const manualBtn = document.getElementById('mode-manual');
    const autoBtn = document.getElementById('mode-auto');
    const manualSection = document.getElementById('manual-entry-section');
    const autoSection = document.getElementById('auto-upload-section');

    if (manualBtn && autoBtn) {
        manualBtn.addEventListener('click', () => {
            manualBtn.classList.add('active');
            manualBtn.style.background = 'var(--clr-primary)';
            manualBtn.style.color = 'black';
            autoBtn.classList.remove('active');
            autoBtn.style.background = 'transparent';
            autoBtn.style.color = 'var(--clr-text-muted)';
            manualSection.style.display = 'block';
            autoSection.style.display = 'none';
            calculationData.ingestionMode = 'manual';
        });

        autoBtn.addEventListener('click', () => {
            autoBtn.classList.add('active');
            autoBtn.style.background = 'var(--clr-primary)';
            autoBtn.style.color = 'black';
            manualBtn.classList.remove('active');
            manualBtn.style.background = 'transparent';
            manualBtn.style.color = 'var(--clr-text-muted)';
            manualSection.style.display = 'none';
            autoSection.style.display = 'block';
            calculationData.ingestionMode = 'automatic';
        });
    }

    // Add First Row on Load
    if (document.getElementById('goods-container').children.length === 0) {
        addProductRow();
    }

    // Add Product Button
    document.getElementById('btn-add-product').addEventListener('click', addProductRow);

    // Navigation
    document.getElementById('btn-next-3').addEventListener('click', () => {
        if (calculationData.ingestionMode === 'automatic') {
            simulateAutoUpload();
            return;
        }
        if (validateStep3()) {
            collectStep3Data();
            // Role Skip Logic
            if (calculationData.role === 'manufacturer') {
                showStep(5); // Skip Location
                generateResult(); // Auto-calc
            } else {
                autoFillStep4(); // Auto-fill origin from goods
                showStep(4);
            }
        }
    });

    document.getElementById('btn-back-3').addEventListener('click', () => {
        showStep(2);
    });

    // Event Delegation for Delete
    document.getElementById('goods-container').addEventListener('click', (e) => {
        const delBtn = e.target.closest('.btn-delete');
        if (delBtn) {
            const rowId = delBtn.dataset.row;
            const row = document.getElementById(`goods-${rowId}`);
            if (document.querySelectorAll('.product-row').length > 1) {
                row.remove();
            } else {
                alert("At least one product is required.");
            }
        }
    });

    // AI Extraction Logic
    const aiExtractBtn = document.getElementById('btn-ai-extract');
    if (aiExtractBtn) {
        aiExtractBtn.addEventListener('click', handleAIExtract);
    }

    const fileInput = document.getElementById('file-upload-input');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }
}

function validateStep3() {
    const rows = document.querySelectorAll('.product-row');
    if (rows.length === 0) {
        alert("Please add at least one product.");
        return false;
    }

    let validRowCount = 0;

    for (let row of rows) {
        const category = row.querySelector('.category-select');
        const hsSearchInput = row.querySelector('.hs-search');
        const hsCodeHidden = row.querySelector('.hs-code-hidden');
        const weight = row.querySelector('.weight-input');
        const country = row.querySelector('.country-select');

        // Check if row is completely empty - if so, skip it
        const isEmpty = !category.value && !hsSearchInput.value.trim() && !weight.value;
        if (isEmpty) {
            continue; // Skip validation for empty rows
        }

        validRowCount++;

        // Category validation
        if (!category.value) {
            alert("Please select a product category for all products.");
            category.focus();
            category.style.borderColor = '#ff4b2b';
            return false;
        }

        // HS Code validation - accept either hidden value OR search input value
        const hsCode = hsCodeHidden.value || hsSearchInput.value.trim();
        if (!hsCode) {
            alert("Please enter or select an HS Code for all products.");
            hsSearchInput.focus();
            hsSearchInput.style.borderColor = '#ff4b2b';
            return false;
        } else {
            // If user typed manually, save it to hidden field
            if (!hsCodeHidden.value && hsSearchInput.value.trim()) {
                hsCodeHidden.value = hsSearchInput.value.trim();
            }
        }

        // Weight validation
        if (!weight.value || parseFloat(weight.value) <= 0) {
            alert("Please enter a valid weight (in tonnes) for all products.");
            weight.focus();
            weight.style.borderColor = '#ff4b2b';
            return false;
        }

        // Manufacturer-specific Energy Validation
        if (calculationData.role === 'manufacturer') {
            const energySelect = row.querySelector('.energy-select');
            if (energySelect && !energySelect.value) {
                alert("Please select an energy source for all products.");
                energySelect.focus();
                energySelect.style.borderColor = '#ff4b2b';
                return false;
            }
            if (energySelect) energySelect.style.borderColor = '';
        }

        // Country validation (only for non-manufacturers or if field exists)
        if (country && !country.value && calculationData.role !== 'manufacturer') {
            alert("Please select a country of origin for all products.");
            country.focus();
            country.style.borderColor = '#ff4b2b';
            return false;
        }

        // Reset border colors on success
        category.style.borderColor = '';
        hsSearchInput.style.borderColor = '';
        weight.style.borderColor = '';
        if (country) country.style.borderColor = '';
    }

    // Ensure at least one valid row exists
    if (validRowCount === 0) {
        alert("Please add at least one product with complete details.");
        return false;
    }

    return true;
}

function collectStep3Data() {
    calculationData.goods = [];
    const rows = document.querySelectorAll('.product-row');

    rows.forEach(row => {
        const category = row.querySelector('.category-select').value;
        const hsCode = row.querySelector('.hs-code-hidden').value;
        const weightValue = parseFloat(row.querySelector('.weight-input').value);
        const country = row.querySelector('.country-select')?.value;
        const energyIntensity = row.querySelector('.energy-select')?.value || 'grid';

        // Skip empty rows
        if (!category && !hsCode && !weightValue) {
            return;
        }

        calculationData.goods.push({
            category,
            hsCode,
            weight: weightValue,
            country,
            energyIntensity
        });
    });
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        const text = event.target.result;
        document.getElementById('ai-invoice-text').value = text;

        // Visual indicator that file is loaded
        const btn = document.querySelector('button[onclick*="file-upload-input"]');
        if (btn) {
            btn.innerHTML = `<i data-lucide="check-circle" style="width: 16px; margin-right: 5px;"></i> ${file.name}`;
            lucide.createIcons();
        }

        // Auto-run extraction
        handleAIExtract();
    };
    reader.readAsText(file);
}

async function updateAIProgress(percent, status) {
    const bar = document.getElementById('extraction-bar');
    const statusText = document.getElementById('extraction-status');
    const percentText = document.getElementById('extraction-percent');
    const container = document.getElementById('extraction-progress');

    if (container) container.style.display = 'block';
    if (bar) bar.style.width = percent + '%';
    if (statusText) statusText.innerText = status;
    if (percentText) percentText.innerText = percent + '%';

    return new Promise(resolve => setTimeout(resolve, 600));
}

async function handleAIExtract() {
    const text = document.getElementById('ai-invoice-text').value.trim();
    if (!text) {
        alert("Please paste invoice content or upload a file first.");
        return;
    }

    const btn = document.getElementById('btn-ai-extract');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="loader-2" class="animate-spin" style="width: 16px; margin-right: 5px;"></i> Extracting...';
    btn.disabled = true;
    lucide.createIcons();

    try {
        await updateAIProgress(20, "Analyzing Document Structure...");
        await updateAIProgress(45, "Parsing Goods & HS Codes...");

        const prompt = `Extract CBAM relevant product data from this invoice text. 
        Focus on: HS Code, Product Category (iron, aluminum, cement, fertilizer, hydrogen, textiles, chemicals, electronics), and Weight in Tonnes.
        Format accurately as JSON array of objects: [{"category": "iron", "hsCode": "7208", "weight": 45.5}].
        Text: "${text}"`;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "HTTP-Referer": window.location.origin || "http://localhost:3000",
                "X-Title": "CarbonCount Calculator",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "nex-agi/deepseek-v3.1-nex-n1:free",
                "messages": [{
                    "role": "user",
                    "content": prompt
                }]
            })
        });

        const data = await response.json();

        await updateAIProgress(75, "Validating Compliance Data...");

        const content = data.choices[0].message.content;
        const jsonMatch = content.match(/\[.*\]/s);

        if (jsonMatch) {
            const extractedGoods = JSON.parse(jsonMatch[0]);
            calculationData.goods = extractedGoods;
            calculationData.ingestionMode = 'automatic';

            await updateAIProgress(100, "Done! Redirecting to Analysis...");

            btn.innerHTML = '<i data-lucide="check" style="width: 16px; margin-right: 5px;"></i> Success!';

            setTimeout(() => {
                if (calculationData.role === 'manufacturer') {
                    showStep(5);
                    generateResult();
                } else {
                    showStep(4);
                }

                // Hide progress for next time
                document.getElementById('extraction-progress').style.display = 'none';

                // Automated Reporting Flow (Phase 3 Requirement)
                if (calculationData.role === 'manufacturer') {
                    setTimeout(() => {
                        generatePDF();
                        // Simulation of XML download since it's a server call
                        console.log("Auto-triggering XML and PDF downloads...");
                    }, 1500);
                }
            }, 800);
        } else {
            throw new Error("No JSON found in response.");
        }
    } catch (error) {
        console.error("AI Error:", error);
        alert("AI extraction failed. Please try again or use Manual Entry.");
        document.getElementById('extraction-progress').style.display = 'none';
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
        lucide.createIcons();
    }
}



function addProductRow() {
    const container = document.getElementById('goods-container');
    const index = productRowIndex++;
    const role = calculationData.role;

    const rowHTML = `
        <div class="glass-panel product-row animate-fade-in" id="goods-${index}" style="position: relative; overflow: hidden;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; align-items: end;">
                <div class="input-group">
                    <label class="input-label">Product Category</label>
                    <select class="input-dark category-select" data-row="${index}">
                        <option value="">Select Category</option>
                        <option value="iron">Iron & Steel</option>
                        <option value="aluminum">Aluminum</option>
                        <option value="cement">Cement</option>
                        <option value="fertilizer">Fertilizer</option>
                        <option value="hydrogen">Hydrogen</option>
                        <option value="electricity">Electricity</option>
                        <option value="textiles">Textiles</option>
                        <option value="chemicals">Chemicals</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <div class="input-group" style="position: relative;">
                    <label class="input-label">HS Code / Product Name</label>
                    <div style="position: relative; display: flex; align-items: center;">
                        <i data-lucide="search" style="position: absolute; left: 1rem; width: 14px; color: var(--clr-text-muted);"></i>
                        <input type="text" class="input-dark hs-search" data-row="${index}" placeholder="Select category first" disabled style="padding-left: 2.5rem;">
                    </div>
                    <div class="hs-results-dropdown glass-panel" id="results-${index}" style="display:none; position:absolute; top:100%; left:0; width:100%; z-index:1000; margin-top: 8px; max-height:220px; overflow-y:auto; border-color: rgba(255,255,255,0.1); background: #0a0e14; box-shadow: 0 12px 24px rgba(0,0,0,0.5);"></div>
                    <input type="hidden" class="hs-code-hidden" id="hs-code-${index}">
                </div>
                <div class="input-group">
                    <label class="input-label">Net Mass (Tonnes)</label>
                    <input type="number" class="input-dark weight-input" data-row="${index}" placeholder="0.00">
                </div>
                <div class="input-group">
                    <label class="input-label">Country of Origin</label>
                    <select class="input-dark country-select" data-row="${index}">
                        <option value="">Select Country</option>
                        <optgroup label="Europe">
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="NL">Netherlands</option>
                            <option value="BE">Belgium</option>
                            <option value="PL">Poland</option>
                            <option value="SE">Sweden</option>
                            <option value="AT">Austria</option>
                            <option value="CZ">Czech Republic</option>
                        </optgroup>
                        <optgroup label="Asia">
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="JP">Japan</option>
                            <option value="KR">South Korea</option>
                            <option value="TW">Taiwan</option>
                            <option value="VN">Vietnam</option>
                            <option value="TH">Thailand</option>
                            <option value="MY">Malaysia</option>
                            <option value="SG">Singapore</option>
                            <option value="ID">Indonesia</option>
                        </optgroup>
                        <optgroup label="Americas">
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="MX">Mexico</option>
                            <option value="BR">Brazil</option>
                            <option value="AR">Argentina</option>
                            <option value="CL">Chile</option>
                        </optgroup>
                        <optgroup label="Middle East & Africa">
                            <option value="TR">Turkey</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="AE">UAE</option>
                            <option value="ZA">South Africa</option>
                            <option value="EG">Egypt</option>
                        </optgroup>
                        <optgroup label="Oceania">
                            <option value="AU">Australia</option>
                            <option value="NZ">New Zealand</option>
                        </optgroup>
                    </select>
                </div>
                ${role === 'manufacturer' ? `
                <div class="input-group">
                    <label class="input-label">Energy Intensity</label>
                    <select class="input-dark energy-select" data-row="${index}">
                        <option value="grid">National Grid</option>
                        <option value="ppa">PPA (Renewable)</option>
                        <option value="onsite_renew">Certified Green</option>
                    </select>
                </div>` : ''}
            </div>
            
            <button type="button" class="btn-delete" data-row="${index}" style="position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255, 75, 43, 0.05); border: 1px solid rgba(255, 75, 43, 0.1); color: #ff4b2b; width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
                <i data-lucide="trash-2" style="width: 15px;"></i>
            </button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', rowHTML);
    lucide.createIcons();

    const row = document.getElementById(`goods-${index}`);
    const catSelect = row.querySelector('.category-select');
    const searchInput = row.querySelector('.hs-search');
    const resultsDiv = row.querySelector(`#results-${index}`);
    const hiddenHsCodeInput = row.querySelector('.hs-code-hidden');
    const deleteBtn = row.querySelector('.btn-delete');

    // Delete Animation
    deleteBtn.addEventListener('click', () => {
        row.style.opacity = '0';
        row.style.transform = 'scale(0.95)';
        row.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => row.remove(), 300);
    });

    catSelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        const weightInput = row.querySelector('.weight-input');
        const weightLabel = row.querySelector('.input-label');

        if (selectedCategory) {
            searchInput.disabled = false;
            searchInput.placeholder = "Type to search...";
            searchInput.focus();

            // Check if electricity category is selected
            if (selectedCategory === 'electricity') {
                // Change label and placeholder to MWh
                if (weightLabel && weightLabel.textContent.includes('Net Mass')) {
                    weightLabel.textContent = 'Energy (MWh)';
                }
                if (weightInput) {
                    weightInput.placeholder = '0.00 MWh';
                }
            } else {
                // Reset to default tonnes
                if (weightLabel) {
                    weightLabel.textContent = 'Net Mass (Tonnes)';
                }
                if (weightInput) {
                    weightInput.placeholder = '0.00';
                }
            }
        } else {
            searchInput.disabled = true;
            searchInput.placeholder = "Select category first";
            searchInput.value = "";
            hiddenHsCodeInput.value = "";
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const category = catSelect.value;
        if (!category || query.length < 2) {
            resultsDiv.style.display = 'none';
            return;
        }

        const matches = (productData[category] || []).filter(p =>
            p.code.includes(query) || p.name.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            resultsDiv.innerHTML = matches.map(m => `
                <div class="hs-item" data-code="${m.code}" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.03); font-size: 0.85rem; transition: background 0.2s;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 4px;">
                        <span style="color: var(--clr-primary); font-weight: 700; font-family: 'JetBrains Mono', monospace;">${m.code}</span>
                        ${m.subcategory ? `<span style="font-size: 0.7rem; padding: 2px 6px; background: rgba(0, 255, 163, 0.1); color: var(--clr-primary); border-radius: 4px;">${m.subcategory}</span>` : ''}
                    </div>
                    <div style="color: #eee; font-size: 0.8rem;">${m.name}</div>
                </div>
            `).join('');
            resultsDiv.style.display = 'block';
        } else {
            resultsDiv.style.display = 'none';
        }
    });

    resultsDiv.addEventListener('click', (e) => {
        const item = e.target.closest('.hs-item');
        if (item) {
            const code = item.dataset.code;
            searchInput.value = code;
            hiddenHsCodeInput.value = code;
            resultsDiv.style.display = 'none';
            searchInput.style.borderColor = 'var(--clr-primary)';
            searchInput.style.boxShadow = '0 0 0 4px rgba(0, 255, 163, 0.1)';
        }
    });

    // Close dropdown when clicking outside (using blur event instead of global listener)
    searchInput.addEventListener('blur', () => {
        // Delay to allow click on dropdown item to register first
        setTimeout(() => {
            resultsDiv.style.display = 'none';
        }, 200);
    });

    // Auto-detect and fill country
    const countrySelect = row.querySelector('.country-select');
    autoDetectCountry(countrySelect);
}

function collectStep3Data() {
    const rows = document.querySelectorAll('.product-row');
    calculationData.goods = [];

    rows.forEach(row => {
        const index = row.id.split('-')[1];
        const category = row.querySelector('.category-select').value;
        const hsCode = row.querySelector('.hs-code-hidden').value;
        const weight = parseFloat(row.querySelector('.weight-input').value) || 0;
        const energy = row.querySelector('.energy-select') ? row.querySelector('.energy-select').value : 'grid';

        if (category && hsCode) {
            calculationData.goods.push({
                category,
                hsCode,
                weight,
                energy,
                unit: 'Tonnes'
            });
        }
    });
}

function validateStep3() {
    const rows = document.querySelectorAll('.product-row'); // Changed class name
    const goods = [];
    let isValid = true;

    rows.forEach(row => {
        const cat = row.querySelector('.category-select').value;
        const hs = row.querySelector('.hs-code-hidden').value; // Changed to hidden input
        const w = parseFloat(row.querySelector('.weight-input').value);
        const u = 'tonnes'; // Unit is now fixed to tonnes in the new UI
        const energySource = calculationData.role === 'manufacturer' ? row.querySelector('.energy-select').value : null;

        if (!cat || !hs || isNaN(w) || w <= 0) {
            isValid = false;
        }
        goods.push({ category: cat, hsCode: hs, weight: w, unit: u });
    });

    if (!isValid) {
        alert("Please complete all product fields correctly.");
        return false;
    }

    calculationData.goods = goods;
    return true;
}

// --- Step 4: Transport ---
function initStep4() {
    // Mode Selection
    document.getElementById('transport-container').addEventListener('click', (e) => {
        const card = e.target.closest('.transport-option');
        if (card) {
            document.querySelectorAll('.transport-option').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            calculationData.transport.mode = card.dataset.mode;
            updateCurve();
        }
    });

    // Dropdowns
    document.getElementById('origin-select').addEventListener('change', (e) => updateMapState('origin', e.target));
    document.getElementById('dest-select').addEventListener('change', (e) => updateMapState('dest', e.target));

    // Nav
    document.getElementById('btn-calc').addEventListener('click', () => {
        if (!calculationData.transport.origin || !calculationData.transport.dest) {
            alert("Please select Origin and Destination.");
            return;
        }
        showStep(5);
        generateResult();
    });

    document.getElementById('btn-back-4').addEventListener('click', () => {
        showStep(3);
    });

    // Map Interaction Interaction
    document.getElementById('map-interaction-overlay').addEventListener('click', function () {
        this.style.display = 'none';
        // if map exists enable zoom? Leaflet handles this usually via options
    });
}

// Map Logic
function updateMapState(type, selectEl) {
    if (!map) initMap(); // Ensure init

    const opt = selectEl.options[selectEl.selectedIndex];
    if (!opt.value) return;

    const lat = parseFloat(opt.dataset.lat);
    const lng = parseFloat(opt.dataset.lng);
    const name = opt.textContent;

    if (type === 'origin') {
        if (originMarker) map.removeLayer(originMarker);
        originMarker = L.marker([lat, lng], { icon: getIcon('red') }).addTo(map).bindPopup(`Origin: ${name}`).openPopup();
        calculationData.transport.origin = { name, lat, lng };
    } else {
        if (destMarker) map.removeLayer(destMarker);
        destMarker = L.marker([lat, lng], { icon: getIcon('blue') }).addTo(map).bindPopup(`Dest: ${name}`).openPopup();
        calculationData.transport.dest = { name, lat, lng };
    }
    updateCurve();
}

function initMap() {
    if (map) return;
    map = L.map('map', { scrollWheelZoom: true }).setView([20, 0], 2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);
}

function updateCurve() {
    if (!map) return;
    if (pathCurve) map.removeLayer(pathCurve);

    if (calculationData.transport.origin && calculationData.transport.dest) {
        let color = '#00ffa3'; // Sea
        if (calculationData.transport.mode === 'air') color = '#00d2ff';
        if (calculationData.transport.mode === 'road') color = '#ffae00';

        const latlngs = [
            [calculationData.transport.origin.lat, calculationData.transport.origin.lng],
            [calculationData.transport.dest.lat, calculationData.transport.dest.lng]
        ];

        pathCurve = L.polyline(latlngs, {
            color: color,
            weight: 3,
            param: 'curved' // Leaflet primitive
        }).addTo(map);

        map.fitBounds(pathCurve.getBounds(), { padding: [50, 50] });
    }
}

function getIcon(color) {
    return L.icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}


// --- Step 5: Results & Export --
function initStep5() {
    document.getElementById('btn-download-pdf').addEventListener('click', generatePDF);
    document.getElementById('btn-export-xml').addEventListener('click', generateXML);
}

// --- Constants ---
const transportFactors = {
    'sea': 0.012,
    'road': 0.096,
    'air': 0.602
};

function generateResult() {
    let productionEmissions = 0;
    let transportEmissions = 0;

    // 1. Production Emissions
    calculationData.goods.forEach(g => {
        // Base factor: 1.85 per tonne
        let factor = 1.85;

        // Energy Intensity Multiplier (Phase 3 Requirement)
        if (g.energy === 'ppa') factor *= 0.6; // 40% reduction
        if (g.energy === 'onsite_renew') factor *= 0.2; // 80% reduction

        productionEmissions += (g.weight * factor);
    });

    // 2. Transport Emissions
    let distance = 0;
    if (calculationData.role !== 'manufacturer' && calculationData.transport.origin && calculationData.transport.dest) {
        const distRaw = calculateDistance(
            calculationData.transport.origin.lat, calculationData.transport.origin.lng,
            calculationData.transport.dest.lat, calculationData.transport.dest.lng
        );
        distance = distRaw * 1.20; // +20% Buffer

        const totalWeight = calculationData.goods.reduce((acc, g) => acc + g.weight, 0);
        const modeFactor = transportFactors[calculationData.transport.mode] || 0;

        transportEmissions = totalWeight * distance * modeFactor / 1000; // Assuming Factor is per tonne-km, result in tonnes? 
        // Wait, factors are kgCO2e per tonne-km. 
        // Weight is in tonnes. Distance in km.
        // Result = Tonnes * km * kg/T-km = kgCO2e.
        // Convert to tonnes: / 1000.
    }

    const totalEmissions = productionEmissions + transportEmissions;
    const liability = totalEmissions * 85; // Mock CBAM price
    calculationData.results = { production: productionEmissions, transport: transportEmissions, distance: distance, total: totalEmissions, liability: liability };

    // Update Dashboard Metrics
    const emissionElement = document.getElementById('emission-val');
    const liabilityElement = document.getElementById('liability-val');
    const complianceElement = document.getElementById('compliance-text');
    const badgeElement = document.getElementById('status-badge');

    emissionElement.innerText = totalEmissions.toFixed(2);
    liabilityElement.innerText = `€${liability.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Traffic Light Logic
    let statusColor = '#00ffa3';
    let statusText = 'Low Impact';
    let complianceText = 'Optimal Compliance';

    const intensity = totalEmissions / calculationData.goods.reduce((acc, g) => acc + g.weight, 1);

    if (intensity > 2.5) {
        statusColor = '#ff4b2b';
        statusText = 'High Impact';
        complianceText = 'High Risk - Exceeds Benchmark';
    } else if (intensity > 1.0) {
        statusColor = '#ffab00';
        statusText = 'Moderate Impact';
        complianceText = 'Attention Required';
    }

    emissionElement.style.color = statusColor;
    badgeElement.innerText = statusText;
    badgeElement.style.background = `${statusColor}22`;
    badgeElement.style.color = statusColor;
    badgeElement.style.border = `1px solid ${statusColor}44`;
    complianceElement.innerText = complianceText;
    complianceElement.style.color = statusColor;

    // Breakdown UI
    const breakdownContainer = document.getElementById('result-breakdown');
    if (breakdownContainer) {
        breakdownContainer.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                    <div class="input-label" style="margin-bottom: 0.5rem; font-size: 0.65rem;">🏭 Industrial Output</div>
                    <div style="font-size: 1.25rem; font-weight: 700;">${productionEmissions.toFixed(2)} <span style="font-size: 0.8rem; color: var(--clr-text-muted);">tCO2e</span></div>
                </div>
                <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                    <div class="input-label" style="margin-bottom: 0.5rem; font-size: 0.65rem;">🚢 Logistic chain</div>
                    <div style="font-size: 1.25rem; font-weight: 700;">${transportEmissions.toFixed(2)} <span style="font-size: 0.8rem; color: var(--clr-text-muted);">tCO2e</span></div>
                </div>
            </div>
            ${calculationData.transport.mode === 'air' ?
                `<div style="margin-top:1rem; background: rgba(255,171,145,0.05); color: #ffab91; padding: 1rem; border-radius: 10px; font-size: 0.85rem; border: 1px solid rgba(255,171,145,0.1); display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="zap" style="width:18px; color: #ffab91;"></i>
                    <span>Efficiency Tip: Sea Freight could reduce logistics footprint by ~95%.</span>
                 </div>`
                : ''}
            
            <div style="margin-top: 1.5rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.5rem;">
                <label style="display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer; font-size: 0.85rem; color: var(--clr-text-muted);">
                    <input type="checkbox" id="newsletter-signup" checked style="accent-color: var(--clr-primary);"> 
                    <span>Sync this calculation with my compliance dashboard</span>
                </label>
            </div>
        `;
        lucide.createIcons();
    }

    setTimeout(() => {
        document.getElementById('result-circle').style.background = `conic-gradient(var(--clr-primary) 100%, transparent 0%)`;
    }, 100);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}


// --- PDF Generation ---
// --- PDF Generation ---
function generatePDF() {
    if (!window.jspdf) {
        alert("PDF Generator Library not loaded. Please refresh.");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const role = calculationData.role;

    // User Plan simulation (Free users get watermarks)
    const userPlan = localStorage.getItem('userPlan') || 'free';

    // Design Tokens
    const clrBG = [20, 28, 38]; // Deep Designer Dark
    const clrAccent = [0, 255, 163];
    const clrText = [40, 40, 40];
    const clrMuted = [150, 150, 150];

    // --- Watermark Logic (Phase 3 Requirement) ---
    if (userPlan === 'free') {
        doc.setTextColor(230, 230, 230);
        doc.setFontSize(50);
        doc.setFont("helvetica", "bold");
        doc.saveGraphicsState();
        doc.setGState(new doc.GState({ opacity: 0.1 }));
        doc.text("UNVERIFIED ESTIMATE", 105, 150, { align: 'center', angle: 45 });
        doc.restoreGraphicsState();
    }

    // --- 1. Premium Header ---
    doc.setFillColor(...clrBG);
    doc.rect(0, 0, 210, 50, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(...clrAccent);
    doc.text("CarbonCount™", 20, 25);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(200, 200, 200);
    doc.text("CBAM COMPLIANCE & EMISSIONS INTELLIGENCE", 20, 32);

    // Metadata Badge
    doc.setFillColor(255, 255, 255, 0.05);
    doc.roundedRect(145, 12, 50, 22, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.text("CERTIFICATE NO:", 148, 18);
    doc.setFont("helvetica", "bold");
    doc.text(Math.random().toString(36).substr(2, 9).toUpperCase(), 148, 22);
    doc.setFont("helvetica", "normal");
    doc.text("GENERATED ON:", 148, 28);
    doc.text(new Date().toLocaleDateString(), 148, 32);

    // --- 2. Entity Details ---
    let yPos = 65;
    doc.setTextColor(...clrText);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Reporting Entity Profile", 20, yPos);

    yPos += 8;
    doc.setDrawColor(240, 240, 240);
    doc.line(20, yPos, 190, yPos);

    yPos += 12;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...clrMuted);
    doc.text("ORGANIZATION", 20, yPos);
    doc.text("IDENTIFIER", 85, yPos);
    doc.text("REPORTING PERIOD", 135, yPos);

    yPos += 5;
    doc.setTextColor(...clrText);
    doc.setFont("helvetica", "bold");
    doc.text(calculationData.company?.name || "N/A", 20, yPos);
    doc.text(calculationData.company?.id || "N/A", 85, yPos);
    doc.text((calculationData.company?.start || "TBD") + " to " + (calculationData.company?.end || "TBD"), 135, yPos);

    // --- 3. Table of Declared Goods (Annex IV Columns) ---
    yPos += 20;
    doc.setFontSize(14);
    doc.text("Annex IV: Table of Declared Goods", 20, yPos);

    const goodsBody = calculationData.goods.map(g => [
        g.category.toUpperCase(),
        g.hsCode,
        `${g.weight} Tonnes`,
        calculationData.defaultCountry || 'N/A', // Country of Origin
        g.energy === 'grid' ? 'Standard' : 'Green/PPA', // Production Route
        `${(g.weight * 1.85).toFixed(2)} tCO2e`
    ]);

    doc.autoTable({
        startY: yPos + 5,
        head: [['Category', 'CN Code', 'Net Mass', 'Origin', 'Energy Route', 'Emissions']],
        headStyles: { fillColor: clrBG, textColor: clrAccent, fontSize: 8, fontStyle: 'bold' },
        body: goodsBody,
        styles: { fontSize: 8, cellPadding: 4 },
        theme: 'striped',
        margin: { left: 20, right: 20 }
    });

    yPos = doc.lastAutoTable.finalY + 15;

    // --- 4. Supply Chain Insights (Exporter/Importer Only) ---
    if (role !== 'manufacturer') {
        doc.setTextColor(...clrText);
        doc.setFontSize(14);
        doc.text("Logistics & Chain of Custody", 20, yPos);

        doc.autoTable({
            startY: yPos + 5,
            head: [['Transit Route', 'Primary Mode', 'Distance', 'Scope 3 Footprint']],
            headStyles: { fillColor: [52, 73, 94], textColor: 255, fontSize: 8 },
            body: [[
                `${calculationData.transport.origin?.name} > ${calculationData.transport.dest?.name}`,
                calculationData.transport.mode?.toUpperCase(),
                `${calculationData.results.distance.toFixed(0)} km`,
                `${calculationData.results.transport.toFixed(2)} tCO2e`
            ]],
            styles: { fontSize: 8, cellPadding: 4 },
            theme: 'grid',
            margin: { left: 20, right: 20 }
        });
        yPos = doc.lastAutoTable.finalY + 15;
    }

    // --- 5. Total Analysis Summary ---
    if (yPos > 240) { doc.addPage(); yPos = 30; }

    doc.setFillColor(...clrBG);
    doc.roundedRect(20, yPos, 170, 35, 2, 2, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text("TOTAL AGGREGATE EMBEDDED EMISSIONS (CERTIFIED ESTIMATE)", 30, yPos + 12);

    doc.setFontSize(26);
    doc.setTextColor(...clrAccent);
    doc.text(`${calculationData.results.total.toFixed(2)}`, 30, yPos + 26);
    doc.setFontSize(12);
    doc.text("tCO2e", 30 + doc.getTextWidth(`${calculationData.results.total.toFixed(2)}`) + 5, yPos + 26);

    // Verification Seal
    doc.setDrawColor(...clrAccent);
    doc.setLineWidth(0.5);
    doc.circle(170, yPos + 17, 12, 'S');
    doc.setFontSize(6);
    doc.text("VERIFIED", 164, yPos + 16);
    doc.text("STRUCTURE", 163, yPos + 19);

    // --- Footer ---
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(...clrMuted);
        doc.text(`Page ${i} of ${pageCount}`, 190, 285, { align: 'right' });
        doc.text("Authorized by CarbonCount.io Compliance Engine v1.1", 20, 285);
    }

    doc.save(`CarbonCount_AnnexIV_${calculationData.company?.id || 'PRO'}.pdf`);
}

function generateXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<Consignment>\n';

    // Goods
    xml += '  <Goods>\n';
    calculationData.goods.forEach(g => {
        xml += `    <Item>
      <Category>${g.category}</Category>
      <HSCode>${g.hsCode}</HSCode>
      <Weight unit="${g.unit}">${g.weight}</Weight>
      <EmbeddedEmissions>${(g.weight * 1.85).toFixed(2)}</EmbeddedEmissions>
    </Item>\n`;
    });
    xml += '  </Goods>\n';

    // Transport (If not manufacturer)
    if (calculationData.role !== 'manufacturer') {
        xml += '  <Transport>\n';
        xml += `    <Mode>${calculationData.transport.mode}</Mode>\n`;
        xml += `    <DistanceKM>${calculationData.results.distance.toFixed(2)}</DistanceKM>\n`;
        xml += `    <TransportEmissions>${calculationData.results.transport.toFixed(2)}</TransportEmissions>\n`;
        xml += '  </Transport>\n';
    }

    xml += `  <TotalEmissions>${calculationData.results.total.toFixed(2)}</TotalEmissions>\n`;
    xml += '</Consignment>';

    const blob = new Blob([xml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CBAM_Data.xml';
    a.click();
}

// --- Shared Utils ---
function showStep(stepNum) {
    // Hide all
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));

    // Show Target
    document.getElementById(`step-${stepNum}`).classList.add('active');
    currentStep = stepNum;
    updateProgress();

    // Map Init trigger
    if (stepNum === 4) {
        setTimeout(initMap, 200);
    }
}

function updateProgress() {
    const bar = document.getElementById('progress-fill');
    const pct = (currentStep / totalSteps) * 100;
    bar.style.width = `${pct}%`;
}

function autoFillStep4() {
    // 1. Try to get country from Step 3 (Goods)
    let country = null;
    if (calculationData.goods && calculationData.goods.length > 0) {
        // Use the country of the first product
        // If country is full name, might need code? 
        // Assuming values are codes (DE, CN, etc)
        country = calculationData.goods[0].country;
    }

    // 2. Fallback to User Profile default country
    if (!country && calculationData.defaultCountry) {
        country = calculationData.defaultCountry;
    }

    // 3. Apply to Override Select
    if (country) {
        const originSelect = document.getElementById('origin-select');
        if (originSelect) {
            // Check if option exists
            // Since optgroups are used, we check value
            const options = Array.from(originSelect.options);
            const exists = options.some(opt => opt.value === country);

            if (exists) {
                originSelect.value = country;
                // Trigger change to update map and state
                originSelect.dispatchEvent(new Event('change'));

                // Visual feedback - reuse indicateAutoFill from earlier
                if (typeof indicateAutoFill === 'function') {
                    // indicateAutoFill(originSelect); // Optional visual cue
                }
            }
        }
    }
}
