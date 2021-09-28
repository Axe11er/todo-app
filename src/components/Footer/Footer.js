import React from 'react';
import TaskFilter from '../TasksFilter/TasksFilter';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = ({
   todoCount,
   clearCompleted,
   showActive,
   showCompleted,
   showAll,
}) => {
   return (
      <footer className="footer">
         <span className="todo-count">{todoCount} items left</span>
         <TaskFilter
            showActive={showActive}
            showAll={showAll}
            showCompleted={showCompleted}
         />
         <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
         </button>
      </footer>
   );
};

Footer.defaultProps = {
   todoCount: 0,
   clearCompleted: () => {},
   showActive: () => {},
   showCompleted: () => {},
   showAll: () => {},
};

Footer.propTypes = {
   todoCount: PropTypes.number,
   clearCompleted: PropTypes.func,
   showActive: PropTypes.func,
   showCompleted: PropTypes.func,
   showAll: PropTypes.func,
};

export default Footer;
