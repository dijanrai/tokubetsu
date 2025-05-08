// Animation Initialization
function initAnimations() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Additional slide-in animation for menu items
    const menuItems = document.querySelectorAll('#menu .bg-gray-50');
    const menuObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
          menuObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    menuItems.forEach(item => {
      menuObserver.observe(item);
    });
  }
  
  // CSS Animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-fadeIn { animation: fadeIn 1s ease-out; }
    .animate-slideIn { animation: slideIn 1s ease-out; }
  `;
  document.head.appendChild(styleSheet);
  
  // Dark Mode Toggle
  function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById('dark-mode-toggle');
    const icon = toggleButton.querySelector('i');
  
    htmlElement.classList.toggle('dark');
  
    if (htmlElement.classList.contains('dark')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  }
  // Lightbox Functionality
function openLightbox(imageSrc, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxImage.src = imageSrc;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove('hidden');

  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');

  // Restore body scrolling
  document.body.style.overflow = 'auto';
}

// Event Listeners
document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.getElementById('lightbox').classList.contains('hidden')) {
    closeLightbox();
  }
});

// Ensure AOS and other animations are initialized
function initAnimations() {
  // Add any existing animation logic here if needed
}

// Existing dark mode toggle (ensure it exists in your script.js)
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.innerHTML = document.documentElement.classList.contains('dark')
    ? '<i class="fas fa-sun text-yellow-400"></i>'
    : '<i class="fas fa-moon text-gray-800"></i>';
}