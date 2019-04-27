// Create an empty constructor function
function Person() {}

// Add property name, age
Person.prototype.name = 'Ashwin';
Person.prototype.age = 26;

// Define the shared properties and methods using the prototype
Person.prototype.sayName = function() {
  console.log('My name is ' + this.name);
};

// Create an object using the Person constructor function
var person1 = new Person();

// Access the name property using the person object
console.log(person1.name);

// Use the shared method to log the name
person1.sayName();
