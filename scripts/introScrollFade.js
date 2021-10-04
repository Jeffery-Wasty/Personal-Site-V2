
export const introScrollFade = () => {
  const introSection = document.querySelector('.intro');

  const handleScroll = () => {
    const { scrollY } = window;
    const opacity = Number.parseFloat(1 - scrollY / 600).toFixed(2);

    if (opacity < 0) {
      return null;
    }

    introSection.style.opacity = opacity;
  };

  window.addEventListener('scroll', handleScroll);
};
