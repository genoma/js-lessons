document.addEventListener('DOMContentLoaded', function(event) {
  var auto = [];
  auto.push('Ferrari', 'Lamborghini', 'McLaren', 'Audi');

  function print(cssClass, index, array) {
    document.getElementsByClassName(cssClass)[index].innerHTML = array;
  }

  print('test', 0, auto);

  // Array of array
  var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
  ];

  print('test', 1, activities);
  print('test', 2, activities.sort()); // sorting an array alphabetically

  var sli = auto.slice(2); // sliced array

  print('test', 3, sli);

  var spli = auto.splice(1, 1, 'Fiat'); // removing and adding elements to an array

  print('test', 4, spli); // removed item
  print('test', 5, auto); // current array
});
