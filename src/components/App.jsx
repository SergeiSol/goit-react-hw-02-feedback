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

  hendleIncrement1 = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  hendleIncrement2 = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  hendleIncrement3 = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotal();
    return Math.floor((this.state.good / total) * 100);
  };
    
  

render(){
  return (<div>
    <Section title='Please leave feedback'>
      <FeedbackOptions onIncrement1={this.hendleIncrement1}
                       onIncrement2={this.hendleIncrement2}
        onIncrement3={this.hendleIncrement3} />
    </Section>
    <Section title='Statistics'>
      <Statistics good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotal()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />
    </Section>
      
    </div>);
  };
}

