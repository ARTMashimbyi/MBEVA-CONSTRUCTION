// Header/Navigation
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header');
    
    headerContainer.innerHTML = `
      <nav class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <a href="#home" class="nav-logo flex items-center gap-3">
              <img src="images/logo.png" alt="MBEVA Construction Logo" class="h-10 w-auto">
              <span class="nav-logo-text text-xl font-bold text-blue-900 hidden md:block">MBEVA CONSTRUCTION</span>
            </a>
            
            <div class="hidden md:flex items-center gap-8">
              <a href="#about" class="text-blue-900 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#services" class="text-blue-900 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#experience" class="text-blue-900 hover:text-orange-500 transition-colors font-medium">Projects</a>
              <a href="#contact" class="btn btn-primary px-6">Contact Us</a>
            </div>
            
            <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <i data-lucide="menu" class="h-6 w-6 text-blue-900"></i>
            </button>
          </div>
          
          <!-- Mobile Menu -->
          <div id="mobile-menu" class="hidden md:hidden bg-white py-4 px-4 rounded-lg shadow-xl mt-2">
            <div class="flex flex-col gap-4">
              <a href="#about" class="text-blue-900 hover:text-orange-500 transition-colors font-medium py-2">About</a>
              <a href="#services" class="text-blue-900 hover:text-orange-500 transition-colors font-medium py-2">Services</a>
              <a href="#experience" class="text-blue-900 hover:text-orange-500 transition-colors font-medium py-2">Projects</a>
              <a href="#contact" class="btn btn-primary w-full text-center py-3">Contact Us</a>
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
    
    lucide.createIcons();
});

// Hero Section
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
        <section id="home" class="min-h-screen bg-blue-900 text-white pt-20 relative overflow-hidden">
          <div class="hero-bg-image"></div>
          <div class="hero-overlay"></div>
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

// About Section
document.addEventListener('DOMContentLoaded', function() {
  const aboutContainer = document.getElementById('about');
  
  aboutContainer.innerHTML = `
    <section id="about" class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-blue-900">About MBEVA CONSTRUCTION</h2>
          <p class="text-xl max-w-3xl mx-auto text-blue-800">
            Established in 2019, we are a South African construction company committed to excellence, 
            empowerment, and delivering quality solutions nationwide.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-blue-900">Our Story</h3>
            <p class="text-blue-800">
              MBEVA CONSTRUCTION was founded in 2019 by a visionary with over 12 years of hands-on experience in South Africa's construction industry. Born out of a passion for transformative development and community upliftment, we are more than just a construction company, we are a catalyst for change. Headquartered in Johannesburg and operating nationally, we bridge the gap between world-class construction practices and grassroots empowerment.
            </p>
            <p class="text-blue-800">
              Our journey is rooted in addressing two critical needs: delivering exceptional construction services while actively participating in South Africa's Economic Empowerment programs. We prioritize skills transfer to historically disadvantaged communities, ensuring that every project leaves a legacy of knowledge and opportunity.
            </p>
            <p class="text-blue-800">
              What sets us apart is our adaptive approach. We combine traditional craftsmanship with modern techniques, staying ahead of industry trends to deliver projects on time and within budget without compromising quality. From humble our story reflects resilience, innovation, and an unwavering commitment to building South Africa's future, one brick at a time.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg border border-blue-100">
            <h4 class="text-2xl font-bold mb-6 text-blue-900">Why Choose Us?</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <i data-lucide="award" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold text-blue-900">Experience You Can Trust</h5>
                  <p class="text-blue-800">With a founder boasting 12+ years in the industry and a team of certified professionals, we bring proven expertise to every project. Our portfolio spans residential, commercial, and industrial constructions, all backed by NHBRC certification.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="users" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold text-blue-900">Empowerment as Core Value</h5>
                  <p class="text-blue-800">We don't just build structures; we build people. Through SETA-accredited programs, we train and employ local talent, ensuring skills development in plumbing, electrical work, and carpentry.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="dollar-sign" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold text-blue-900">Cost-Effective Solutions</h5>
                  <p class="text-blue-800">Our lean management approach minimizes waste and maximizes efficiency, passing savings to clients without cutting corners.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="shield-check" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold text-blue-900">Reliability & Transparency</h5>
                  <p class="text-blue-800">With 100% tax compliance and a track record of on-time delivery, we offer peace of mind. Clients like Zenprop and Tau Medical attest to our accountability.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="leaf" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold text-blue-900">Future-Ready Practices</h5>
                  <p class="text-blue-800">We integrate sustainable materials and smart technologies to future-proof your investment while reducing environmental impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg border border-blue-100">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-blue-900 text-white p-8 rounded-lg">
              <i data-lucide="eye" class="h-12 w-12 text-orange-500 mb-4"></i>
              <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
              <p class="mb-4">
                To redefine South Africa's construction landscape by becoming the most trusted, innovative, and socially responsible company in the sector.
              </p>
              <ul class="space-y-2 list-disc pl-5">
                <li>Every project sets new benchmarks in quality and sustainability</li>
                <li>Our empowerment initiatives create a skilled workforce driving national development</li>
                <li>Clients see us as partners collaborating to bring architectural visions to life</li>
                <li>Our name symbolizes excellence across all project scales</li>
              </ul>
              <p class="mt-4">
                By 2040, we aim to expand our footprint across SADC, leveraging our Johannesburg base to deliver pan-African infrastructure solutions.
              </p>
            </div>
             
            <div class="bg-orange-500 text-white p-8 rounded-lg">
              <i data-lucide="target" class="h-12 w-12 text-white mb-4"></i>
              <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
              <p class="mb-4">MBEVA CONSTRUCTION exists to become a market leader while being committed to meeting customer's needs through high-quality, cost-effective, and technical management solutions.</p>
              <ul class="space-y-2 list-disc pl-4">
                <li><strong>Deliver Unmatched Quality:</strong> Use premium materials and enforce strict NHBRC compliance</li>
                <li><strong>Champion Affordability:</strong> Optimize supply chains to reduce client costs</li>
                <li><strong>Innovate Constantly:</strong> Invest in BIM and green construction tech</li>
                <li><strong>Build Relationships:</strong> Provide 5-year warranties on structural work</li>
              </ul>
              <p class="mt-4">
                We measure success not just by completed projects, but by lives transformed through our work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  lucide.createIcons();
});

