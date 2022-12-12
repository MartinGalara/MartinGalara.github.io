

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}

let home = document.getElementById('home_navbar');
let about_me = document.getElementById('about_me_navbar');
let portfolio = document.getElementById('portfolio_navbar');
let contact = document.getElementById('contact_navbar');
home.addEventListener('click', toggleMenuByNav);
about_me.addEventListener('click', toggleMenuByNav);
portfolio.addEventListener('click', toggleMenuByNav);
contact.addEventListener('click', toggleMenuByNav);

function toggleMenuByNav() {
  console.log("hola")
    menu.classList.toggle('show-menu');
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
}