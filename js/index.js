const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".NavList")
const kryziukas = document.querySelector(".kryziukas")

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active') 
    kryziukas.classList.toggle('active')
});

kryziukas.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    kryziukas.classList.toggle('active')
})