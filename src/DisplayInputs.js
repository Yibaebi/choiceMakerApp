import React from "react";

class DisplayInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItem: this.props.displayItems,
      displayValues: this.props.displayValues,
      randomResult: this.randomKey(1, this.props.displayItems),
    };
  }

  randomKey = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  updateRandomOption = (event) => {
    let newRandomNumber = this.randomKey(1, this.state.displayItem);
    this.setState({
      randomResult: newRandomNumber,
    });
  };

  render() {
    const displayItems = [];

    console.log("old", this.state.randomResult);

    for (let i = 0; i < this.state.displayItem; i++) {
      if (i + 1 === this.state.randomResult) {
        displayItems.push(
          <p id={i + 1} style={{ color: "green" }}>
            {i + 1}: {this.state.displayValues[i]}
          </p>
        );
      } else {
        displayItems.push(
          <p id={i + 1} style={{ color: "red" }}>
            {i + 1}: {this.state.displayValues[i]}
          </p>
        );
      }
    }

    return (
      <section className="display-container">
        <div id="display-input">
          <div className="display-input question">
            <article className = "intro"style={{fontWeight: "bolder" }}>
              Welcome to our smart choice page! These are the inputs you
              supplied. Let us help you answer your question. Cheers!
            </article>
            <h2>Question</h2>
          
            <p>{this.props.currentQuestion}</p>
          </div>

          <div className="display-input answer">
            <h2>Answer</h2>
            <article style={{ color: "green", fontWeight: "bolder" }}>
              Our smart answer.
            </article>
            {displayItems}
          </div>
        </div>
        <DisplayButtons
          viewPopularity={this.props.viewPopularity}
          toggleDisplay={this.props.toggleDisplay}
          updateRandomOption={this.updateRandomOption}
        />
      </section>
    );
  }
}

function DisplayButtons(props) {
  return (
    <section id="button-section" className="display-buttons">
      <button type="submit" className="effect" onClick={props.toggleDisplay}>
        <span>Another Question?</span>
      </button>
      <button
        type="button"
        className="effect"
        onClick={props.updateRandomOption}
      >
        <span>Refresh Answer</span>
      </button>
      <button type="button" className="effect" onClick={props.viewPopularity}>
        <span>Question Popularity</span>
      </button>
    </section>
  );
}

export default DisplayInputs;
