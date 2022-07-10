const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
}) 

document.querySelectorAll('.nav-btn').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('is-active');
    navMenu.classList.remove('is-active');
}))