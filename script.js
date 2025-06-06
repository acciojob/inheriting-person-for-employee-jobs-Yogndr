// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

const person = new Person("Alice", 25);
person.greet(); 
// Expected Output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
