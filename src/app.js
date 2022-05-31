/*import "./utils.js";
import validator from "validator"; */
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.css";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my web Page</p>
//     <div>KOKO MELON</div>
//   </div>
// );
// ReactDOM.render(<Layout>{template}</Layout>, document.getElementById("app"));

/*
class OldSyntax {
  constructor() {
    this.name = "Ekom";
  }
  getGreeting() {
    return `Hi my name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting.bind(oldSyntax);
console.log(getGreeting());
console.log(oldSyntax);
// =========================
class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGreet = newSyntax.getGreeting;
console.log(newGreet()); */

/*
import { square, add } from "./utils.js";
import isSenior, { isAdult, canDrink, subtract } from "./person.js";
// default exports are named before the curly braces
console.log("app.js is running!");
console.log(square(4));
console.log(add(2, 3));
console.log(canDrink(21));
console.log(isAdult(16));
console.log(subtract(100, 82));
console.log(isSenior(65));
console.log(validator.isEmail("test@gmail.com"));
const template = <p>This is JSX </p>;
ReactDOM.render(template, document.getElementById("app"));
*/

// stateless functional component

// IndecisionApp.defaultProps = {
//   options: [],
// };

// class Header extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
// handlePick() {
//   alert("We are getting ready");
// }
//   render() {
//     return (
//       <div>
//         <button
//           disabled={this.props.btnMode.length === 0}
//           onClick={this.props.choiceSupport}
//         >
//           What Should I do?
//         </button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
// constructor(props) {
//   super(props);
//   this.handleRemove = this.handleRemove.bind(this);
// }
// handleRemove() {
//   alert("Remove");
//   console.log(this.props.options);
// }

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDelete}>Remove All</button>
//         {this.props.options.map((option, index) => (
//           <Option key={option} optionText={option} numbering={index} />
//         ))}
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {" "}
//         {this.props.numbering + 1}. {this.props.optionText}
//       </div>
//     );
//   }
// }

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<User name="Ekom" age={26} />, document.getElementById("app"));

/* No more needed, replaced by IndecisionApp */
/*const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
); */

localStorage.setItem("age", 12); // this will produce string, so we use parseInt to convert it integer

const ekom = parseInt(localStorage.getItem("age")) + 2;

// console.log(ekom);
