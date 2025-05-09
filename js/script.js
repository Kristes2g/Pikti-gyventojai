document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    const interacted = new WeakSet();
  
    inputs.forEach(input => {
      const errorMessage = input.nextElementSibling;
  
      input.addEventListener('mouseenter', () => {
        interacted.add(input);
        
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          errorMessage.classList.remove('active');
        }
      });
  
      input.addEventListener('mouseleave', () => {
        if (interacted.has(input) && input.value.trim() === '') {
          input.classList.add('error');
          errorMessage.classList.add('active');
        }
      });
  
      input.addEventListener('focus', () => {
        input.classList.remove('error');
        errorMessage.classList.remove('active');
      });
    });
  });

  const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const inputs = form.querySelectorAll('input, textarea');
  let allValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('error');
      input.nextElementSibling.classList.add('active');
      allValid = false;
    }
  });

  if (allValid) {
    alert('Sekmingai Pateikta');
    form.reset();
  }
});




// hamburger //

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".NavList")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide') 
    kryziukas.classList.toggle('active')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
})