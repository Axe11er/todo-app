import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

import './TaskList.css';

const TaskList = ({ todos, filter, onDeleted, onEditingToggle, onEditedItem, onCompletedToggle, onAdded }) => {
  const tasksToRender = (item) => (
    <Task
      key={item.id}
      {...item}
      onDeleted={() => onDeleted(item.id)}
      onEditingToggle={() => onEditingToggle(item.id)}
      onEditedItem={onEditedItem}
      onCompletedToggle={() => onCompletedToggle(item.id)}
      onAdded={onAdded}
    />
  );

  let tasks;

  if (filter === 'all') tasks = todos.map((item) => tasksToRender(item));
  if (filter === 'completed') {
    tasks = todos.filter((item) => item.completed).map((item) => tasksToRender(item));
  }
  if (filter === 'active') {
    tasks = todos.filter((item) => !item.completed).map((item) => tasksToRender(item));
  }

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  todos: [],
  filter: 'all',
  onDeleted: () => {},
  onEditingToggle: () => {},
  onEditedItem: () => {},
  onCompletedToggle: () => {},
  onAdded: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onDeleted: PropTypes.func,
  onEditingToggle: PropTypes.func,
  onEditedItem: PropTypes.func,
  onCompletedToggle: PropTypes.func,
  onAdded: PropTypes.func,
};

export default TaskList;
