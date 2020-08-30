import React, { Component } from "react";
import Form from "./Form.js";
import "./App.css";
import Popularity from "./Popularity";
import DisplayInputs from "./DisplayInputs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputOptions: {},
      active: "FORM",
      questionStore: [],
      currentQuestion: null,
    };
  }

  getInputValues = (optionValues, question) => {
    console.log(question)
    if (
      Object.keys(optionValues).length > 0 &&
      (question !== null || question === "")
    ) {
      this.setState({
        userInputOptions: optionValues,
      });

      var active = this.state.active;
      var newActive = active === "FORM" ? "DISPLAY-OPTIONS" : "FORM";
      this.setState({
        active: newActive,
      });
      let questionsStore = [...this.state.questionStore, question];

      this.setState({
        questionStore: questionsStore,
        currentQuestion: question,
      });
    } else {
      alert("Biko, input an a question and at least one answer. Thanks.");
    }
  };

  toggleDisplay = (inputValues) => {
    var active = this.state.active;
    var newActive = active === "FORM" ? "DISPLAY-OPTIONS" : "FORM";
    this.setState({
      active: newActive,
    });
  };

  viewPopularity = (event) => {
    if (this.state.currentQuestion !== null) {
      this.setState({
        active: "QUESTION-POPULARITY",
      });
    }else{
      alert("Please ask a random question to view your question popularity list.");
    }
  };

  returnHome = (event) => {
    this.setState({
      active: "FORM",
    });
  }

  clearList = (event) => {
    this.setState({
      questionStore: [],
      currentQuestion: null,
    })
  }

  render() {
    const obj = this.state.userInputOptions;
    const questionStore = this.state.questionStore;

    function toUpper(x) {
      return x.toUpperCase();
    }
    const questions = questionStore.map(toUpper);

    const result = Object.keys(obj).map((key) => [obj[key]]);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Choice Maker App</h1>
        </header>
        <main>
          {this.state.active === "FORM" ? (
            <Form
              viewPopularity={this.viewPopularity}
              getInputValues={this.getInputValues}
            />
          ) : this.state.active === "DISPLAY-OPTIONS" ? (
            <DisplayInputs
              viewPopularity={this.viewPopularity}
              displayItems={result.length}
              toggleDisplay={this.toggleDisplay}
              displayValues={result}
              currentQuestion={this.state.currentQuestion}
            />
          ) : this.state.active === "QUESTION-POPULARITY" ? (
            <Popularity clearList={this.clearList} returnHome={this.returnHome} questionStore={questions} />
          ) : (
            <Form
              viewPopularity={this.viewPopularity}
              getInputValues={this.getInputValues}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
