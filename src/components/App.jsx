import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import { Component } from 'react';
import Section from './Section';
export class App extends Component {
  
     state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const {
      target: { name, value },
    } = event;

    this.setState({ [name]: Number.parseInt(value) + 1 });
  };


  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.floor((this.state.good / total) * 100);
  };
    
  

  render() {
    const { good, neutral, bad } = this.state;
    
  return (<div>
    <Section title='Please leave feedback'>
      <FeedbackOptions options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback}
           />
    </Section>
    <Section title='Statistics'>
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />
    </Section>
      
    </div>);
  };
}

