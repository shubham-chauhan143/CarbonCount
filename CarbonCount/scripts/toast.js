// Toast Notification System
class ToastManager {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }
        return container;
    }

    show({ type = 'info', title, message, duration = 5000 }) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = {
            success: 'check-circle',
            error: 'alert-circle',
            warning: 'alert-triangle',
            info: 'info'
        };

        const colors = {
            success: '#00ffa3',
            error: '#ff4b2b',
            warning: '#ffa500',
            info: '#00d2ff'
        };

        toast.style.cssText = `
            background: rgba(10, 14, 18, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid ${colors[type]};
            border-radius: 12px;
            padding: 16px;
            min-width: 300px;
            max-width: 400px;
            display: flex;
            align-items: start;
            gap: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
        `;

        toast.innerHTML = `
            <i data-lucide="${icons[type]}" style="color: ${colors[type]}; width: 20px; height: 20px; flex-shrink: 0;"></i>
            <div style="flex: 1;">
                <h4 style="margin: 0 0 4px 0; color: white; font-size: 14px; font-weight: 600;">${title}</h4>
                <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 13px;">${message}</p>
            </div>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: rgba(255, 255, 255, 0.5); cursor: pointer; font-size: 20px; padding: 0; width: 20px; height: 20px;">×</button>
        `;

        this.container.appendChild(toast);

        // Reinitialize Lucide icons
        if (window.lucide) {
            lucide.createIcons();
        }

        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }
    }

    success(title, message) {
        this.show({ type: 'success', title, message });
    }

    error(title, message) {
        this.show({ type: 'error', title, message });
    }

    warning(title, message) {
        this.show({ type: 'warning', title, message });
    }

    info(title, message) {
        this.show({ type: 'info', title, message });
    }
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
        #toast-container {
            left: 20px;
            right: 20px;
            top: auto;
            bottom: 20px;
        }
    }
`;
document.head.appendChild(style);

// Global instance
window.toast = new ToastManager();

// Export for use in modules
export default ToastManager;
