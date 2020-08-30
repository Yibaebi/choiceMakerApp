import React from "react";

class Inputs extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        key={this.props.key}
        value={this.props.value}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange ={this.props.changeInput}
      ></input>
    );
  }
}

export default Inputs;
