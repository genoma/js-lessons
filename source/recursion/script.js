document.addEventListener('DOMContentLoaded', function(event) {
  // Array of array
  var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
  ];

  var element = document.querySelector('.test');

  // for loop
  for (var i in activities) {
    for (var j in activities[i]) {
      element.appendChild(document.createElement('p')).innerHTML =
        activities[i][j];
    }
  }

  // foreach loop
  activities.forEach(function(i) {
    i.forEach(function(a) {
      console.log(a);
    });
  });
});
