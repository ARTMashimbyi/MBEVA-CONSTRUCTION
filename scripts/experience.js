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
      <section id="experience" class="bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Experience</h2>
            <p class="text-xl max-w-3xl mx-auto">
              With over 12 years in the construction industry, we have successfully completed numerous 
              projects across Johannesburg.
            </p>
          </div>
  
          <div class="mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center">Residential Projects</h3>
            <p class="text-center mb-8">All houses were registered with the National Home Builders Registration Council (NHBRC)</p>
            
            <div class="grid md:grid-cols-2 gap-8">
              ${projects.map(project => `
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div class="flex items-start gap-3 mb-4">
                    <i data-lucide="map-pin" class="h-6 w-6 text-orange-500 mt-1"></i>
                    <div>
                      <h4 class="text-xl font-semibold">${project.location}</h4>
                      <p>${project.stand}</p>
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span>Project Value:</span>
                      <span class="font-semibold">${project.value}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span>NHBRC Certificate:</span>
                      <span class="text-sm">${project.certificate}</span>
                    </div>
                  </div>
                  
                  <div class="mt-4 pt-4 border-t">
                    <div class="flex items-center gap-2">
                      <i data-lucide="award" class="h-4 w-4 text-orange-500"></i>
                      <span class="text-sm">NHBRC Registered</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div>
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center">Commercial Clients</h3>
            
            <div class="grid lg:grid-cols-3 gap-8">
              ${clients.map(client => `
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div class="mb-4">
                    <h4 class="text-xl font-semibold mb-2">${client.company}</h4>
                    <p class="mb-4">${client.work}</p>
                  </div>
                  
                  <div class="pt-4 border-t">
                    <div class="flex items-center gap-2">
                      <i data-lucide="calendar" class="h-4 w-4 text-orange-500"></i>
                      <span class="text-sm">Reference Contact:</span>
                    </div>
                    <p class="text-sm mt-1">${client.contact}</p>
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