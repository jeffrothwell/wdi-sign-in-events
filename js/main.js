document.addEventListener('DOMContentLoaded', function(){

  var signInButtonEl = document.querySelector('.signin');
  var modalEl = document.querySelector('.modal');
  var closeButtonEl = document.querySelector('.close');
  var submitButtonEl = document.querySelector('.submit');
  var userInputEl = document.querySelector('#user');
  var passwordInputEl = document.querySelector('#pass');

  signInButtonEl.addEventListener('click', function(){
    modalEl.style.display = 'block'
  });

  closeButtonEl.addEventListener('click', function(){
    modalEl.style.display = 'none'
  });

  submitButtonEl.addEventListener('click', function(){
    userInputEl.classList.add('error')
    passwordInputEl.classList.add('error')
  });

  userInputEl.addEventListener('focus', removeErrors);

  passwordInputEl.addEventListener('focus', removeErrors);

  function removeErrors(e){
    e.target.classList.remove('error');
  }

});
