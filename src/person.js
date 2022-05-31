const isAdult = (x) => {
  return x >= 18 ? true : false;
};

const canDrink = (x) => {
  return x >= 21 ? true : false;
};

const isSenior = (x) => x >= 65;
// export default isSenior;

const subtract = (a, b) => a - b;

export { isAdult, canDrink, subtract, isSenior as default };
