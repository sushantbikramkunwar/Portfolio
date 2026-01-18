


function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // This adds/removes the "open" class
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}