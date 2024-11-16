
import './styles/main.scss';
import 'animate.css';

import { initActiveLink } from './functions/initActiveLink';
import { toggleDropdown } from './functions/initDropdown';
import { initSectionAnimation } from './functions/initSectionAnimation';

document.addEventListener('DOMContentLoaded', () => {
  initActiveLink();
  toggleDropdown();
  initSectionAnimation();
});
