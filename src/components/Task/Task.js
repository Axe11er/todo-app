import React, { Component } from 'react';

class Task extends Component {
   render() {
      const { id, task, onDeleted } = this.props;
      let classNames = 'description';
      return (
         <li className={classNames}>
            <div className="view">
               <input type="checkbox" id={`id${id}`} className="toggle" />
               <label htmlFor={`id${id}`}>
                  <span className={classNames}>{task}</span>
                  <span className="created">{`created ${new Date().toLocaleTimeString()}`}</span>
               </label>
               <button className="icon icon-edit"></button>
               <button
                  className="icon icon-destroy"
                  onClick={onDeleted}></button>
            </div>
            <input type="text" className="edit" defaultValue="Editing task" />
         </li>
      );
   }
}

export default Task;
