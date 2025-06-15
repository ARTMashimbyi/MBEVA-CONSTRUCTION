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
              MBEVA CONSTRUCTION was founded in 2019 by a visionary with over 12 years of hands-on experience in South Africa's construction industry. Born out of a passion for transformative development and community upliftment, we are more than just a construction company, we are a catalyst for change. Headquartered in Johannesburg and operating nationally, we bridge the gap between world-class construction practices and grassroots empowerment.
            </p>
            <p>
              Our journey is rooted in addressing two critical needs: delivering exceptional construction services while actively participating in South Africa's Economic Empowerment programs. We prioritize skills transfer to historically disadvantaged communities, ensuring that every project leaves a legacy of knowledge and opportunity.
            </p>
            <p>
              What sets us apart is our adaptive approach. We combine traditional craftsmanship with modern techniques, staying ahead of industry trends to deliver projects on time and within budget without compromising quality. From humble our story reflects resilience, innovation, and an unwavering commitment to building South Africa's future, one brick at a time.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h4 class="text-2xl font-bold mb-6">Why Choose Us?</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <i data-lucide="award" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold">Experience You Can Trust</h5>
                  <p class="text-gray-600">With a founder boasting 12+ years in the industry and a team of certified professionals, we bring proven expertise to every project. Our portfolio spans residential, commercial, and industrial constructions, all backed by NHBRC certification.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="users" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold">Empowerment as Core Value</h5>
                  <p class="text-gray-600">We don't just build structures; we build people. Through SETA-accredited programs, we train and employ local talent, ensuring skills development in plumbing, electrical work, and carpentry.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="dollar-sign" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold">Cost-Effective Solutions</h5>
                  <p class="text-gray-600">Our lean management approach minimizes waste and maximizes efficiency, passing savings to clients without cutting corners.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="shield-check" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold">Reliability & Transparency</h5>
                  <p class="text-gray-600">With 100% tax compliance and a track record of on-time delivery, we offer peace of mind. Clients like Zenprop and Tau Medical attest to our accountability.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i data-lucide="leaf" class="h-6 w-6 text-orange-500 mt-1"></i>
                <div>
                  <h5 class="font-semibold">Future-Ready Practices</h5>
                  <p class="text-gray-600">We integrate sustainable materials and smart technologies to future-proof your investment while reducing environmental impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg">

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