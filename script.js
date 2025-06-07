const  hamMenu = document.querySelector('.ham-menu');
//const cartClick = document.getElementById("aCart");
const cartN = document.getElementById("CartItems");
let counter = JSON.parse(localStorage.getItem('Products')) || [];
cartN.textContent = counter.length;
const OffScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click',() =>{
    hamMenu.classList.toggle('active')
    OffScreenMenu.classList.toggle('active')
})

function updatearr(){
    counter.push("item")
    localStorage.setItem('Products', JSON.stringify(counter));
    let storedArray = JSON.parse(localStorage.getItem('Products'));
    let arrayLength = storedArray ? storedArray.length : 0;
    cartN.textContent = counter.length;
    
}

document.querySelectorAll(".cCart").forEach(button => {
    button.addEventListener("click", () => {
    updatearr()

    });
});


document.querySelectorAll("#kbuy").forEach(button => {
    button.addEventListener("click", () => {
    document.getElementById("buyPopUp").style.display="flex";
    });
})

document.querySelectorAll("#closePopup").forEach(button => {
    button.addEventListener("click", function(){
        document.getElementById("buyPopUp").style.display="none";
    })
})