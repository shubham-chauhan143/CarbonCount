// Local Storage Mock Authentication & Data Manager
// This replaces Firebase for local development

class LocalAuthManager {
    constructor() {
        this.currentUser = this.loadCurrentUser();
        this.initAuthState();
    }

    // Initialize auth state
    initAuthState() {
        if (this.currentUser) {
            this.updateUIForAuthState(true);
        } else {
            this.updateUIForAuthState(false);
        }
    }

    // Load current user from localStorage
    loadCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    // Save current user to localStorage
    saveCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
    }

    // Clear current user
    clearCurrentUser() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
    }

    // Update UI based on auth state
    updateUIForAuthState(isAuthenticated) {
        const guestElements = document.querySelectorAll('.auth-guest');
        const userElements = document.querySelectorAll('.auth-user');

        if (isAuthenticated && this.currentUser) {
            guestElements.forEach(el => el.style.display = 'none');
            userElements.forEach(el => el.style.display = 'flex');

            // Update user name if element exists
            const nameEl = document.getElementById('nav-user-name');
            if (nameEl) {
                nameEl.textContent = this.currentUser.displayName || 'Profile';
            }
        } else {
            guestElements.forEach(el => el.style.display = 'flex');
            userElements.forEach(el => el.style.display = 'none');
        }
    }

    // Mock Google Sign-In
    async signInWithGoogle() {
        // Simulate API delay
        await this.delay(500);

        const user = {
            uid: 'local_' + Date.now(),
            email: 'demo@carboncount.com',
            displayName: 'Demo User',
            photoURL: null,
            provider: 'google'
        };

        this.saveCurrentUser(user);
        this.updateUIForAuthState(true);

        return { success: true, user };
    }

    // Email/Password Sign-Up
    async signUpWithEmail(email, password, displayName = '') {
        await this.delay(500);

        // Check if user already exists
        const users = this.getAllUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Email already in use' };
        }

        const user = {
            uid: 'local_' + Date.now(),
            email,
            displayName: displayName || email.split('@')[0],
            photoURL: null,
            provider: 'email'
        };

        // Save to users list
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // Set as current user
        this.saveCurrentUser(user);
        this.updateUIForAuthState(true);

        return { success: true, user };
    }

    // Email/Password Sign-In
    async signInWithEmail(email, password) {
        await this.delay(500);

        const users = this.getAllUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            return { success: false, error: 'User not found' };
        }

        this.saveCurrentUser(user);
        this.updateUIForAuthState(true);

        return { success: true, user };
    }

    // Sign Out
    async signOutUser() {
        await this.delay(300);

        this.clearCurrentUser();
        this.updateUIForAuthState(false);

        return { success: true };
    }

    // Get all users
    getAllUsers() {
        const usersStr = localStorage.getItem('users');
        return usersStr ? JSON.parse(usersStr) : [];
    }

    // Save calculation
    async saveCalculation(calcData) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        await this.delay(300);

        const calcId = 'calc_' + Date.now();
        const calculation = {
            id: calcId,
            userId: this.currentUser.uid,
            ...calcData,
            timestamp: new Date().toISOString()
        };

        const calculations = this.getCalculations();
        calculations.push(calculation);
        localStorage.setItem('calculations', JSON.stringify(calculations));

        return { success: true, calcId };
    }

    // Get user's calculations
    async getCalculations() {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        await this.delay(200);

        const allCalcs = JSON.parse(localStorage.getItem('calculations') || '[]');
        const userCalcs = allCalcs.filter(c => c.userId === this.currentUser.uid);

        return { success: true, calculations: userCalcs };
    }

    // Delete calculation
    async deleteCalculation(calcId) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        await this.delay(200);

        const allCalcs = JSON.parse(localStorage.getItem('calculations') || '[]');
        const filtered = allCalcs.filter(c => c.id !== calcId);
        localStorage.setItem('calculations', JSON.stringify(filtered));

        return { success: true };
    }

    // Update user profile
    async updateProfile(updates) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        await this.delay(200);

        this.currentUser = { ...this.currentUser, ...updates };
        this.saveCurrentUser(this.currentUser);

        return { success: true };
    }

    // Export user data
    async exportData() {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        const calcsResult = await this.getCalculations();
        const data = {
            user: this.currentUser,
            calculations: calcsResult.calculations,
            exportedAt: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `carboncount-data-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);

        return { success: true };
    }

    // Utility: delay function
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Global instance
window.userProfileManager = new LocalAuthManager();

console.log('✅ Local Auth Manager initialized (localStorage-based)');
