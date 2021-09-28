import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TaskFilter.css';

class TaskFilter extends Component {
   static defaultProps = {
      showActive: () => {},
      showCompleted: () => {},
      showAll: () => {},
   };

   static propTypes = {
      showActive: PropTypes.func,
      showCompleted: PropTypes.func,
      showAll: PropTypes.func,
   };

   state = {
      selected: 'all',
   };

   toggleSelected = e => {
      this.setState(() => {
         if (e.target.id === 'all') return { selected: 'all' };
         if (e.target.id === 'active') return { selected: 'active' };
         if (e.target.id === 'completed') return { selected: 'completed' };
      });
   };

   render() {
      const { showActive, showCompleted, showAll } = this.props;
      const { selected } = this.state;

      let allClassNames = '';
      let activeClassNames = '';
      let completedClassNames = '';

      if (selected === 'all') allClassNames += 'selected';
      if (selected === 'active') activeClassNames += 'selected';
      if (selected === 'completed') completedClassNames += 'selected';

      return (
         <ul className="filters" onClick={this.toggleSelected}>
            <li>
               <button className={allClassNames} id="all" onClick={showAll}>
                  All
               </button>
            </li>
            <li>
               <button
                  className={activeClassNames}
                  id="active"
                  onClick={showActive}>
                  Active
               </button>
            </li>
            <li>
               <button
                  className={completedClassNames}
                  id="completed"
                  onClick={showCompleted}>
                  Completed
               </button>
            </li>
         </ul>
      );
   }
}

export default TaskFilter;
