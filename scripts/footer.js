document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    
    footerContainer.innerHTML = `
      <footer class="bg-slate-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <i data-lucide="building-2" class="h-8 w-8 text-orange-500"></i>
                <h3 class="text-xl font-bold">MBEVA CONSTRUCTION</h3>
              </div>
              <p class="mb-4">
                Leading construction company in South Africa, committed to excellence and empowerment since 2019.
              </p>
              <p class="text-sm">
                Company Registration: 2019/011938/07
              </p>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#about" class="hover:text-orange-500">About Us</a></li>
                <li><a href="#services" class="hover:text-orange-500">Services</a></li>
                <li><a href="#experience" class="hover:text-orange-500">Experience</a></li>
                <li><a href="#contact" class="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <i data-lucide="phone" class="h-4 w-4 text-orange-500"></i>
                  <span>076-198-7496</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="mail" class="h-4 w-4 text-orange-500"></i>
                  <span class="text-sm">luckymash580@gmail.com</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="map-pin" class="h-4 w-4 text-orange-500"></i>
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; ${new Date().getFullYear()} MBEVA CONSTRUCTION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
    
    lucide.createIcons();
  });