// Services Section
document.addEventListener('DOMContentLoaded', function() {
  const servicesContainer = document.getElementById('services');
  
  const services = [
    {
      icon: "building",
      title: "General & Commercial Building",
      description: "Complete construction solutions from foundation to finishing, including commercial complexes, residential homes, and industrial buildings. We handle all aspects of construction with NHBRC-certified quality standards.",
      gallery: "building-gallery"
    },
    {
      icon: "home",
      title: "Renovations & Upgrades",
      description: "Transform your existing spaces with our comprehensive renovation services. Specializing in office makeovers, home extensions, and commercial space conversions with customizable upgrade packages.",
      gallery: "renovations-gallery"
    },
    {
      icon: "droplets",
      title: "Professional Plumbing",
      description: "Full-spectrum plumbing services including:<br>• Pipe installation & repairs<br>• Bathroom & kitchen plumbing<br>• Drainage systems<br>• Water-efficient solutions",
      gallery: "plumbing-gallery"
    },
    {
      icon: "zap",
      title: "Electrical Installations",
      description: "Certified electrical services covering:<br>• Wiring & rewiring<br>• DB board installations<br>• Lighting solutions<br>• Energy-efficient upgrades",
      gallery: "electrical-gallery"
    },
    {
      icon: "square",
      title: "Partitioning Solutions",
      description: "Specialized drywall and office partitioning services including:<br>• Gypsum board partitions<br>• Glass office dividers<br>• Soundproof installations<br>• Modular partitioning systems",
      gallery: "partitioning-gallery"
    },
    {
      icon: "layers",
      title: "Ceiling Installations",
      description: "Expert ceiling solutions for all spaces:<br>• Suspended ceilings<br>• Gypsum ceilings<br>• Acoustic ceilings<br>• Decorative finishes<br>• Bulkhead detailing",
      gallery: "ceiling-gallery"
    },
    {
      icon: "wrench",
      title: "Carpentry Services",
      description: "Precision woodwork and joinery including:<br>• Custom cabinetry<br>• Doors & windows<br>• Built-in furniture<br>• Decking & pergolas<br>• Wooden flooring",
      gallery: "carpentry-gallery"
    },
    {
      icon: "sparkles",
      title: "Welding & Metalworks",
      description: "Structural and decorative metal fabrication:<br>• Steel frames & structures<br>• Security gates & burglar bars<br>• Staircases & balustrades<br>• Industrial welding<br>• Ornamental metalwork",
      gallery: "metalworks-gallery"
    },
    {
      icon: "paintbrush",
      title: "Painting & Finishing",
      description: "Professional finishing touches:<br>• Interior/exterior painting<br>• Decorative finishes<br>• Wallpaper installation<br>• Surface preparation<br>• Protective coatings",
      gallery: "painting-gallery"
    }
  ];

  servicesContainer.innerHTML = `
    <section id="services" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Construction Services</h2>
          <p class="text-xl max-w-3xl mx-auto text-blue-800">
            Comprehensive building solutions from concept to completion, delivered with precision and professionalism.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          ${services.map(service => `
            <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-orange-500">
              <div class="flex items-start mb-4">
                <i data-lucide="${service.icon}" class="h-8 w-8 text-orange-500 mt-1 mr-4"></i>
                <h3 class="text-xl font-semibold">${service.title}</h3>
              </div>
              <div class="pl-12">
                <div class="text-blue-100 mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1">${service.description}</div>
                <button onclick="openGallery('${service.gallery}')" 
                  class="text-orange-300 hover:text-orange-100 font-medium flex items-center">
                  View Gallery
                  <i data-lucide="arrow-right" class="h-4 w-4 ml-2"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-lg">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl md:text-3xl font-bold mb-4">Turnkey Construction Solutions</h3>
              <p class="mb-6 text-lg">
                From initial design to final handover, we manage every aspect of your project with strict quality control and budget management.
              </p>
              <ul class="space-y-3 text-blue-100">
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="h-5 w-5 text-orange-300 mr-2 mt-0.5"></i>
                  <span>End-to-end project management</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="h-5 w-5 text-orange-300 mr-2 mt-0.5"></i>
                  <span>Customized solutions for residential and commercial projects</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="h-5 w-5 text-orange-300 mr-2 mt-0.5"></i>
                  <span>B-BBEE compliant with community empowerment focus</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="h-5 w-5 text-orange-300 mr-2 mt-0.5"></i>
                  <span>NHBRC-certified construction standards</span>
                </li>
              </ul>
            </div>
            <div class="text-center">
              <div class="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur-sm">
                <h4 class="text-2xl font-bold mb-4">Start Your Project</h4>
                <p class="mb-6">Get a free consultation and quote for your construction needs</p>
                <a href="#contact" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  lucide.createIcons();
});

