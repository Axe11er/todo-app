import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm';

const AppHeader = ({ newTaskLabel, onAdded, onNewTaskPrint, onSubmit }) => (
  <header className="header">
    <h1>todos</h1>
    <NewTaskForm newTaskLabel={newTaskLabel} onAdded={onAdded} onNewTaskPrint={onNewTaskPrint} onSubmit={onSubmit} />
  </header>
);

AppHeader.defaultProps = { newTaskLabel: '', onAdded: () => {}, onNewTaskPrint: () => {}, onSubmit: () => {} };
AppHeader.propTypes = {
  newTaskLabel: PropTypes.string,
  onAdded: PropTypes.func,
  onNewTaskPrint: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AppHeader;
