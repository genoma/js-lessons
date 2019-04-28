document.addEventListener('DOMContentLoaded', function(event) {
  const verify = document.querySelector('.check');
  const input = document.querySelector('.email');

  function validator(value) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = regex.test(value.toLowerCase());
    return result;
  }

  verify.addEventListener('click', function(e) {
    e.preventDefault;
    let value = input.value;
    let result = validator(value);
    alert(result);
  });
});
