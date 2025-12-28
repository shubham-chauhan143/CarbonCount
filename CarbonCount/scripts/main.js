// GSAP Animations and UI Logic
gsap.registerPlugin(ScrollTrigger);

// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 14, 18, 0.95)';
        nav.style.padding = '0.5rem 0';
    } else {
        nav.style.background = 'rgba(10, 14, 18, 0.8)';
        nav.style.padding = '1rem 0';
    }
});

// Auth State Logic
function checkAuthState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        document.body.classList.add('logged-in');
    } else {
        document.body.classList.remove('logged-in');
    }
}

// Check on load
document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});

// Reveal Animations
const revealElements = document.querySelectorAll('.feature-card, .glass-panel, h1, h2, .stat-card');

revealElements.forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = counter.innerText;
    const value = parseInt(target.replace(/[^0-9]/g, ''));

    ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        onEnter: () => {
            let start = 0;
            const duration = 2000;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                counter.innerText = Math.floor(progress * value) + (target.includes('$') ? '$' : '') + (target.includes('M') ? 'M+' : target.includes('k') ? 'k+' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    });
});

// Custom Cursor or Hover Effects
document.querySelectorAll('button, a, .glass-panel').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, { scale: el.classList.contains('glass-panel') ? 1.02 : 1.05, duration: 0.2 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(el, { scale: 1, duration: 0.2 });
    });
});
