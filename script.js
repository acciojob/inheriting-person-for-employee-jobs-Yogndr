
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// function Employee(name, age, jobTitle) {
//   Person.call(this, name, age); // Call the Person constructor
//   this.jobTitle = jobTitle;
// }

// // Inherit from Person
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function () {
//   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
// };


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
