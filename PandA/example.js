let names = {
  firstName: "Matthew",
  lastName: "Schiller"
}

console.log(names.hasOwnProperty("cookies"));

function PersonObject(name, age) {
  let matt = Object.create(constructorObject);
  matt.name = "Matt";
  matt.age = 36;
  return matt;
}

let constructorObject = {
  speak: function () {
    return `Hi there!`;
  }
}

let person = PersonObject("matt", 36);

function PersonObject2(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName
}

PersonObject2.prototype.sing = function () {
  return `${this.fname} is singing LALALLALALAL!`;
}

let travis = new PersonObject2("Travis", "Jepsen")
console.log(travis.sing());

let jonathan = new PersonObject2("Johnthan", "Moore")

class Person {

  constructor(firstName, lastName) {
    this.fname = firstName;
    this.lname = lastName;
  }

  sing() {
    return `${this.fname} is singing LALALLALALALA`
  }
}

let anna = new Person("Anna", "Rankin");

console.log(anna.sing());