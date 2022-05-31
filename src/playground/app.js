// stateless functional component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.pickChoice = this.pickChoice.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      console.log(options);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(pastProps, pastState) {
    if (pastState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log(json);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete() {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });
    // OR
    this.setState(() => ({ options: [] }));
  }

  handleDeleteSingle(optionToRemove) {
    this.setState((pastState) => ({
      options: pastState.options.filter((options) => {
        return optionToRemove !== options;
      }),
    }));
  }

  pickChoice() {
    this.setState(() => {
      return {
        choice: alert(
          this.state.options[
            Math.floor(Math.random() * this.state.options.length)
          ]
        ),
      };
    });
    //OR
    // const random = Math.floor(Math.random() * this.state.options.length);
    // const option = this.state.options[random];
    // alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Input a task";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This task already exist";
    }
    this.setState((pastState) => {
      return {
        options: pastState.options.concat([option]),
      };
    });
  }

  render() {
    const subTitle = "We value your mental health";

    return (
      <div>
        <Header subtitle={subTitle} />
        <Action btnMode={this.state.options} choiceSupport={this.pickChoice} />
        <Options
          handleDeleteSingle={this.handleDeleteSingle}
          handleDelete={this.handleDelete}
          options={this.state.options}
        />
        <AddOption addOption={this.handleAddOption} />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: [],
// };

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Support Application",
};

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

const Action = (props) => {
  return (
    <div>
      <button
        disabled={props.btnMode.length === 0}
        onClick={props.choiceSupport}
      >
        What Should I do?
      </button>
    </div>
  );
};
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

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove All</button>
      {props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          numbering={index}
          handleDeleteSingle={props.handleDeleteSingle}
        />
      ))}
    </div>
  );
};

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

const Option = (props) => {
  return (
    <div>
      {props.numbering + 1}. {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteSingle(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};
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

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;

    // const tom = option[0].toUpperCase() + option.slice(1).toLowerCase().trim();

    const error = this.props.addOption(option);

    this.setState(() => ({ error }));
    //OR
    // this.setState(() => {
    //   return { error };
    // });

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

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
