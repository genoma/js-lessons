// Create an empty constructor function
function person(name, age) {
  this.name = name;
  this.age = age;
}

// Define the shared properties and methods using the prototype
person.prototype.sayName = function() {
  return 'My name is ' + this.name + " and I'm " + this.age;
};

// Create an object using the Person constructor function
var person1 = new person('lucio', 23);

// Access the name property using the person object
console.log(person1.name);
console.log(person1.age);

// Use the shared method to log the name

document.getElementsByClassName('say')[0].innerHTML = person1.sayName();

// Extend Prototype
function student(name, age, gender) {
  person.call(this, name, age);
  this.gender = gender;
}

student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;

student.prototype.sayName = function() {
  return (
    'My name is ' +
    this.name +
    " and I'm " +
    this.age +
    " and I'm a " +
    this.gender
  );
};

var student1 = new student('Franco', 33, 'male');
document.getElementsByClassName('say')[1].innerHTML = student1.sayName();
