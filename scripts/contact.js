document.addEventListener('DOMContentLoaded', function() {
    const contactContainer = document.getElementById('contact');
    
    contactContainer.innerHTML = `
      <section id="contact">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p class="text-xl max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch for a free consultation.
            </p>
          </div>
  
          <div class="grid lg:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold mb-6">Get In Touch</h3>
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="phone" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold">Phone</h4>
                      <p>076-198-7496</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="mail" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold">Email</h4>
                      <p>luckymash580@gmail.com</p>
                      <p class="text-sm">mbeveconstructionptyltdluckyma@gmail.com</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <div class="bg-orange-500 p-3 rounded-lg">
                      <i data-lucide="map-pin" class="h-6 w-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold">Location</h4>
                      <p>Johannesburg, South Africa</p>
                      <p class="text-sm">Operating Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="text-xl font-semibold mb-4">Company Details</h4>
                <div class="space-y-2">
                  <p><strong>Director:</strong> L.J. Mashimbyi</p>
                  <p><strong>Registration:</strong> 2019/011938/07</p>
                  <p><strong>Tax Clearance:</strong> 9097421243</p>
                  <p><strong>Established:</strong> 2019</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form id="contact-form" class="space-y-6">
                <div>
                  <label for="name" class="block mb-2">
                    Full Name *
                  </label>
                  <div class="relative">
                    <i data-lucide="user" class="absolute left-3 top-3 h-5 w-5 text-gray-400"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      class="w-full pl-10 pr-4 py-3 border rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block mb-2">
                    Email Address *
                  </label>
                  <div class="relative">
                    <i data-lucide="mail" class="absolute left-3 top-3 h-5 w-5 text-gray-400"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      class="w-full pl-10 pr-4 py-3 border rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="phone" class="block mb-2">
                    Phone Number
                  </label>
                  <div class="relative">
                    <i data-lucide="phone" class="absolute left-3 top-3 h-5 w-5 text-gray-400"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="w-full pl-10 pr-4 py-3 border rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="service" class="block mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    class="w-full px-4 py-3 border rounded-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="general-construction">General Construction</option>
                    <option value="renovations">Renovations</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="carpentry">Carpentry & Metalwork</option>
                    <option value="painting">Painting & Finishing</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block mb-2">
                    Message *
                  </label>
                  <div class="relative">
                    <i data-lucide="message-square" class="absolute left-3 top-3 h-5 w-5 text-gray-400"></i>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      class="w-full pl-10 pr-4 py-3 border rounded-lg resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  class="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 flex items-center justify-center gap-2"
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