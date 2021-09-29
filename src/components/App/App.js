import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './App.css';

export default class App extends Component {
  id = 0;

  state = {
    data: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make Awesome App'),
    ],
    filter: 'all',
  };

  copyData = (arr) => JSON.parse(JSON.stringify(arr));

  findIdx = (arr, id) => arr.findIndex((item) => item.id === id);

  addItem = (text) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      dataCopy.push(this.createTodoItem(text));
      return { data: dataCopy };
    });
  };

  editItem = (id, text) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      const editedItem = this.findIdx(dataCopy, id);
      dataCopy[editedItem].label = text;
      return { data: dataCopy };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      const deletedItem = this.findIdx(dataCopy, id);
      dataCopy.splice(deletedItem, 1);
      return { data: dataCopy };
    });
  };

  editingToggle = (id) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      const editedItem = this.findIdx(data, id);
      dataCopy[editedItem].editing = !dataCopy[editedItem].editing;
      return { data: dataCopy };
    });
  };

  completedToggle = (id) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      const editedItem = this.findIdx(data, id);
      dataCopy[editedItem].completed = !dataCopy[editedItem].completed;
      return { data: dataCopy };
    });
  };

  clearCompleted = () => {
    this.setState(({ data }) => ({ data: data.filter((item) => !item.completed) }));
  };

  showAll = () => this.setState({ filter: 'all' });

  showActive = () => this.setState({ filter: 'active' });

  showCompleted = () => this.setState({ filter: 'completed' });

  createTodoItem(label) {
    return {
      label,
      id: this.id++,
      completed: false,
      editing: false,
      created: `created ${formatDistanceToNow(new Date(), {
        includeSeconds: true,
        addSuffix: true,
      })}`,
    };
  }

  render() {
    const { data, filter } = this.state;
    const doneCount = this.state.data.filter((item) => item.completed);
    const todoCount = this.state.data.length - doneCount.length;

    return (
      <section className="todoapp">
        <AppHeader onAdded={this.addItem} />
        <TaskList
          todos={data}
          filter={filter}
          onDeleted={this.deleteItem}
          onEditingToggle={this.editingToggle}
          onCompletedToggle={this.completedToggle}
          onEditedItem={this.editItem}
          onAdded={this.addItem}
        />
        <Footer
          todoCount={todoCount}
          clearCompleted={this.clearCompleted}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
          showAll={this.showAll}
        />
      </section>
    );
  }
}
