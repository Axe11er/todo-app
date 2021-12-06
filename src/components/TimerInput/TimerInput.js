import React from 'react';
import PropTypes from 'prop-types';
import './TimerInput.css';

export default function TimerInput({ time, changeMin, changeSec }) {
  return (
    <form className="timer__form">
      <input className="timer__input" type="text" placeholder="Min" value={time.min} onChange={changeMin} />
      <input className="timer__input" type="text" placeholder="Sec" value={time.sec} onChange={changeSec} />
    </form>
  );
}

TimerInput.defaultProps = {
  time: { min: 0, sec: 0 },
  changeMin: () => {},
  changeSec: () => {},
};
TimerInput.propTypes = {
  time: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  changeMin: PropTypes.func,
  changeSec: PropTypes.func,
};
