import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer';

export default function Task({
  id,
  label,
  completed,
  editing,
  created,
  time,
  onDeleted,
  onEditedItem,
  onEditingToggle,
  onCompletedToggle,
  onChangeTaskTime,
}) {
  const [newLabel, setNewLabel] = useState(label);

  const onLabelChange = (evt) => {
    setNewLabel(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onEditedItem(id, newLabel);
    onEditingToggle();
  };

  const liClassNames = [];
  if (editing) liClassNames.push('editing');
  if (completed) liClassNames.push('completed');

  return (
    <li className={[...liClassNames]}>
      <div className="view">
        <input
          type="checkbox"
          id={`id${id}`}
          className="toggle"
          onClick={onCompletedToggle}
          checked={completed}
          readOnly
        />
        <label htmlFor={`id${id}`}>
          <span className="description">{label}</span>
          <span>
            <Timer id={id} time={time} onChangeTaskTime={onChangeTaskTime} />
          </span>
          <span className="created">{created}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onEditingToggle} aria-label="edit" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
      </div>
      <form onSubmit={onSubmit}>
        <i>
          <input type="text" className="edit" placeholder="Editing task" value={newLabel} onChange={onLabelChange} />
        </i>
      </form>
    </li>
  );
}

Task.defaultProps = {
  id: 0,
  label: '',
  completed: false,
  editing: false,
  created: new Date(),
  time: { min: 0, sec: 0 },
  onDeleted: () => {},
  onEditedItem: () => {},
  onEditingToggle: () => {},
  onCompletedToggle: () => {},
  onChangeTaskTime: () => {},
};

Task.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  created: PropTypes.string,
  time: PropTypes.objectOf(PropTypes.number),
  onDeleted: PropTypes.func,
  onEditedItem: PropTypes.func,
  onEditingToggle: PropTypes.func,
  onCompletedToggle: PropTypes.func,
  onChangeTaskTime: PropTypes.func,
};
