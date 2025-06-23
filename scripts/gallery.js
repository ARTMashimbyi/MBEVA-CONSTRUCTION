document.addEventListener('DOMContentLoaded', function() {
    // Gallery configuration
    const galleryConfig = {
      'building-gallery': {
        name: 'General Construction',
        images: [
          'images/gallery/general-construction/image1.jpg',
          'images/gallery/general-construction/image2.jpg'
        ]
      },
      'renovations-gallery': {
        name: 'Renovations',
        images: [
          'images/gallery/renovations/image1.jpg',
          'images/gallery/renovations/image2.jpg'
        ]
      },
      'plumbing-gallery': {
        name: 'Plumbing',
        images: [
          'images/logo.png',
          'images/logo.png',
          'images/logo2.png'
        ]
      },
      // Add other galleries following the same pattern
      'electrical-gallery': {
        name: 'Electrical',
        images: [
          'images/gallery/electrical/image1.jpg',
          'images/gallery/electrical/image2.jpg'
        ]
      },
      'partitioning-gallery': {
        name: 'Partitioning',
        images: [
          'images/gallery/partitioning/image1.jpg',
          'images/gallery/partitioning/image2.jpg'
        ]
      }
      // Add more services as needed
    };
  
    // Gallery state
    let currentIndex = 0;
    let currentImages = [];
    
    // DOM elements
    const galleryModal = document.getElementById('gallery-modal');
    const mainImage = document.getElementById('main-gallery-image');
    const galleryTitle = document.getElementById('gallery-title');
    const imageCounter = document.getElementById('image-counter');
    const thumbnailsContainer = document.getElementById('thumbnails');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeBtn = document.getElementById('close-gallery');
    
    // Set up gallery buttons
    document.querySelectorAll('[onclick^="openGallery"]').forEach(button => {
      button.onclick = function() {
        const galleryId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        openGallery(galleryId);
      };
    });
    
    // Open gallery function
    function openGallery(galleryId) {
      const gallery = galleryConfig[galleryId];
      if (!gallery) {
        console.error('Gallery not found:', galleryId);
        return;
      }
      
      currentIndex = 0;
      currentImages = gallery.images;
      
      // Set title
      galleryTitle.textContent = gallery.name;
      
      if (currentImages.length > 0) {
        showImage(0);
        updateThumbnails();
        galleryModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        alert('No images available for this gallery');
      }
    }
    
    // Show image at specific index
    function showImage(index) {
      if (currentImages.length === 0 || index < 0 || index >= currentImages.length) return;
      
      currentIndex = index;
      mainImage.src = currentImages[index];
      updateCounter();
      updateButtons();
      highlightThumbnail();
    }
    
    // Update image counter
    function updateCounter() {
      imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    }
    
    // Update navigation buttons
    function updateButtons() {
      prevBtn.disabled = currentIndex <= 0;
      nextBtn.disabled = currentIndex >= currentImages.length - 1;
    }
    
    // Create thumbnail navigation
    function updateThumbnails() {
      thumbnailsContainer.innerHTML = '';
      currentImages.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img;
        thumbnail.className = 'h-16 w-16 object-cover cursor-pointer border-2 border-transparent hover:border-blue-500';
        thumbnail.onclick = () => showImage(index);
        thumbnailsContainer.appendChild(thumbnail);
      });
      highlightThumbnail();
    }
    
    // Highlight current thumbnail
    function highlightThumbnail() {
      const thumbnails = thumbnailsContainer.querySelectorAll('img');
      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('border-blue-500', index === currentIndex);
        thumb.classList.toggle('border-transparent', index !== currentIndex);
      });
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    closeBtn.addEventListener('click', closeGallery);
    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal || e.target.classList.contains('bg-black')) {
        closeGallery();
      }
    });
    
    // Close gallery
    function closeGallery() {
      galleryModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!galleryModal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        if (e.key === 'Escape') closeGallery();
      }
    });
  });