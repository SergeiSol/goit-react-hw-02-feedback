import React from 'react';

const FeedbackOptions = ({ onIncrement1, onIncrement2, onIncrement3 }) => {
  return (
    <div className="state">
      <button className="state-btn" type="button" onClick={onIncrement1}>
        good
      </button>
      <button className="state-btn" type="button" onClick={onIncrement2}>
        neutral
      </button>
      <button className="state-btn" type="button" onClick={onIncrement3}>
        bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
