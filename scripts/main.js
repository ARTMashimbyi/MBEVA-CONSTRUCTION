document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.innerHTML = '<i data-lucide="x" class="h-6 w-6 text-blue-900"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6 text-blue-900"></i>';
      }
      
      lucide.createIcons();
    });
    
    // Header scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          mobileMenu.classList.add('hidden');
          mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6 text-blue-900"></i>';
          lucide.createIcons();
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
    
    let currentSlide = 0;
    const slideTitle = document.querySelector('#hero h1');
    const slideSubtitle = document.querySelector('#hero h2');
    const slideDescription = document.querySelector('#hero .hero-content p');
    const slideButtons = document.querySelectorAll('#hero [data-slide]');
    
    function updateSlide() {
      slideTitle.textContent = heroSlides[currentSlide].title;
      slideSubtitle.textContent = heroSlides[currentSlide].subtitle;
      slideDescription.textContent = heroSlides[currentSlide].description;
      
      // Update active slide indicator
      slideButtons.forEach((button, index) => {
        if (index === currentSlide) {
          button.classList.add('bg-orange-500', 'w-6');
          button.classList.remove('bg-gray-500', 'w-3');
        } else {
          button.classList.add('bg-gray-500', 'w-3');
          button.classList.remove('bg-orange-500', 'w-6');
        }
      });
    }
    
    // Add click event to slide buttons
    slideButtons.forEach(button => {
      button.addEventListener('click', function() {
        currentSlide = parseInt(this.getAttribute('data-slide'));
        updateSlide();
      });
    });
    
    // Auto-advance slides
    setInterval(() => {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      updateSlide();
    }, 5000);
    
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
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }
    
    // Initialize icons
    lucide.createIcons();
});

function openGallery(galleryId) {
  console.log('Opening gallery:', galleryId);
  // Implement gallery modal functionality here
}