
export const scrollAnimation = () => {
  const elements = Array.from(document.querySelectorAll('.js-scroll'));

  const config = {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.3) {
        entry.target.classList.add('js-scroll-animate');
        observer.unobserve(entry.target);
      }
    });
  }, config);

  elements.forEach(el => observer.observe(el));
};
