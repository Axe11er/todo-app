import React from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ newTaskLabel, onNewTaskPrint, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input className="new-todo" placeholder="What needs to be done?" value={newTaskLabel} onChange={onNewTaskPrint} />
  </form>
);
// {editedLabel}
NewTaskForm.defaultProps = {
  newTaskLabel: '',
  onNewTaskPrint: () => {},
  onSubmit: () => {},
};

NewTaskForm.propTypes = {
  newTaskLabel: PropTypes.string,
  onNewTaskPrint: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default NewTaskForm;
