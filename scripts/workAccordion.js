
export const workAccordion = () => {
  const SECTION_SELECTOR = '.work-group';
  const CONTENT_SELECTOR = '.work-group-content';

  const elements = {
    accordion: document.getElementById('workAccordion'),
  };

  const expandSection = element => {
    element.setAttribute('data-expanded', 'true');
    const content = element.querySelector(CONTENT_SELECTOR);

    content.style.height = `${content.scrollHeight}px`;
  };

  const collapseSection = element => {
    element.setAttribute('data-expanded', 'false');
    const content = element.querySelector(CONTENT_SELECTOR);
    content.removeAttribute('style');
  };

  const handleClick = event => {
    const { target } = event;
    const isCollapsibleContent = target.closest(CONTENT_SELECTOR);

    if (isCollapsibleContent) {
      return null;
    }

    const section = target.closest(SECTION_SELECTOR);
    const isExpanded = section.getAttribute('data-expanded') === 'true';

    if (isExpanded) {
      return collapseSection(section);
    }

    return expandSection(section);
  };

  const init = () => {
    elements.accordion.addEventListener('click', handleClick, false);
  };

  init();
};
