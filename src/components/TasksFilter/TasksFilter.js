import React from 'react';
import PropTypes from 'prop-types';

import './TaskFilter.css';

const TasksFilter = ({ setFilter, toggleAll, toggleActive, toggleCompleted }) => {
  let allClassNames = '';
  let activeClassNames = '';
  let completedClassNames = '';

  switch (setFilter) {
    case 'all':
      allClassNames += 'selected';
      break;
    case 'active':
      activeClassNames += 'selected';
      break;
    case 'completed':
      completedClassNames += 'selected';
      break;

    default:
      break;
  }
  return (
    <ul className="filters">
      <li>
        <button type="button" className={allClassNames} id="all" onClick={toggleAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={activeClassNames} id="active" onClick={toggleActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={completedClassNames} id="completed" onClick={toggleCompleted}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;

TasksFilter.defaultProps = {
  setFilter: 'all',
  toggleAll: () => {},
  toggleActive: () => {},
  toggleCompleted: () => {},
};

TasksFilter.propTypes = {
  setFilter: PropTypes.string,
  toggleAll: PropTypes.func,
  toggleActive: PropTypes.func,
  toggleCompleted: PropTypes.func,
};
