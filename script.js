// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the data to a backend
    // For now, we'll show a success message
    alert(`Message sent successfully! I'll get back to you soon.\n\nSender: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear the form
    form.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing animation for terminal commands (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Add click handlers for skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 200);
    });
});

// Add smooth animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add hover effect to terminal window
const terminalWindow = document.querySelector('.terminal-window');
if (terminalWindow) {
    terminalWindow.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    terminalWindow.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiPattern.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        alert('🎉 You found the easter egg! Feel free to explore the code on GitHub!');
        konamiCode = [];
    }
});

// Mobile menu toggle (if needed)
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate tech tags on hover
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Add parallax effect to terminal window
window.addEventListener('scroll', () => {
    const terminal = document.querySelector('.terminal-window');
    if (terminal) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        terminal.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

console.log('%c👋 Hello! Interested in the code? Check out https://github.com/fkabaalkhail', 'color: #00ff88; font-size: 14px; font-family: monospace;');
console.log('%cBuilt with ❤️ by Fahad Aba-Alkhail', 'color: #00ff88; font-size: 12px; font-family: monospace;');

// Certificates dropdown toggle
function toggleCertificates() {
    const dropdown = document.getElementById('certificatesDropdown');
    if (!dropdown) return;
    
    const isVisible = dropdown.style.display !== 'none' && 
                     window.getComputedStyle(dropdown).display !== 'none';
    
    if (!isVisible) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

// Carousel functionality
let slideIndex = {};

function showSlide(carouselId, n) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    if (!slideIndex[carouselId]) {
        slideIndex[carouselId] = 0;
    }
    
    const slides = carousel.getElementsByClassName('carousel-slide');
    const dots = carousel.parentElement.querySelectorAll('.carousel-dots .dot');
    
    if (n >= slides.length) { slideIndex[carouselId] = 0; }
    if (n < 0) { slideIndex[carouselId] = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex[carouselId]].classList.add('active');
    if (dots[slideIndex[carouselId]]) {
        dots[slideIndex[carouselId]].classList.add('active');
    }
}

function changeSlide(carouselId, n) {
    if (!slideIndex[carouselId]) {
        slideIndex[carouselId] = 0;
    }
    slideIndex[carouselId] += n;
    showSlide(carouselId, slideIndex[carouselId]);
}

function currentSlide(carouselId, n) {
    slideIndex[carouselId] = n;
    showSlide(carouselId, n);
}

// Initialize first slide on load
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach((carousel, index) => {
        const id = carousel.id;
        if (id) {
            showSlide(id, 0);
            
            // Auto-play carousel (optional)
            // Uncomment the lines below to enable auto-sliding
            // setInterval(() => {
            //     changeSlide(id, 1);
            // }, 5000);
        }
    });
});

