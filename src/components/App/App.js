import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './App.css';

export default class App extends Component {
   state = {
      data: [
         { task: 'Drink Coffee', id: 1, className: 'completed' },
         { task: 'Learn React', id: 2, className: 'editing' },
         { task: 'Build Awesome App', id: 3, className: 'active' },
      ],
   };

   deleteItem = id => {
      this.setState(({ data }) => {
         const dataCopy = [...data];
         const deletedItem = dataCopy.findIndex(item => item.id === id);
         dataCopy.splice(deletedItem, 1);
         return { data: dataCopy };
      });
   };

   render() {
      const { data } = this.state;
      return (
         <section className="todoapp">
            <AppHeader />
            <TaskList todos={data} onDeleted={this.deleteItem} />
            <Footer />
         </section>
      );
   }
}
