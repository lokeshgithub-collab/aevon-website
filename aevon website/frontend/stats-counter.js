const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;
  countersStarted = true;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 1500; 
    let startTime = null;

    function updateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );

      counter.innerText = value;

      if (progress < duration) {
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    }

    requestAnimationFrame(updateCount);
  });
}


const statsSection = document.querySelector('.stats-exact');

const statsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

statsObserver.observe(statsSection);
