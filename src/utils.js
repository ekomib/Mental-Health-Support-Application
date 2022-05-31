console.log("Utils.js is running");

// export { square, add };
// export { square };OR
// export const square = (x) => x*x;
// We have 2 types of exports, defualt and named export

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export { square, add, subtract as default };
// OR
// export default subtract;
//OR
// export default (a, b) => a - b;
// Subtract is the defualt export, & you can only have one defualt export
