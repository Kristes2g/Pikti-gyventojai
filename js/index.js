const hamburger = document.querySelector(".hamburger")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")
const MyTeamCont = document.querySelector(".MyTeamCont")
const HamburgerCont = document.querySelector(".HamburgerCont")
const slider = document.querySelector(".slider")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
    HamburgerCont.classList.toggle('ijungt')
    slider.classList.toggle('active')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
    slider.classList.toggle('active')
})