import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  static defaultProps = {
    id: 0,
    label: 'Nothing to do',
    completed: false,
    editing: false,
    created: new Date(),
    onDeleted: () => {},
    onEditedItem: () => {},
    onEditingToggle: () => {},
    onCompletedToggle: () => {},
  };

  static propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    created: PropTypes.string,
    onEditedItem: PropTypes.func,
    onDeleted: PropTypes.func,
    onEditingToggle: PropTypes.func,
    onCompletedToggle: PropTypes.func,
  };

  state = {
    label: this.props.label,
  };

  onLabelChange = (evt) => {
    this.setState({ label: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onEditedItem(this.props.id, this.state.label);
    this.props.onEditingToggle(this.props.id);
  };

  render() {
    const { id, label, completed, editing, created, onDeleted, onEditingToggle, onCompletedToggle } = this.props;
    let liClassNames = '';
    if (editing) liClassNames += ' editing';
    if (completed) liClassNames += ' completed';

    return (
      <li className={liClassNames}>
        <div className="view">
          <input
            type="checkbox"
            id={`id${id}`}
            className="toggle"
            onClick={onCompletedToggle}
            checked={!!completed}
            readOnly
          />
          <label htmlFor={`id${id}`}>
            <span className="description">{label}</span>
            <span className="created">{created}</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={onEditingToggle} aria-label="edit" />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
        </div>
        <form onSubmit={this.onSubmit}>
          <i>
            <input
              type="text"
              className="edit"
              placeholder="Editing task"
              value={this.state.label}
              onChange={this.onLabelChange}
            />
          </i>
        </form>
      </li>
    );
  }
}

export default Task;
