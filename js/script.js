document.querySelectorAll('input, textarea').forEach(field => {
    const errorMessage = field.nextElementSibling;
  
    // Focus on the input (click)
    field.addEventListener('focus', () => {
      field.classList.remove('error'); // Remove the error state when clicked
      errorMessage.classList.remove('active'); // Hide the error message
      field.style.borderBottom = '1px solid #79C8C7'; // Blue underline on focus
    });
  
    // Blur event (when clicking out of the input)
    field.addEventListener('blur', () => {
      if (field.value.trim() === '') {
        field.classList.add('error'); // Add error state if empty
        errorMessage.classList.add('active'); // Show error message
        field.style.borderBottom = '1px solid #F67E7E'; // Red underline
      } else {
        field.style.borderBottom = '1px solid #79C8C7'; // Blue underline if not empty
      }
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
const MyTeamCont = document.querySelector(".MyTeamCont")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide') 
    kryziukas.classList.toggle('active')
    MyTeamCont.classList.toggle('deactivate')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
    MyTeamCont.classList.toggle('deactivate')
})