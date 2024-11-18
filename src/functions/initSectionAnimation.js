export const initSectionAnimation = () => {
  const sections = ['.about', '.courses', '.contact', '.testimonials', '.questions'];

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.03
  });

  sections.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      observer.observe(section);
    }
  });
};

window.initSectionAnimation = initSectionAnimation;

document.addEventListener('DOMContentLoaded', () => {
  initSectionAnimation();
});
