class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello(name) {
    console.log("Hey " + name + " You are cool, I'm " + this.name);
  }
}

