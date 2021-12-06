import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TasksFilter';

import './Footer.css';

const Footer = ({
  todoCount,
  filter,
  clearCompleted,
  toggleAll,
  toggleActive,
  toggleCompleted,
}) => (
  <footer className="footer">
    <span className="todo-count">{todoCount} items left</span>
    <TaskFilter
      filter={filter}
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
  filter: 'all',
  clearCompleted: () => {},
  toggleAll: () => {},
  toggleActive: () => {},
  toggleCompleted: () => {},
};

Footer.propTypes = {
  todoCount: PropTypes.number,
  filter: PropTypes.string,
  clearCompleted: PropTypes.func,
  toggleAll: PropTypes.func,
  toggleActive: PropTypes.func,
  toggleCompleted: PropTypes.func,
};

export default Footer;
