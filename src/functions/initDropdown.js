export const toggleDropdown = (id) => {
  const content = document.getElementById(`content${id}`);
  const button = document.getElementById(`toggle${id}`);
  
  if (content.style.display === 'block') {
      content.style.display = 'none';
      button.textContent = '+';
  } else {
      content.style.display = 'block';
      button.textContent = '−';
  }
};

window.toggleDropdown = toggleDropdown;
