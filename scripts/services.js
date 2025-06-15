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
    <section id="services" class="py-12 bg-gray-50">
     
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Construction Services</h2>
          <p class="text-xl max-w-3xl mx-auto">
            Comprehensive building solutions from concept to completion, delivered with precision and professionalism.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          ${services.map(service => `
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div class="flex items-start mb-4">
                <i data-lucide="${service.icon}" class="h-8 w-8 text-orange-500 mt-1 mr-4"></i>
                <h3 class="text-xl font-semibold">${service.title}</h3>
              </div>
              <div class="pl-12">
                <div class="text-gray-600 mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1">${service.description}</div>
                <button onclick="openGallery('${service.gallery}')" 
                  class="text-orange-500 hover:text-orange-700 font-medium flex items-center">
                  View Gallery
                  <i data-lucide="arrow-right" class="h-4 w-4 ml-2"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-8 rounded-lg shadow-lg">
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

    <script>
      function openGallery(galleryId) {
        // Implement gallery modal functionality here
        console.log('Opening gallery:', galleryId);
        // This would typically launch a modal or navigate to a gallery page
        // Example: window.location.href = '/gallery/' + galleryId;
      }
    </script>
  `;
  
  lucide.createIcons();
});