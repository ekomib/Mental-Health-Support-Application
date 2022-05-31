class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubOne = this.handleSubOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const getCurState = localStorage.getItem("num");
      const num = parseInt(getCurState, 10);

      if (num) {
        this.setState(() => ({ count: num }));
      }
    } catch (e) {}
  }

  componentDidUpdate(pastProps, pastState) {
    if (pastState.count !== this.state.count) {
      const curState = this.state.count;
      localStorage.setItem("num", curState);
    }
  }
  handleAddOne() {
    this.setState((pastState) => {
      return {
        count: pastState.count + 1,
      };
    });
    // OR
    //     this.setState({
    //       count: this.state.count + 1,
    //     });
  }

  handleSubOne() {
    this.setState((pastState) => {
      return {
        count: pastState.count - 1,
      };
    });
  }

  handleReset() {
    // if you need access to previous state values this is used, if not use the other object style commented out in the handleAddOne method. For instance  you want to set back to 1. you set to 0 and then set to one
    this.setState(() => {
      return {
        count: 0,
      };
    });

    // this.setState((pastState) => {
    //   return {
    //     count: pastState.count + 1,
    //   };
    // });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0,
// };

ReactDOM.render(<Counter></Counter>, document.getElementById("app"));

// let count = 0;
// const someId = "someID";

// const addOne = () => {
//   count++;
//   renderApplication();
// };

// const sub1 = () => {
//   count--;
//   renderApplication();
// };

// const reset = () => {
//   count = 0;
//   renderApplication();
// };

// const renderApplication = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={sub1}>-1</button>
//       <button onClick={reset}>RESET</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// const appRoot = document.getElementById("app");
// renderApplication();

// var user = {
//   name: "Ekom Ibiok",
//   age: 26,
//   location: "Wolverhampton",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }

// var templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
// var appender = document.getElementById("app");

// ReactDOM.render(templateTwo, appender);

// /* Example */
// var username = "Ekom Ibiok";
// var userAge = 27;
// var userLocation = "America";

// var user = {
//   name: "Ekom Ib",
//   age: 26,
//   location: "Wolverhampton",
// };

// var templateTwo = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
// var appRoot2 = document.getElementById("app");
// ReactDOM.render(templateTwo, appRoot2);
