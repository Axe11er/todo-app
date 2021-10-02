import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TasksFilter';

import './Footer.css';

const Footer = ({
  todoCount,
  setFilter,
  clearCompleted,
  toggleAll,
  toggleActive,
  toggleCompleted,
}) => (
  <footer className="footer">
    <span className="todo-count">{todoCount} items left</span>
    <TaskFilter
      setFilter={setFilter}
      toggleAll={toggleAll}
      toggleActive={toggleActive}
      toggleCompleted={toggleCompleted}
    />
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  todoCount: 0,
  setFilter: 'all',
  clearCompleted: () => {},
  toggleAll: () => {},
  toggleActive: () => {},
  toggleCompleted: () => {},
};

Footer.propTypes = {
  todoCount: PropTypes.number,
  setFilter: PropTypes.string,
  clearCompleted: PropTypes.func,
  toggleAll: PropTypes.func,
  toggleActive: PropTypes.func,
  toggleCompleted: PropTypes.func,
};

export default Footer;
