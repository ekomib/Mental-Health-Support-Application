import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleDelete = this.handleDelete.bind(this);
  //     this.pickChoice = this.pickChoice.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
  //   }

  handleDelete = () => {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });
    // OR
    this.setState(() => ({ options: [] }));
  };

  handleClearSelState = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteSingle = (optionToRemove) => {
    this.setState((pastState) => ({
      options: pastState.options.filter((options) => {
        return optionToRemove !== options;
      }),
    }));
  };

  pickChoice = () => {
    // this.setState(() => {
    //   return {
    //     choice: alert(
    //       this.state.selectedItem[
    //         Math.floor(Math.random() * this.state.options.length)
    //       ]
    //     ),
    //   };
    // });

    //OR
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];

    this.setState(() => {
      return { selectedOption: option };
    });
  };

  handleAddOption = (option) => {
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
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

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
        <OptionModal
          clearSelItem={this.handleClearSelState}
          selectedItem={this.state.selectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
