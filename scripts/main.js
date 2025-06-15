document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.toggle('hidden');
            const icon = isOpen ? 'menu' : 'x';
            mobileMenuButton.innerHTML = `<i data-lucide="${icon}" class="h-6 w-6 text-blue-900"></i>`;
            lucide.createIcons();
        });
    }

    // Header scroll effect
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-white');
                nav.classList.remove('bg-white/90');
            } else {
                nav.classList.remove('shadow-lg', 'bg-white');
                nav.classList.add('bg-white/90');
            }
        });

        // Initialize header state
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'bg-white');
            nav.classList.remove('bg-white/90');
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerHeight = document.querySelector('nav')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (mobileMenuButton) {
                        mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6 text-blue-900"></i>';
                        lucide.createIcons();
                    }
                }
            }
        });
    });

    // Hero slider functionality
    const heroSlides = [
        {
            title: "Building South Africa's Future",
            subtitle: "Professional Construction Services",
            description: "12+ years experience in general construction and renovation projects."
        },
        {
            title: "Empowering Communities", 
            subtitle: "Skills Development & Training",
            description: "Committed to skills transfer in historically disadvantaged communities."
        },
        {
            title: "Quality & Innovation",
            subtitle: "Cost-Effective Solutions",
            description: "Delivering projects on time and within budget."
        }
    ];
    
    const slideElements = {
        title: document.querySelector('#hero h1'),
        subtitle: document.querySelector('#hero h2'),
        description: document.querySelector('#hero .hero-content p'),
        buttons: document.querySelectorAll('#hero [data-slide]')
    };
    
    let currentSlide = 0;
    let slideInterval;

    function updateSlide() {
        if (slideElements.title && slideElements.subtitle && slideElements.description) {
            slideElements.title.textContent = heroSlides[currentSlide].title;
            slideElements.subtitle.textContent = heroSlides[currentSlide].subtitle;
            slideElements.description.textContent = heroSlides[currentSlide].description;
            
            // Update active slide indicator
            if (slideElements.buttons.length) {
                slideElements.buttons.forEach((button, index) => {
                    button.classList.toggle('bg-orange-500', index === currentSlide);
                    button.classList.toggle('w-6', index === currentSlide);
                    button.classList.toggle('bg-gray-500', index !== currentSlide);
                    button.classList.toggle('w-3', index !== currentSlide);
                });
            }
        }
    }
    
    // Initialize slider if hero section exists
    if (slideElements.title) {
        // Add click event to slide buttons
        if (slideElements.buttons.length) {
            slideElements.buttons.forEach(button => {
                button.addEventListener('click', function() {
                    currentSlide = parseInt(this.getAttribute('data-slide'));
                    updateSlide();
                    resetSlideInterval();
                });
            });
        }
        
        // Start auto-advance slides
        startSlideInterval();
        
        // Pause slides on hover
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', pauseSlideInterval);
            heroSection.addEventListener('mouseleave', startSlideInterval);
        }
    }

    function startSlideInterval() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % heroSlides.length;
            updateSlide();
        }, 5000);
    }

    function pauseSlideInterval() {
        if (slideInterval) clearInterval(slideInterval);
    }

    function resetSlideInterval() {
        pauseSlideInterval();
        startSlideInterval();
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            
            // Show success message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <i data-lucide="loader" class="h-5 w-5 animate-spin"></i>
                Sending...
            `;
            lucide.createIcons();
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                lucide.createIcons();
            }, 1500);
        });
    }

    // Back to top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top hidden';
    backToTopButton.innerHTML = '<i data-lucide="arrow-up" class="h-5 w-5"></i>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
            backToTopButton.classList.add('hidden');
        }
    });

    // Initialize all icons
    lucide.createIcons();
});

function openGallery(galleryId) {
    console.log('Opening gallery:', galleryId);
    // In a real implementation, this would open a modal or lightbox
    // Example:
    // const galleryModal = new GalleryModal(galleryId);
    // galleryModal.open();
}