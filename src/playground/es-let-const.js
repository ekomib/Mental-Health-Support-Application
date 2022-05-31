class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      Visibility: false,
    };
  }
  handleVisibility() {
    this.setState((pastState) => {
      return {
        Visibility: (pastState.Visibility = !pastState.Visibility),
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.Visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.Visibility && <p>This are your list Items</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
// var nameVar = "Ekom";
// var nameVar = "Ibiok";
// console.log("nameVar", nameVar);

// let nameLet = "Jane";
// nameLet = "Ann";
// console.log("nameLet", nameLet);

// const nameConst = "Frank";
// console.log("nameConst", nameConst);

// function getPetName() {
//   var petName = "Hal";
//   return petName;
// }

// const petName = getPetName();
// console.log(petName);

// var fullName = "Ekom Ibiok";

// if (fullName) {
//   var firstName = fullName.split(" ")[0];
//   console.log(firstName);
// }

// if (fullName) {
//   const firstName = fullName.split(" ")[0];
//   console.log(firstName);
// }

// console.log(firstName);

// const append = document.getElementById("app");
// let count = false;

// const clicker = () => {
//   count = !count;
//   rendApp();
// };

// console.log(count);

// const manner = () => {
//   if (count) {
//     return <p>Make money Ekom</p>;
//   } else {
//     return undefined;
//   }
// };

// const rendApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={clicker}>
//         {count ? "Hide details" : "Show detail"}
//       </button>
//       {manner()}
//     </div>
//   );
//   ReactDOM.render(template, append);
// };

// rendApp();
