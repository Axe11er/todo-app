import React from 'react';
import Task from '../Task';

import './TaskList.css';

const TaskList = ({ todos, onDeleted }) => {
   const tasks = todos.map(item => {
      return (
         <Task key={item.id} {...item} onDeleted={() => onDeleted(item.id)} />
      );
   });
   return (
      <section className="main">
         <ul className="todo-list">{tasks}</ul>
      </section>
   );
};

export default TaskList;
