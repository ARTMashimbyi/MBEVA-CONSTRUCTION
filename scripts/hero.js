document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.getElementById('hero');
    
    const slides = [
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
    
    function renderHero() {
      heroContainer.innerHTML = `
        <section id="home" class="min-h-screen bg-gradient-to-br from-blue-900 to-slate-800 text-white pt-20 relative overflow-hidden">
          <div class="hero-bg-pattern"></div>
          <div class="container mx-auto px-4 h-full flex items-center relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div class="hero-content space-y-6">
                <div class="space-y-4">
                  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight slide-in-left">
                    ${slides[currentSlide].title}
                  </h1>
                  <h2 class="text-2xl md:text-3xl text-orange-400 font-medium slide-in-left" style="animation-delay: 0.2s">
                    ${slides[currentSlide].subtitle}
                  </h2>
                  <p class="text-xl max-w-lg slide-in-left" style="animation-delay: 0.4s">
                    ${slides[currentSlide].description}
                  </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 slide-in-left" style="animation-delay: 0.6s">
                  <a href="#services" class="btn btn-primary pulse-animate">Our Services</a>
                  <a href="#contact" class="btn btn-outline">Get Quote</a>
                </div>
                
                <div class="flex gap-3 slide-in-left" style="animation-delay: 0.8s">
                  ${slides.map((_, index) => `
                    <button data-slide="${index}" class="w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-orange-500 w-6' : 'bg-gray-500'}"></button>
                  `).join('')}
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white/10 p-6 rounded-lg border border-white/20 float-animate" style="animation-delay: 0.2s">
                  <i data-lucide="building-2" class="h-12 w-12 text-orange-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">12+ Years</h3>
                  <p>Experience</p>
                </div>
                
                <div class="bg-white/10 p-6 rounded-lg border border-white/20 float-animate" style="animation-delay: 0.4s">
                  <i data-lucide="award" class="h-12 w-12 text-orange-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Quality</h3>
                  <p>NHBRC Registered</p>
                </div>
                
                <div class="bg-white/10 p-6 rounded-lg border border-white/20 float-animate" style="animation-delay: 0.6s">
                  <i data-lucide="users" class="h-12 w-12 text-orange-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Empowerment</h3>
                  <p>Community Development</p>
                </div>
                
                <div class="bg-white/10 p-6 rounded-lg border border-white/20 float-animate" style="animation-delay: 0.8s">
                  <i data-lucide="wrench" class="h-12 w-12 text-orange-500 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-2">Turnkey</h3>
                  <p>Complete Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
      
      // Add slide button event listeners
      const slideButtons = heroContainer.querySelectorAll('[data-slide]');
      slideButtons.forEach(button => {
        button.addEventListener('click', function() {
          currentSlide = parseInt(this.getAttribute('data-slide'));
          renderHero();
          lucide.createIcons();
        });
      });
      
      lucide.createIcons();
    }
    
    // Initial render
    renderHero();
    
    // Auto-advance slides
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      renderHero();
    }, 5000);
  });