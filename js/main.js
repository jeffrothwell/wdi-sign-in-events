document.addEventListener('DOMContentLoaded', function(){

  var signInButtonEl = document.querySelector('.signin');
  var modalEl = document.querySelector('.modal');
  var closeButtonEl = document.querySelector('.close')

  signInButtonEl.addEventListener('click', function(){
    modalEl.style.display = 'block'
  });

  closeButtonEl.addEventListener('click', function(){
    modalEl.style.display = 'none'
  });

});
