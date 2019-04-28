document.addEventListener('DOMContentLoaded', function(event) {
  const button = document.querySelector('.click');
  // add some style
  button.style.background = 'red';
  button.style.color = 'yellow';
  button.style.borderColor = 'black';
  button.addEventListener('click', function(i) {
    i.preventDefault();
    alert("It's me Mario!");

    (() => {
      console.log(this); // with fat arrow retains the scope of the previous function
      this.classList.add('cat');
    })();
  });
});
