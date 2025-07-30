
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Toggle menu on hamburger click
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from reaching document
    menu.classList.toggle('hidden');
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnButton = toggleBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(el => observer.observe(el));
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Add 'animate-on-scroll' class to elements that should animate on scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => el.classList.add('animate-on-scroll')); 
// Add 'animate-fade-in' class to elements that should fade in
const fadeInElements = document.querySelectorAll('.animate-fade-in');
fadeInElements.forEach(el => el.classList.add('animate-fade-in'));

