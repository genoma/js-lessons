console.log(this);

// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
// Object literals encapsulate data, enclosing it in a tidy package. 
// This minimizes the use of global variables which can cause problems when combining code.

var person = {
  firstName: "Robert",
  lastName : "Duvall",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.fullName()); // Will return John Doe

// Call method.
var person = {
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
person.fullName.call(person1);  // Will return "John Doe"
person.fullName.apply(person2);