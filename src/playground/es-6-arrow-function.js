const square = function (x) {
  return x * x;
};
const squareArrow = (x) => x * x;
const squareArrow2 = (x) => {
  return x * x;
};

console.log(squareArrow2(2));
console.log(squareArrow(4));
console.log(square(8));

const getFirstName = (name) => {
  return name.split(" ")[0];
};

const getFirstName1 = (name) => name.split(" ")[0];

const getFirstName2 = function (name) {
  return name.split(" ")[0];
};

console.log(getFirstName("KOKO IBIOK"));
console.log(getFirstName1("EKOM IBIOK"));
console.log(getFirstName2("CAROL IBIOK"));
