import React from "react";

class Popularity extends React.Component {
  render() {
    const result = this.props.questionStore;

    function frequency(questions) {
      const a = [];
      const b = [];
      let prev;

      questions.sort();
      for (let i = 0; i < questions.length; i++) {
        if (questions[i] !== prev) {
          a.push(questions[i]);
          b.push(1);
        } else {
          b[b.length - 1]++;
        }
        prev = questions[i];
      }
      return [a, b];
    }

    const resultant = frequency(result)
    const results = [];
    function sortFrequency(result) {
      for (let i = 0; i < result[0].length; i++) {
        results.push([result[0][i], result[1][i]]);
      }
    }

    function sortByFrequency(a, b) {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return a[1] < b[1] ? -1 : 1;
      }
    }
    sortFrequency(resultant);
    results.reverse();
    results.sort(sortByFrequency);
    results.reverse()

    const displayQuestions = [];
    const displayFrequency = [];
  
    for (let i = 0; i < results.length; i++) {
  
        displayQuestions.push(
          <p id={i + 1} style={{ color: "green" }}>
            {results[i][0]}
          </p>
        );
      displayFrequency.push(
        <p id={i + 1} style={{ color: "Blue" }}>
          {results[i][1]}
        </p>
      );
    }

    return (
      <section className="App-main-container">
        <div className="popularity-container">
          <div className="popularity-section">
            <h1>Question</h1>
            {displayQuestions}
          </div>
          <div className="popularity-section">
            <h1>Frequency</h1>
            {displayFrequency}
          </div>
        </div>

        <PopularityButtons
          clearList={this.props.clearList}
          returnHome={this.props.returnHome}
        />
      </section>
    );
  }
}

function PopularityButtons(props) {
  return (
    <section id="button-section" className="display-buttons">
      <button type="button" className="effect" onClick={props.returnHome}>
        <span>Home</span>
      </button>
      <button type="button" className="effect" onClick={props.clearList}>
        <span>Delete List</span>
      </button>
    </section>
  );
}

export default Popularity;
