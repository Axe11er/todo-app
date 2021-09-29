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

  toggleSelected = (evt) => {
    if (evt.target.id === 'all') this.setState({ selected: 'all' });
    if (evt.target.id === 'active') this.setState({ selected: 'active' });
    if (evt.target.id === 'completed') this.setState({ selected: 'completed' });
  };

  toggleAll = () => {
    this.props.showAll();
    this.setState({ selected: 'all' });
  };

  toggleActive = () => {
    this.props.showActive();
    this.setState({ selected: 'active' });
  };

  toggleCompleted = () => {
    this.props.showCompleted();
    this.setState({ selected: 'completed' });
  };

  render() {
    const { selected } = this.state;

    let allClassNames = '';
    let activeClassNames = '';
    let completedClassNames = '';

    if (selected === 'all') allClassNames += 'selected';
    if (selected === 'active') activeClassNames += 'selected';
    if (selected === 'completed') completedClassNames += 'selected';

    return (
      <ul className="filters">
        <li>
          <button type="button" className={allClassNames} id="all" onClick={this.toggleAll}>
            All
          </button>
        </li>
        <li>
          <button type="button" className={activeClassNames} id="active" onClick={this.toggleActive}>
            Active
          </button>
        </li>
        <li>
          <button type="button" className={completedClassNames} id="completed" onClick={this.toggleCompleted}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TaskFilter;
