const menuIcon = document.querySelector('.menuIcon');
const nav = document.querySelector('.nav');
menuIcon.onclick = () => {
    nav.classList.toggle('active');
}