document.addEventListener('DOMContentLoaded', function() {
    // Get service name from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (!service) {
      window.location.href = 'index.html';
      return;
    }
  
    // Service to folder mapping
    const serviceConfig = {
      'general-construction': {
        name: 'General Construction',
        folder: 'general-construction'
      },
      'renovations': {
        name: 'Renovations',
        folder: 'renovations'
      },
      'plumbing': {
        name: 'Plumbing',
        folder: 'plumbing'
      },
      'electrical': {
        name: 'Electrical',
        folder: 'electrical'
      },
      // Add other services following the same pattern
    };
  
    const currentService = serviceConfig[service];
    if (!currentService) {
      window.location.href = 'index.html';
      return;
    }
  
    // Set page title
    document.getElementById('gallery-title').textContent = `${currentService.name} Gallery`;
  
    // Load images
    const imageGrid = document.getElementById('image-grid');
    
    // This would be replaced with your actual image paths
    const imagePaths = [
      `images/gallery/${currentService.folder}/image1.jpg`,
      `images/gallery/${currentService.folder}/image2.jpg`,
      `images/gallery/${currentService.folder}/image3.jpg`,
      // Add more images as needed
    ];
  
    // Display images
    imagePaths.forEach((imgPath, index) => {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow';
      
      const img = document.createElement('img');
      img.src = imgPath;
      img.alt = `${currentService.name} project ${index + 1}`;
      img.className = 'w-full h-48 object-cover cursor-pointer';
      img.loading = 'lazy';
      
      imgContainer.appendChild(img);
      imageGrid.appendChild(imgContainer);
    });
  
    // Initialize icons
    lucide.createIcons();
  });