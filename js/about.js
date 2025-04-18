const buttons = document.querySelectorAll('.rotate, .fill, .card');


[...buttons].forEach((button)=>{
  button.addEventListener( 'click', function() {
    button.classList.toggle('is-flipped');
    card.classList.toggle('is-flipped');
  });
});
    


