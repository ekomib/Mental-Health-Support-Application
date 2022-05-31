class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return "Hi I am " + this.name;
    return `Hi  I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is in ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  //   homeLocation() {
  //     return !!this.location;
  //   }

  getGreeting() {
    let greet = super.getGreeting();

    if (this.location) {
      greet = greet + ` I'm visiting from ${this.location}.`;
    }
    return greet;
  }
}

const me = new Traveler("Ekom Ibiok", 27, "Milton Keynes");
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());

// console.log(me.getDescription());
// console.log(other.getDescription());

/*class Traveler extends Student {
  constructor(name, age, major, location) {
    super(name, age, major, location);
    this.location = location;
  }

  homeLocation() {
    return this.location;
  }

  getGreeting() {
    let travel = super.getGreeting();

    if (this.homeLocation()) {
      travel += `I'm visiting from ${this.location}`;
    }

    return travel;
  }
}

const me = new Traveler("Ekom Ibiok", 27, "Cyber Security ", "Milton Keynes");
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());

*/
