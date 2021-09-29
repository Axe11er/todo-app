import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAdded: () => {},
  };

  static propTypes = {
    onAdded: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (evt) => this.setState({ label: evt.target.value });

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
}
