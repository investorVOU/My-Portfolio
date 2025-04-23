// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
                links.forEach(link => {
                    link.style.animation = '';
                });
            }
        }
    });
});

// Typing Effect for Hero Section
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize typing effect
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    typeEffect(subtitle, text);
}

// Skill Progress Animation
function animateSkills() {
    const skills = document.querySelectorAll('.skill-level .progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 200);
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skills-grid')) {
                animateSkills();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item, .point').forEach(el => {
    observer.observe(el);
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        projectCards.forEach(card => {
            const technologies = card.dataset.tech.split(' ');
            if (filter === 'all' || technologies.includes(filter)) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('show'), 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('show');
            }
        });
    });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        let isValid = true;
        const email = data.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            isValid = false;
            showError('Please enter a valid email address');
        }
        
        if (isValid) {
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            showSuccess('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Error and Success Messages
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('message', 'error');
    errorDiv.textContent = message;
    showMessage(errorDiv);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.classList.add('message', 'success');
    successDiv.textContent = message;
    showMessage(successDiv);
}

function showMessage(element) {
    document.body.appendChild(element);
    setTimeout(() => {
        element.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        element.classList.remove('show');
        setTimeout(() => element.remove(), 300);
    }, 3000);
}

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.8;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
}); 