// User Profile Manager - Handles Firebase Authentication and Data Persistence
import { auth, db, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, updateDoc } from './firebase-config.js';

class UserProfileManager {
    constructor() {
        this.currentUser = null;
        this.userProfile = null;
        this.initAuthListener();
    }

    // Initialize authentication state listener
    initAuthListener() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.currentUser = user;
                await this.loadUserProfile(user.uid);
                this.updateUIForAuthState(true);
            } else {
                this.currentUser = null;
                this.userProfile = null;
                this.updateUIForAuthState(false);
            }
        });
    }

    // Update UI based on authentication state
    updateUIForAuthState(isAuthenticated) {
        const guestElements = document.querySelectorAll('.auth-guest');
        const userElements = document.querySelectorAll('.auth-user');

        if (isAuthenticated) {
            guestElements.forEach(el => el.style.display = 'none');
            userElements.forEach(el => el.style.display = 'block');

            // Update user info display
            const userNameEl = document.getElementById('user-name');
            const userEmailEl = document.getElementById('user-email');
            if (userNameEl) userNameEl.textContent = this.currentUser.displayName || 'User';
            if (userEmailEl) userEmailEl.textContent = this.currentUser.email;
        } else {
            guestElements.forEach(el => el.style.display = 'block');
            userElements.forEach(el => el.style.display = 'none');
        }
    }

    // Google Sign-In
    async signInWithGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Create user profile if doesn't exist
            await this.createProfileIfNotExists(user.uid, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            });

            return { success: true, user };
        } catch (error) {
            console.error('Google Sign-In Error:', error);
            return { success: false, error: error.message };
        }
    }

    // List of common disposable email domains (add more as needed)
    isDisposableEmail(email) {
        const disposableDomains = [
            'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'mailinator.com',
            'throwaway.email', 'temp-mail.org', 'fakeinbox.com', 'maildrop.cc',
            'yopmail.com', 'getnada.com', 'trashmail.com', 'sharklasers.com',
            'guerrillamailblock.com', 'spam4.me', 'grr.la', 'discard.email',
            'emailondeck.com', 'mintemail.com', 'mytemp.email', 'tempinbox.com',
            'mohmal.com', 'anonbox.net', 'anonymousemail.me', 'burnermail.io',
            'disposable.com', 'emailsensei.com', 'getairmail.com', 'harakirimail.com',
            'incognitomail.com', 'jetable.org', 'mailcatch.com', 'mailnesia.com',
            'mailnull.com', 'meltmail.com', 'moakt.com', 'mytrashmail.com',
            'no-spam.ws', 'nospam.ze.tc', 'nospamfor.us', 'nowmymail.com',
            'objectmail.com', 'obobbo.com', 'oneoffemail.com', 'pookmail.com',
            'proxymail.eu', 'putthisinyourspamdatabase.com', 'rcpt.at', 'recode.me',
            'recursor.net', 'rtrtr.com', 'safe-mail.net', 'safetymail.info',
            'saynotospams.com', 'selfdestructingmail.com', 'sendspamhere.com',
            'shiftmail.com', 'skeefmail.com', 'slaskpost.se', 'slopsbox.com',
            'smellfear.com', 'snakemail.com', 'sneakemail.com', 'sogetthis.com',
            'soodonims.com', 'spam.la', 'spamavert.com', 'spambob.com',
            'spambog.com', 'spambog.de', 'spambog.ru', 'spambox.us',
            'spamcannon.com', 'spamcannon.net', 'spamcon.org', 'spamcorptastic.com',
            'spamday.com', 'spamex.com', 'spamfree24.com', 'spamfree24.de',
            'spamgourmet.com', 'spamherelots.com', 'spamhereplease.com', 'spamhole.com',
            'spamify.com', 'spaminator.de', 'spamkill.info', 'spaml.com',
            'spaml.de', 'spammotel.com', 'spamobox.com', 'spamspot.com',
            'spamthis.co.uk', 'spamthisplease.com', 'speed.1s.fr', 'supergreatmail.com',
            'supermailer.jp', 'suremail.info', 'teewars.org', 'teleworm.com',
            'teleworm.us', 'temp-mail.com', 'temp-mail.de', 'temp-mail.org',
            'tempail.com', 'tempalias.com', 'tempe-mail.com', 'tempemail.biz',
            'tempemail.co.za', 'tempemail.com', 'tempemail.net', 'tempinbox.co.uk',
            'tempinbox.com', 'tempmail.eu', 'tempmail.it', 'tempmail2.com',
            'tempmaildemo.com', 'tempmailer.com', 'tempmailer.de', 'tempomail.fr',
            'temporarily.de', 'temporarioemail.com.br', 'temporaryemail.net',
            'temporaryemail.us', 'temporaryforwarding.com', 'temporaryinbox.com',
            'temporarymailaddress.com', 'thanksnospam.info', 'thankyou2010.com',
            'thc.st', 'thelimestones.com', 'thisisnotmyrealemail.com', 'throwawayemailaddress.com',
            'tilien.com', 'tmailinator.com', 'tradermail.info', 'trash-amil.com',
            'trash-mail.at', 'trash-mail.com', 'trash-mail.de', 'trash2009.com',
            'trashemail.de', 'trashmail.at', 'trashmail.com', 'trashmail.de',
            'trashmail.me', 'trashmail.net', 'trashmail.org', 'trashmail.ws',
            'trashmailer.com', 'trashymail.com', 'trashymail.net', 'trillianpro.com',
            'turual.com', 'twinmail.de', 'tyldd.com', 'uggsrock.com'
        ];

        const domain = email.split('@')[1]?.toLowerCase();
        return disposableDomains.includes(domain);
    }

    // Validate email format and check for disposable domains
    validateEmail(email) {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { valid: false, error: 'Invalid email format' };
        }

        // Check for disposable email
        if (this.isDisposableEmail(email)) {
            return { valid: false, error: 'Temporary/disposable email addresses are not allowed. Please use a permanent email address.' };
        }

        return { valid: true };
    }

    // Email/Password Sign-In
    async signInWithEmail(email, password) {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: result.user };
        } catch (error) {
            console.error('Email Sign-In Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Email/Password Sign-Up
    async signUpWithEmail(email, password, displayName) {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            // Create user profile
            await this.createProfileIfNotExists(user.uid, {
                email: user.email,
                displayName: displayName || email.split('@')[0]
            });

            return { success: true, user };
        } catch (error) {
            console.error('Email Sign-Up Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Sign Out
    async signOutUser() {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            console.error('Sign-Out Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Create user profile if it doesn't exist
    async createProfileIfNotExists(uid, userData) {
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                ...userData,
                createdAt: new Date().toISOString(),
                companyName: '',
                companyId: '',
                country: '',
                industry: ''
            });
        }
    }

    // Load user profile
    async loadUserProfile(uid) {
        try {
            const userRef = doc(db, 'users', uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                this.userProfile = userSnap.data();
                return this.userProfile;
            }
            return null;
        } catch (error) {
            console.error('Load Profile Error:', error);
            return null;
        }
    }

    // Update user profile
    async updateProfile(updates) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const userRef = doc(db, 'users', this.currentUser.uid);
            await updateDoc(userRef, updates);
            this.userProfile = { ...this.userProfile, ...updates };
            return { success: true };
        } catch (error) {
            console.error('Update Profile Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Save calculation to Firestore
    async saveCalculation(calcData) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const calcId = 'calc_' + Date.now();
            const calcRef = doc(db, 'users', this.currentUser.uid, 'calculations', calcId);

            await setDoc(calcRef, {
                ...calcData,
                timestamp: new Date().toISOString(),
                userId: this.currentUser.uid
            });

            return { success: true, calcId };
        } catch (error) {
            console.error('Save Calculation Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Get all calculations for current user
    async getCalculations() {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const calcsRef = collection(db, 'users', this.currentUser.uid, 'calculations');
            const querySnapshot = await getDocs(calcsRef);

            const calculations = [];
            querySnapshot.forEach((doc) => {
                calculations.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // Sort by timestamp descending
            calculations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            return { success: true, calculations };
        } catch (error) {
            console.error('Get Calculations Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Delete calculation
    async deleteCalculation(calcId) {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const calcRef = doc(db, 'users', this.currentUser.uid, 'calculations', calcId);
            await deleteDoc(calcRef);
            return { success: true };
        } catch (error) {
            console.error('Delete Calculation Error:', error);
            return { success: false, error: error.message };
        }
    }

    // Export all user data
    async exportData() {
        if (!this.currentUser) {
            return { success: false, error: 'Not authenticated' };
        }

        try {
            const calcsResult = await this.getCalculations();

            const exportData = {
                profile: this.userProfile,
                calculations: calcsResult.calculations || [],
                exportedAt: new Date().toISOString()
            };

            // Create downloadable JSON
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `carboncount-data-${Date.now()}.json`;
            link.click();

            return { success: true };
        } catch (error) {
            console.error('Export Data Error:', error);
            return { success: false, error: error.message };
        }
    }
}

// Create global instance
window.userProfileManager = new UserProfileManager();

export default UserProfileManager;
