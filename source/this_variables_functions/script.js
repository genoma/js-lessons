//this variables and functions

// window.variableName means that the variable is being declared at the global scope.
// This means any JS code will have access to this variable. Using window.
// is not necessary but is frequently used as a convention to denote that a variable is global.

console.log(this); // window

document.addEventListener('DOMContentLoaded', function(event) {
  console.log(this); // document

  var katch = this.getElementsByClassName('first-class');
  console.log(katch);

  setTimeout(() => {
    console.log(this);
    katch[0].innerHTML = 'test';
    katch = undefined;
    console.log(katch);
  }, 1500);

  // Button
  const button = this.getElementsByClassName('example');

  button[0].addEventListener('mouseenter', function() {
    this.style.background = 'white';
    console.log(this);
  });

  document.addEventListener('click', function(event) {
    if (!event.target.matches('.example')) return;
    event.preventDefault;
    event.target.style.background = 'red';
    console.log(this);
  });
});
