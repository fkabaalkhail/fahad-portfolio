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
console.log('%cBuilt with ❤️ by Fahad Aba-Alkhail', 'color: #8b5cf6; font-size: 12px; font-family: monospace;');

