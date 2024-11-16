export const initSectionAnimation = () => {
  const aboutSection = document.querySelector('.about');
  const coursesSection = document.querySelector('.courses');
  const contactSection = document.querySelector('.contact');
  const testimonialsSection = document.querySelector('.testimonials');
  const questionsSection = document.querySelector('.questions');

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

  observer.observe(aboutSection);
  observer.observe(coursesSection);
  observer.observe(contactSection);
  observer.observe(testimonialsSection);
  observer.observe(questionsSection);
};

window.initSectionAnimation = initSectionAnimation;

document.addEventListener('DOMContentLoaded', () => {
  initSectionAnimation();
});
