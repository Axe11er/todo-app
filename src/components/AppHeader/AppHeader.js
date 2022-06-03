import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm';
import TimerInput from '../TimerInput';
import './AppHeader.css';

const AppHeader = ({ time, onAddItem, changeMin, changeSec }) => (
  <header className="header">
    <h1>todos</h1>
    <div className="form__container">
      <NewTaskForm onAddItem={onAddItem} />
      <TimerInput time={time} changeMin={changeMin} changeSec={changeSec} />
    </div>
  </header>
);

AppHeader.defaultProps = {
  time: { min: 0, sec: 0 },
  onAddItem: () => {},
  changeMin: () => {},
  changeSec: () => {},
};
AppHeader.propTypes = {
  time: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  onAddItem: PropTypes.func,
  changeMin: PropTypes.func,
  changeSec: PropTypes.func,
};

export default AppHeader;
