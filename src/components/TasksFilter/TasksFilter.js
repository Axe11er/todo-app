import React from 'react';
import PropTypes from 'prop-types';

import './TaskFilter.css';

const TasksFilter = ({ filter, toggleAll, toggleActive, toggleCompleted }) => {
  const buttons = [
    <li key="all">
      <button type="button" className={filter === 'all' ? 'selected' : null} onClick={toggleAll}>
        All
      </button>
    </li>,
    <li key="active">
      <button type="button" className={filter === 'active' ? 'selected' : null} onClick={toggleActive}>
        Active
      </button>
    </li>,
    <li key="completed">
      <button type="button" className={filter === 'completed' ? 'selected' : null} onClick={toggleCompleted}>
        Completed
      </button>
    </li>,
  ];

  return <ul className="filters">{buttons}</ul>;
};

export default TasksFilter;

TasksFilter.defaultProps = {
  filter: 'all',
  toggleAll: () => {},
  toggleActive: () => {},
  toggleCompleted: () => {},
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
  toggleAll: PropTypes.func,
  toggleActive: PropTypes.func,
  toggleCompleted: PropTypes.func,
};
