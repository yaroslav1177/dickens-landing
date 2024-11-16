
import './styles/main.scss';
import 'animate.css';

import { initMenu } from './functions/initMenu';
import { initActiveLink } from './functions/initActiveLink';
import { toggleDropdown } from './functions/initDropdown';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initActiveLink();
  toggleDropdown();
});
