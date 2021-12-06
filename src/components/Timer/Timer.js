/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

export default function Timer({ id, time, onChangeTaskTime }) {
  const [timer, setTimer] = useState({ min: time.min, sec: time.sec });
  const [intervalId, setIntervalId] = useState(null);

  const changeTime = () => {
    setTimer((prev) => {
      if (prev.sec > 0 && prev.min >= 0) {
        return { ...prev, sec: prev.sec - 1 };
      }
      if (prev.sec === 0 && prev.min !== 0) {
        return { ...prev, min: prev.min - 1, sec: 59 };
      }

      return prev;
    });
  };

  const startTimer = () => {
    if (!intervalId && !(timer.min === 0 && timer.sec === 0)) setIntervalId(setInterval(changeTime, 1000));
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    onChangeTaskTime(id, timer.min, timer.sec);
    if (timer.min === 0 && timer.sec === 0) {
      clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => () => clearInterval(intervalId), [intervalId]);

  return (
    <div className="timer-controls">
      <button className="icon-play" type="button" onClick={startTimer} />
      <button className="icon-pause" type="button" onClick={stopTimer} />
      <span className="timer-value">{`${timer.min}:${timer.sec}`}</span>
    </div>
  );
}

Timer.defaultProps = {
  id: 0,
  time: { min: 0, sec: 0 },
  onChangeTaskTime: () => {},
};
Timer.propTypes = {
  id: PropTypes.number,
  time: PropTypes.objectOf(PropTypes.number),
  onChangeTaskTime: PropTypes.func,
};
