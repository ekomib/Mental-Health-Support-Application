// arguments object no longer bound with arrow functions

function adder(a, b) {
  console.log(arguments);
  return a + b;
}

adder(2, 9);

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

const add2 = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log(add(4, 4));

/// this keyword - no longerrbound to arrow functions

// const user = {
//   name: "Ekom",
//   cities: ["Rivers", "Delta", "Wolverhampton"],

//   printPlacesLived: function () {
//     console.log(this.name);
//     console.log(this.cities);
//     const that = this; or use an Arrow function as provided below below

//     const that = this;
//     this.cities.forEach(function (city) {
//       console.log(that.name + "has lived in " + city);
//     });

//       this.cities.forEach((city) => {
//         console.log(this.name + "has lived in " + city);
//       });
//   },
//   Pinttplaceslived function cannot use an arrow function When the forEach is using an arrow function
// };

// user.printPlacesLived();

const user = {
  name: "Ekom",
  cities: ["Rivers", "Delta", "Wolverhampton"],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return this.name + " has lived in " + city;
    });
    return cityMessages;
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 3, 3, 6],
  multiplyBy: 2,

  multiply() {
    const result = this.numbers.map((num) => {
      return this.multiplyBy * num;
    });
    return result;
  },
};

console.log(multiplier.multiply());