// Experience Section
document.addEventListener('DOMContentLoaded', function() {
    const experienceContainer = document.getElementById('experience');
    
    const projects = [
      {
        location: "Broadcres ext 13, Fourways",
        stand: "Stand No. 113",
        value: "R154,566.28",
        certificate: "15698327/2007"
      },
      {
        location: "Kosmosdal ext 38, Midrand",
        stand: "Stand No. 2396", 
        value: "R1,000,000.00",
        certificate: "630756/2006"
      },
      {
        location: "Needwood ext 5, Fourways",
        stand: "Stand No. 399",
        value: "R2,199,613.00", 
        certificate: "769521/2008"
      },
      {
        location: "Carlswald Estate, Midrand",
        stand: "Stand No. 188",
        value: "R178,900.00",
        certificate: "603668/2006"
      }
    ];
  
    const clients = [
      {
        company: "Pferd PTY LTD",
        work: "General Maintenance, Dry wall Partition Installation and brick work maintenance",
        contact: "Jacques Fransis - 079 732 9349"
      },
      {
        company: "Zenprop (Design Quarter)",
        work: "Tiling, Painting and Dry walling",
        contact: "Raymond De Klerk - 082 808 2383"
      },
      {
        company: "Tau Medical",
        work: "Paving and Painting",
        contact: "Delry MD Personal Assistant - 078 623 7872"
      }
    ];
  
    experienceContainer.innerHTML = `
      <section id="experience" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Experience</h2>
            <p class="text-xl max-w-3xl mx-auto text-blue-800">
              With over 12 years in the construction industry, we have successfully completed numerous 
              projects across Johannesburg.
            </p>
          </div>
  
          <div class="mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">Residential Projects</h3>
            <p class="text-center mb-8 text-blue-800">All houses were registered with the National Home Builders Registration Council (NHBRC)</p>
            
            <div class="grid md:grid-cols-2 gap-8">
              ${projects.map(project => `
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-orange-500">
                  <div class="flex items-start gap-3 mb-4">
                    <i data-lucide="map-pin" class="h-6 w-6 text-orange-500 mt-1"></i>
                    <div>
                      <h4 class="text-xl font-semibold text-blue-900">${project.location}</h4>
                      <p class="text-blue-800">${project.stand}</p>
                    </div>
                  </div>
                  
                  <div class="space-y-3 text-blue-800">
                    <div class="flex justify-between items-center">
                      <span>Project Value:</span>
                      <span class="font-semibold">${project.value}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span>NHBRC Certificate:</span>
                      <span class="text-sm">${project.certificate}</span>
                    </div>
                  </div>
                  
                  <div class="mt-4 pt-4 border-t border-blue-100">
                    <div class="flex items-center gap-2">
                      <i data-lucide="award" class="h-4 w-4 text-orange-500"></i>
                      <span class="text-sm text-blue-800">NHBRC Registered</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div>
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">Commercial Clients</h3>
            
            <div class="grid lg:grid-cols-3 gap-8">
              ${clients.map(client => `
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500">
                  <div class="mb-4">
                    <h4 class="text-xl font-semibold mb-2 text-blue-900">${client.company}</h4>
                    <p class="mb-4 text-blue-800">${client.work}</p>
                  </div>
                  
                  <div class="pt-4 border-t border-blue-100">
                    <div class="flex items-center gap-2">
                      <i data-lucide="calendar" class="h-4 w-4 text-orange-500"></i>
                      <span class="text-sm text-blue-800">Reference Contact:</span>
                    </div>
                    <p class="text-sm mt-1 text-blue-800">${client.contact}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div class="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p class="mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let us bring your construction vision to life.
            </p>
            <a href="#contact" class="btn btn-primary">Get Started Today</a>
          </div>
        </div>
      </section>
    `;
    
    lucide.createIcons();
});

// Contact Section
document.addEventListener('DOMContentLoaded', function() {
    const contactContainer = document.getElementById('contact');
    
    contactContainer.innerHTML = `
      <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Contact Us</h2>
            <p class="text-xl max-w-3xl mx-auto text-blue-800">
              Ready to start your construction project? Get in touch for a free consultation.
            </p>
          </div>
  
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold mb-6 text-blue-900">Get In Touch</h3>
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="phone" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-blue-900">Phone</h4>
                      <p class="text-blue-800">076-198-7496</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="mail" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-blue-900">Email</h4>
                      <p class="text-blue-800">luckymash580@gmail.com</p>
                      <p class="text-sm text-blue-800">mbeveconstructionptyltdluckyma@gmail.com</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="map-pin" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-blue-900">Location</h4>
                      <p class="text-blue-800">Johannesburg, South Africa</p>
                      <p class="text-sm text-blue-800">Operating Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 class="text-xl font-semibold mb-4 text-blue-900">Company Details</h4>
                <div class="space-y-2 text-blue-800">
                  <p><strong>Director:</strong> L.J. Mashimbyi</p>
                  <p><strong>Registration:</strong> 2019/011938/07</p>
                  <p><strong>Tax Clearance:</strong> 9097421243</p>
                  <p><strong>Established:</strong> 2019</p>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <h3 class="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h3>
              <form id="contact-form" class="space-y-6">
                <div>
                  <label for="name" class="block mb-2 text-blue-900">
                    Full Name *
                  </label>
                  <div class="relative">
                    <i data-lucide="user" class="absolute left-3 top-3 h-5 w-5 text-blue-800"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      class="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block mb-2 text-blue-900">
                    Email Address *
                  </label>
                  <div class="relative">
                    <i data-lucide="mail" class="absolute left-3 top-3 h-5 w-5 text-blue-800"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      class="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="phone" class="block mb-2 text-blue-900">
                    Phone Number
                  </label>
                  <div class="relative">
                    <i data-lucide="phone" class="absolute left-3 top-3 h-5 w-5 text-blue-800"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="service" class="block mb-2 text-blue-900">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  >
                    <option value="">Select a service</option>
                    <option value="general-construction">General Construction</option>
                    <option value="renovations">Renovations</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="carpentry">Carpentry & Metalwork</option>
                    <option value="painting">Painting & Finishing</option>
                    <option value="roofing">Roofing</option>
                    <option value="paving">Paving & Landscaping</option>
                    <option value="maintenance">Building Maintenance</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block mb-2 text-blue-900">
                    Message *
                  </label>
                  <div class="relative">
                    <i data-lucide="message-square" class="absolute left-3 top-3 h-5 w-5 text-blue-800"></i>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      class="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  class="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 flex items-center justify-center gap-2 transition-colors"
                >
                  <i data-lucide="send" class="h-5 w-5"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
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
    
    lucide.createIcons();
});

// Footer Section
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    
    footerContainer.innerHTML = `
      <footer class="bg-blue-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <img src="images/logo-white.png" alt="MBEVA Construction Logo" class="h-10 w-auto">
                <h3 class="text-xl font-bold">MBEVA CONSTRUCTION</h3>
              </div>
              <p class="mb-4 text-blue-200">
                Leading construction company in South Africa, committed to excellence and empowerment since 2019.
              </p>
              <p class="text-sm text-blue-300">
                Company Registration: 2019/011938/07
              </p>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#about" class="text-blue-200 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#services" class="text-blue-200 hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#experience" class="text-blue-200 hover:text-orange-400 transition-colors">Projects</a></li>
                <li><a href="#contact" class="text-blue-200 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Services</h4>
              <ul class="space-y-2">
                <li><a href="#services" class="text-blue-200 hover:text-orange-400 transition-colors">Construction</a></li>
                <li><a href="#services" class="text-blue-200 hover:text-orange-400 transition-colors">Renovations</a></li>
                <li><a href="#services" class="text-blue-200 hover:text-orange-400 transition-colors">Plumbing</a></li>
                <li><a href="#services" class="text-blue-200 hover:text-orange-400 transition-colors">Electrical</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
              <div class="space-y-3 text-blue-200">
                <div class="flex items-center gap-2">
                  <i data-lucide="phone" class="h-4 w-4 text-orange-400"></i>
                  <span>076-198-7496</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="mail" class="h-4 w-4 text-orange-400"></i>
                  <span class="text-sm">luckymash580@gmail.com</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="map-pin" class="h-4 w-4 text-orange-400"></i>
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
              
              <div class="mt-6 flex gap-4">
                <a href="#" class="text-blue-200 hover:text-orange-400 transition-colors">
                  <i data-lucide="facebook" class="h-6 w-6"></i>
                </a>
                <a href="#" class="text-blue-200 hover:text-orange-400 transition-colors">
                  <i data-lucide="linkedin" class="h-6 w-6"></i>
                </a>
                <a href="#" class="text-blue-200 hover:text-orange-400 transition-colors">
                  <i data-lucide="instagram" class="h-6 w-6"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; ${new Date().getFullYear()} MBEVA CONSTRUCTION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
    
    lucide.createIcons();
});

// Gallery function
function openGallery(galleryId) {
  console.log('Opening gallery:', galleryId);
  // Implement gallery modal functionality here
}