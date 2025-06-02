const  hamMenu = document.querySelector('.ham-menu');
//const cartClick = document.getElementById("aCart");
const cartN = document.getElementById("CartItems");
let counter = []

const OffScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click',() =>{
    hamMenu.classList.toggle('active')
    OffScreenMenu.classList.toggle('active')
})



document.querySelectorAll(".cCart").forEach(button => {
    button.addEventListener("click", () => {
    counter.push("item");
    cartN.textContent = counter.length;
    console.log(counter);
    });
});