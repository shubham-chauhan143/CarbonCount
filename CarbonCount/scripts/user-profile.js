
// Logic for User Profile persistence
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();

    const saveBtn = document.getElementById('btn-save-profile');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveProfile);
    }
});

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('carbonCountProfile'));
    if (profile) {
        if (document.getElementById('profile-name')) document.getElementById('profile-name').value = profile.companyName || '';
        if (document.getElementById('profile-id')) document.getElementById('profile-id').value = profile.companyId || '';
        if (document.getElementById('profile-country')) document.getElementById('profile-country').value = profile.country || 'India';
        if (document.getElementById('profile-role')) document.getElementById('profile-role').value = profile.role || 'Exporter';
    }
}

function saveProfile() {
    const companyName = document.getElementById('profile-name').value;
    const companyId = document.getElementById('profile-id').value;
    const country = document.getElementById('profile-country') ? document.getElementById('profile-country').value : 'India';
    const role = document.getElementById('profile-role').value;

    const profile = {
        companyName,
        companyId,
        country,
        role
    };

    localStorage.setItem('carbonCountProfile', JSON.stringify(profile));

    // Visual Feedback
    const btn = document.getElementById('btn-save-profile');
    const originalText = btn.innerText;
    btn.innerText = 'Saved!';
    btn.style.background = '#00ffa3';
    btn.style.color = 'black';

    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = ''; // Revert to CSS default
        btn.style.color = '';
    }, 2000);
}
