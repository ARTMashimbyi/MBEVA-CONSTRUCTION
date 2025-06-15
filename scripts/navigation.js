document.addEventListener('DOMContentLoaded', function() {
    const navigationContainer = document.getElementById('navigation');
    
    navigationContainer.innerHTML = `
      <nav class="fixed w-full top-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a href="#home" class="nav-logo">
              <i data-lucide="building-2" class="h-8 w-8 nav-logo-icon"></i>
              <span class="nav-logo-text">MBEVA CONSTRUCTION</span>
            </a>
            
            <div class="hidden md:flex items-center gap-8">
              <a href="#about" class="text-slate-700 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#services" class="text-slate-700 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#experience" class="text-slate-700 hover:text-orange-500 transition-colors font-medium">Projects</a>
              <a href="#contact" class="btn btn-primary px-6">Contact Us</a>
            </div>
            
            <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <i data-lucide="menu" class="h-6 w-6 text-slate-700"></i>
            </button>
          </div>
          
          
            </div>
          </div>
        </div>
      </nav>
    `;
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.innerHTML = '<i data-lucide="x" class="h-6 w-6 text-slate-700"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6 text-slate-700"></i>';
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
          mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6 text-slate-700"></i>';
          lucide.createIcons();
        }
      });
    });
    
    lucide.createIcons();
  });