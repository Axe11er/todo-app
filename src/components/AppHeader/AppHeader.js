import React from 'react';
import PropTypes from 'prop-types';
import NewTaskForm from '../NewTaskForm';

const AppHeader = ({ onAdded }) => (
  <header className="header">
    <h1>todos</h1>
    <NewTaskForm onAdded={onAdded} />
  </header>
);

AppHeader.defaultProps = { onAdded: () => {} };
AppHeader.propTypes = { onAdded: PropTypes.func };

export default AppHeader;
