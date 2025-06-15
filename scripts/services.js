document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services');
    
    const services = [
      {
        icon: "building",
        title: "General & Commercial Building",
        description: "Complete construction solutions for commercial and residential projects with professional management."
      },
      {
        icon: "home",
        title: "Renovations & Upgrades",
        description: "Office, home, and commercial renovations with comprehensive upgrade packages."
      },
      {
        icon: "droplets",
        title: "Plumbing Services",
        description: "Professional plumbing installation, maintenance, and repair services."
      },
      {
        icon: "zap",
        title: "Electrical Work",
        description: "Licensed electrical installations and maintenance ensuring safety standards."
      },
      {
        icon: "wrench",
        title: "Carpentry & Metalwork",
        description: "Expert carpentry, welding, and metal fabrication services."
      },
      {
        icon: "paintbrush",
        title: "Finishing Services",
        description: "Professional painting, ceiling installation, and partitioning."
      }
    ];
  
    servicesContainer.innerHTML = `
      <section id="services">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p class="text-xl max-w-3xl mx-auto">
              We provide turnkey construction services from conceptual drawing to project completion.
            </p>
          </div>
  
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            ${services.map(service => `
              <div class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all">
                <i data-lucide="${service.icon}" class="h-12 w-12 text-orange-500 mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">${service.title}</h3>
                <p>${service.description}</p>
              </div>
            `).join('')}
          </div>
  
          <div class="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-8 rounded-lg">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl md:text-3xl font-bold mb-4">Turnkey Solutions</h3>
                <p class="mb-6">
                  Our renovation division provides comprehensive solutions for new and existing infrastructure. 
                  We deliver cost-effective solutions by recognizing each client's unique needs.
                </p>
                <ul class="space-y-2">
                  <li>• Conceptual drawing to project completion</li>
                  <li>• Cost-effective and innovative solutions</li>
                  <li>• Quality materials and workmanship</li>
                  <li>• Professional project management</li>
                </ul>
              </div>
              <div class="text-center">
                <div class="bg-white/10 p-8 rounded-lg border border-white/20">
                  <h4 class="text-2xl font-bold mb-4">Get a Free Quote</h4>
                  <p class="mb-6">Ready to start your construction project?</p>
                  <a href="#contact" class="btn btn-primary">Contact Us Today</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    
    lucide.createIcons();
  });