const  hamMenu = document.querySelector('.ham-menu');
const cartClick = document.getElementById("aCart");
const cartN = document.getElementById("CartItems");
let counter = 0;

const OffScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click',() =>{
    hamMenu.classList.toggle('active')
    OffScreenMenu.classList.toggle('active')
})


cartClick.addEventListener('click', () => {
    counter += 1;
    cartN.innerHTML = counter;
})