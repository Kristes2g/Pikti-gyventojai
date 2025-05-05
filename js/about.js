const card = document.querySelectorAll(".card")
const rotate = document.querySelectorAll(".rotate")
const fill = document.querySelectorAll(".fill")

function add_flip(){
  card[0].classList.toggle("is-flipped")
  rotate[0].classList.toggle("is-flipped")
  fill[0].classList.toggle("is-flipped")
}
function add_flip2(){
  card[1].classList.toggle("is-flipped")
  rotate[1].classList.toggle("is-flipped")
  fill[1].classList.toggle("is-flipped")
}
function add_flip3(){
  card[2].classList.toggle("is-flipped")
  rotate[2].classList.toggle("is-flipped")
  fill[2].classList.toggle("is-flipped")
}
function add_flip4(){
  card[3].classList.toggle("is-flipped")
  rotate[3].classList.toggle("is-flipped")
  fill[3].classList.toggle("is-flipped")
}
function add_flip5(){
  card[4].classList.toggle("is-flipped")
  rotate[4].classList.toggle("is-flipped")
  fill[4].classList.toggle("is-flipped")
}
function add_flip6(){
  card[5].classList.toggle("is-flipped")
  rotate[5].classList.toggle("is-flipped")
  fill[5].classList.toggle("is-flipped")
}

const hamburger = document.querySelector(".hamburger")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")
const MyTeamCont = document.querySelector(".MyTeamCont")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide') 
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    hamburger.classList.toggle('hidden')
    MyTeamCont.classList.toggle('deactivate')
})