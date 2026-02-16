/* ==================== ElmiViseAI — Main JavaScript ==================== */

// ==================== Navbar Scroll Effect ====================
(function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // If page already has .scrolled class (inner pages), keep it
    const isInnerPage = navbar.classList.contains('scrolled');

    if (!isInnerPage) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Initial check
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        }
    }
})();


// ==================== Mobile Menu Toggle ====================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('open');
    });
});


// ==================== Scroll Reveal Animations ====================
(function() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
})();


// ==================== FAQ Accordion ====================
function toggleFaq(element) {
    const item = element.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
    });

    // Open clicked (if wasn't already open)
    if (!isOpen) {
        item.classList.add('open');
    }
}


// ==================== Contact Form Handling ====================
function handleContactSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submitBtn');
    const successDiv = document.getElementById('formSuccess');

    // Collect form data
    const formData = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        company: form.company?.value?.trim() || '',
        interest: form.interest?.value || '',
        budget: form.budget?.value || '',
        message: form.message.value.trim()
    };

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate sending (replace with real API call later)
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        // In production, you'd POST to an API endpoint here:
        // fetch('https://your-api/contact', { method: 'POST', body: JSON.stringify(formData) })

        console.log('Form submitted:', formData);

        // Show success
        form.style.display = 'none';
        successDiv.style.display = 'block';

        btn.textContent = 'Send Message';
        btn.disabled = false;
    }, 1200);
}

function resetContactForm() {
    const form = document.getElementById('contactForm');
    const successDiv = document.getElementById('formSuccess');

    form.reset();
    form.style.display = 'block';
    successDiv.style.display = 'none';
}


// ==================== Smooth Scroll for Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ==================== Active Nav Link Highlighting ====================
(function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (link.classList.contains('nav-cta')) {
            // Don't remove active from CTA
        } else {
            link.classList.remove('active');
        }
    });
})();


// ==================== Typing Effect for Hero (optional) ====================
(function() {
    const chat = document.querySelector('.mockup-chat');
    if (!chat) return;

    // Messages are animated via CSS animation-delay — no JS needed
    // This function adds a subtle "typing indicator" before each message
    const messages = chat.querySelectorAll('.mockup-msg');
    messages.forEach((msg, i) => {
        msg.style.animationDelay = `${0.3 + (i * 1.2)}s`;
    });
})();


// ==================== Console Branding ====================
console.log(
    '%c ElmiViseAI %c AI-Powered Solutions for Modern Business ',
    'background: #0891b2; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #155e75; color: white; padding: 4px 8px; border-radius: 0 4px 4px 0;'
);
