import { aboutModal } from './aboutModal';
import { introScrollFade } from './introScrollFade';
import { projectLinks } from './projectLinks';
import { scrollAnimation } from './scrollAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', () => {
  aboutModal();
  introScrollFade();
  projectLinks();
  scrollAnimation();
  toggleScrollIndicator();
  workAccordion();
});
