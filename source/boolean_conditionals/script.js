var a = 10;
var b = 5;

// == type coercion operator
// === no type coercion
// && and operator
// || or operator

// Ternary operator
var result = a === b ? true : false;

console.log(result);

// == type coercion operator
// === no type coercion

if (a === b || a > b) {
  console.log(true);
} else {
  console.log(false);
}

numbers = [10, 24, 34, 8, 18, 16];

numbers.forEach(element => {
  switch (true) {
    case element > 30:
      console.log("it's gigantes");
    case element < 20:
      console.log("it's small");
  }
});

numbers.forEach(element => {
  switch (element) {
    case 8:
      console.log("it's ok");
      break;
  }
});
