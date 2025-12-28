// Mobile-specific JavaScript utilities
// Handles touch interactions, responsive behavior, and mobile optimizations

(function () {
    'use strict';

    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Add mobile class to body
    if (isMobile || window.innerWidth <= 768) {
        document.body.classList.add('mobile-device');
    }

    // Viewport height fix for mobile browsers (100vh issue)
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // Prevent zoom on input focus (iOS)
    if (isMobile) {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.fontSize = '16px';
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Mobile menu toggle (if hamburger exists)
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Touch feedback for buttons
    if (isTouch) {
        document.querySelectorAll('button, .btn-primary, .btn-secondary, .role-card, .transport-card').forEach(el => {
            el.addEventListener('touchstart', function () {
                this.style.transform = 'scale(0.98)';
            });

            el.addEventListener('touchend', function () {
                this.style.transform = '';
            });
        });
    }

    // Lazy load images on mobile
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Horizontal scroll tables on mobile
    document.querySelectorAll('table').forEach(table => {
        if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            wrapper.style.overflowX = 'auto';
            wrapper.style.webkitOverflowScrolling = 'touch';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });

    // Debounce resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Update mobile class
            if (window.innerWidth <= 768) {
                document.body.classList.add('mobile-device');
            } else {
                document.body.classList.remove('mobile-device');
            }
        }, 250);
    });

    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Add swipe gestures for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe right
                document.dispatchEvent(new CustomEvent('swipeRight'));
            } else {
                // Swipe left
                document.dispatchEvent(new CustomEvent('swipeLeft'));
            }
        }
    }

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    console.log('Mobile utilities loaded');
})();

// Global function for HTML onclick handlers
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const hamburger = document.querySelector('.hamburger-btn');

    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
    if (mobileOverlay) {
        mobileOverlay.classList.toggle('active');
    }
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

