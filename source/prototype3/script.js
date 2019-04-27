//Create class with name, age and weight in ES6

class person {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  say() {
    return `Mi chiamo ${this.name}, ho ${this.age} anni e peso ${this.weight}`;
  }
}

//extends and add gender
class person1 extends person {
  constructor(name, age, weight, gender) {
    super(name, age, weight);
    this.gender = gender;
  }
  say() {
    return `Mi chiamo ${this.name}, ho ${this.age} anni e peso ${
      this.weight
    } e sono un ${this.gender}`;
  }
}

var p1 = new person('claudio', 22, '120kg');
var p2 = new person1('claudio', 22, '120kg', 'uomo');

console.log(p1);
console.log(p2);

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementsByClassName('say')[0].innerHTML = p1.say();
  document.getElementsByClassName('say')[1].innerHTML = p2.say();
});
