const hamburger = document.querySelector(".hamburger")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")
const MyTeamCont = document.querySelector(".MyTeamCont")
const slider = document.querySelector(".slider")

hamburger.addEventListener('click', () => {
    slider.classList.toggle('active');
    void slider.offsetWidth;
    overlay.classList.toggle('slide');
    kryziukas.classList.toggle('active');
    hamburger.classList.toggle('hidden');
    MyTeamCont.classList.toggle('deactivate');
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
    slider.classList.toggle('active')
})