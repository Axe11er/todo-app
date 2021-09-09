import React from 'react';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './App.css';

const App = () => {
   const data = [
      { task: 'Drink Coffee', key: 1, className: 'completed' },
      { task: 'Learn React', key: 2, className: 'editing' },
      { task: 'Build Awesome App', key: 3, className: 'active' },
   ];
   return (
      <section className="todoapp">
         <AppHeader />
         <TaskList todos={data} />
         <Footer />
      </section>
   );
};

export default App;
