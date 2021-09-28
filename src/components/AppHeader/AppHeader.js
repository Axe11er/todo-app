import React from 'react';
import NewTaskForm from '../NewTaskForm';
import PropTypes from 'prop-types';

const AppHeader = ({ onAdded }) => {
   return (
      <header className="header">
         <h1>todos</h1>
         <NewTaskForm onAdded={onAdded} />
      </header>
   );
};

AppHeader.defaultProps = { onAdded: () => {} };
AppHeader.propTypes = { onAdded: PropTypes.func };

export default AppHeader;
