const  hamMenu = document.querySelector('.ham-menu');

const OffScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click',() =>{
    hamMenu.classList.toggle('active')
    OffScreenMenu.classList.toggle('active')
})

coinIn = document.getElementById("contex")
coin = 0

function coinIncrease(){
    coin += 1
    coinIn = coin
}