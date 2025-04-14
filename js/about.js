var buttons = document.querySelectorAll('.rotate, .fill');

[...buttons].forEach((button)=>{
  button.addEventListener( 'click', function() {
    button.classList.toggle('is-flipped');
  });
});
    
