import React from 'react';

const Task = ({ task, className }) => {
   return (
      <li className={className}>
         <div className="view">
            <input type="checkbox" className="toggle" />
            <label>
               <span className="description">{task}</span>
               <span className="created">{`created ${new Date().toLocaleTimeString()}`}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
         </div>
         <input type="text" className="edit" defaultValue="Editing task" />
      </li>
   );
};

export default Task;
