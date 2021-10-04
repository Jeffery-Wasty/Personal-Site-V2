import isMobile from 'is-mobile';

export const projectLinks = () => {
  const projects = document.querySelectorAll('.projects-box');

  const handleClick = ({ target }) => {
    const projectBox = target.closest('.projects-box');
    const link = projectBox.getAttribute('data-link');

    window.open(link, '_blank');
  };

  const addEventListeners = () => {
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', handleClick, false);
    }
  };

  const init = () => {
    if (!isMobile()) {
      return null;
    }

    addEventListeners();
  };

  init();
};
