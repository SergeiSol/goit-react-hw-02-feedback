import React from 'react';
import { PropTypes } from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="state">
      {Object.keys(options).map(item => (
        <button
          key={item}
          className="state-btn"
          type="button"
          name={item}
          value={options[item]}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
      {/* <button
        className="state-btn"
        type="button"
        name="good"
        value={good}
        onClick={onLeaveFeedback}
      >
        good
      </button>
      <button
        className="state-btn"
        type="button"
        name="neutral"
        value={neutral}
        onClick={onLeaveFeedback}
      >
        neutral
      </button>
      <button
        className="state-btn"
        type="button"
        name="bad"
        value={bad}
        onClick={onLeaveFeedback}
      >
        bad
      </button> */}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
