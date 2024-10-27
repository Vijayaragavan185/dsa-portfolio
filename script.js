// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Lightbox effect for Gallery
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
      const img = document.createElement('img');
      img.src = image.src;
      lightbox.appendChild(img);
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
    });
  });
  