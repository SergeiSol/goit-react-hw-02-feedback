import React from 'react';
import { PropTypes } from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  // const Statistics = props => {
  //   const { good, neutral, bad, total, positivePercentage } = props;

  return total ? (
    <ul>
      <li className="state-list">Good: {good}</li>
      <li className="state-list">Neutral: {neutral}</li>
      <li className="state-list">Bad: {bad}</li>
      <li className="state-list">Total: {total}</li>
      <li className="state-list">Positive Feedback: {positivePercentage} %</li>
    </ul>
  ) : (
    <div>There is no feedback</div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
