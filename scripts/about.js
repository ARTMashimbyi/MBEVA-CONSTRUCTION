document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.getElementById('about');
    
    aboutContainer.innerHTML = `
      <section id="about" class="bg-gray-50">
      
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">About MBEVA CONSTRUCTION</h2>
            <p class="text-xl max-w-3xl mx-auto">
              Established in 2019, we are a South African construction company committed to excellence, 
              empowerment, and delivering quality solutions nationwide.
            </p>
          </div>
  
          <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div class="space-y-6">
              <h3 class="text-2xl md:text-3xl font-bold">Our Story</h3>
              <p>
                MBEVA CONSTRUCTION was established in 2019 with the owner having over 12 years of experience 
                in the general construction industry. We are based in Johannesburg and operate nationally, 
                supporting Economic Empowerment programs and endeavoring to transfer skills in historically 
                disadvantaged communities.
              </p>
              <p>
                We strive to interact and form partnerships with other organizations, institutions of learning, 
                and government to empower and develop skills in the building and renovation industry. Our business 
                is conducted with integrity and efficiency, focusing on global and national industry trends.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h4 class="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <i data-lucide="award" class="h-6 w-6 text-orange-500 mt-1"></i>
                  <div>
                    <h5 class="font-semibold">12+ Years Experience</h5>
                    <p class="text-gray-600">Proven track record in construction industry</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i data-lucide="users" class="h-6 w-6 text-orange-500 mt-1"></i>
                  <div>
                    <h5 class="font-semibold">Community Empowerment</h5>
                    <p class="text-gray-600">Supporting historically disadvantaged communities</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i data-lucide="target" class="h-6 w-6 text-orange-500 mt-1"></i>
                  <div>
                    <h5 class="font-semibold">Quality Delivery</h5>
                    <p class="text-gray-600">On time and within budget solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-blue-900 text-white p-8 rounded-lg">
              <i data-lucide="eye" class="h-12 w-12 text-orange-500 mb-4"></i>
              <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be the leading customer-driven company that provides comprehensive and innovative 
                solutions that elevates our clients' products.
              </p>
            </div>
            
            <div class="bg-orange-500 text-white p-8 rounded-lg">
              <i data-lucide="target" class="h-12 w-12 text-white mb-4"></i>
              <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
              <p>
                To become a market leader while being committed to meeting customers' needs through 
                high-quality, cost-effective, and technical management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    
    lucide.createIcons();
  });