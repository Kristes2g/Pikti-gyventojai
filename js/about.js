var buttons = document.querySelectorAll('.rotate, .fill');

[...buttons].forEach((button)=>{
  button.addEventListener( 'click', function() {
    button.classList.toggle('is-flipped');
  });
});
    

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
