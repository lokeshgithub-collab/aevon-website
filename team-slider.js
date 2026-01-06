let currentSlide = 0;

const slides = document.querySelectorAll('.team-slide');
const track = document.querySelector('.team-track');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}