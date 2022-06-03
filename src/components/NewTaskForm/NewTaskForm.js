import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ onAddItem }) => {
   const [label, setLabel] = useState('');

   const onSubmit = evt => {
      evt.preventDefault();
      onAddItem(label.trim());
      setLabel('');
   };

   return (
      <form onSubmit={onSubmit}>
         <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={label}
            onChange={evt => setLabel(evt.target.value)}
         />
      </form>
   );
};

NewTaskForm.defaultProps = {
   onAddItem: () => {},
};

NewTaskForm.propTypes = {
   onAddItem: PropTypes.func,
};

export default NewTaskForm;
