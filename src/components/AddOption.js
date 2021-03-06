import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
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
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="input-box" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
