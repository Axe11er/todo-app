import React from 'react';
import Task from '../Task';

import './TaskList.css';

const TaskList = ({ todos }) => {
   const tasks = todos.map(item => {
      return <Task {...item} />;
   });
   return (
      <section className="main">
         <ul className="todo-list">{tasks}</ul>
      </section>
   );
};

export default TaskList;
