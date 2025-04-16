const particleContainer = document.getElementById('particles');

for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  const size = Math.random() * 4 + 2;
  particle.classList.add('particle');
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
  particleContainer.appendChild(particle);
}

// Scroll animation for Welcome section
window.addEventListener('scroll', () => {
    const welcomeSection = document.querySelector('.welcome');
    const bounding = welcomeSection.getBoundingClientRect();
    
    if (bounding.top < window.innerHeight && bounding.bottom > 0) {
      welcomeSection.style.opacity = '1';
      welcomeSection.style.transform = 'translateY(0)';
    }
  });
  
  // Image hover effect with overlay
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const overlay = item.querySelector('.hover-overlay');
      overlay.style.opacity = '1';
    });
    
    item.addEventListener('mouseout', () => {
      const overlay = item.querySelector('.hover-overlay');
      overlay.style.opacity = '0';
    });
  });
 
  let lastLightTime = 0;
const lightInterval = 50; // Controls how many light pulses

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastLightTime < lightInterval) return;
  lastLightTime = now;

  const light = document.createElement("div");
  light.classList.add("cursor-light");
  document.body.appendChild(light);

  light.style.left = `${e.clientX - 8}px`; // Center
  light.style.top = `${e.clientY - 8}px`;

  setTimeout(() => {
    light.remove();
  }, 400); // Match animation duration
});

window.addEventListener('load', () => {
  const loading = document.getElementById("loading-screen");
  setTimeout(() => {
    loading.style.display = "none";
  }, 3000);
});

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.layer-stars').style.transform = `translateY(${scrollY * 0.2}px)`;
  document.querySelector('.layer-planets').style.transform = `translateY(${scrollY * 0.4}px)`;
  document.querySelector('.layer-mist').style.transform = `translateY(${scrollY * 0.6}px)`;
});

// Optional feedback on submit
document.querySelector(".alpha-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  console.log(`New Alpha Test Request: ${email}`);
  alert("Thanks for signing up! You'll be notified soon.");
  this.reset();
});
