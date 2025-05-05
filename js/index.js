const hamburger = document.querySelector(".hamburger")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")
const MyTeamCont = document.querySelector(".MyTeamCont")
const HamburgerCont = document.querySelector(".HamburgerCont")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide') 
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
    HamburgerCont.classList.toggle('ijungt')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
})