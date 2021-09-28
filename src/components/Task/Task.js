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
      onEditingToggle: () => {},
      onCompletedToggle: () => {},
   };

   static propTypes = {
      id: PropTypes.number,
      label: PropTypes.string,
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      created: PropTypes.string,
      onDeleted: PropTypes.func,
      onEditingToggle: PropTypes.func,
      onCompletedToggle: PropTypes.func,
   };

   state = {
      label: this.props.label,
   };

   onLabelChange = e => {
      this.setState({ label: e.target.value });
   };

   onSubmit = e => {
      e.preventDefault();
      this.props.onEditedItem(this.props.id, this.state.label);
      this.props.onEditingToggle(this.props.id);
   };

   render() {
      const {
         id,
         label,
         completed,
         editing,
         created,
         onDeleted,
         onEditingToggle,
         onCompletedToggle,
      } = this.props;
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
                  checked={completed ? true : false}
                  readOnly
               />
               <label htmlFor={`id${id}`}>
                  <span className="description">{label}</span>
                  <span className="created">{created}</span>
               </label>
               <button
                  className="icon icon-edit"
                  onClick={onEditingToggle}></button>
               <button
                  className="icon icon-destroy"
                  onClick={onDeleted}></button>
            </div>
            <form onSubmit={this.onSubmit}>
               <input
                  type="text"
                  className="edit"
                  placeholder="Editing task"
                  value={this.state.label}
                  autoFocus
                  onChange={this.onLabelChange}
               />
            </form>
         </li>
      );
   }
}

export default Task;
