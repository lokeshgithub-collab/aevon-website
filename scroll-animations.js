const animatedElements = document.querySelectorAll(
  '.animate-top, .animate-bottom, .animate-left, .animate-right, .animate-rotate-left'
);


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.3
  }
);

animatedElements.forEach(el => observer.observe(el));
