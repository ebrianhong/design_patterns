// object creation
const instance = {};
const instance = Object.create(Object.prototype);
const instance = new Object();

// adding properties
instance.key = 'value';
instance['key'] = 'value';
Object.defineProperty(instance, 'key', {
  value: 'value',
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperties(instance, {
  "firstKey": {
      value: "First key's value",
      writable: true
  },
  "secondKey": {
      value: "Second key's value",
      writable: false
  }
})

  
// we define a constructor for Person objects
function Person (name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;

  this.writesCode = function() {
    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
  }
}

// writesCode function is redefined for each instance of Person

// better appraoch is using prototype inheritance
Person.prototype.writesCode = function() {
  console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
}

// class es6
class Person {
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
  }

  writesCode() {
    console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
  }
}

