import React, { Component } from "react";
import FeedbackButtons from "./components/FeedbackButtons/FeedbackButtons";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import buttons from "./data/buttons";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeedbackValue = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedbackPercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackButtons
            buttons={buttons}
            onHandleIncrement={this.handleIncrementFeedbackValue}
          ></FeedbackButtons>
        </Section>
        {this.state.good || this.state.neutral || this.state.bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercent={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={"No feedback given"}></Notification>
        )}
      </div>
    );
  }
}

export default App;
