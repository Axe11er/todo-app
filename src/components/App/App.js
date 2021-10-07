import React, { Component } from 'react';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './App.css';

export default class App extends Component {
  state = {
    data: JSON.parse(localStorage.getItem('data')) || [],
    filter: 'all',
    newTaskLabel: '',
  };

  copyData = (arr) => JSON.parse(JSON.stringify(arr));

  findIdx = (arr, id) => arr.findIndex((item) => item.id === id);

  addItem = (text) => {
    if (text) {
      this.setState(({ data }) => ({ data: [...data, this.createTodoItem(text)] }));
    }
  };

  deleteItem = (id) => this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id) }));

  editItem = (id, text) => {
    this.setState(({ data }) => {
      const dataCopy = this.copyData(data);
      const editedItem = this.findIdx(data, id);
      dataCopy[editedItem].label = text;
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

  onNewTaskPrint = (evt) => this.setState({ newTaskLabel: evt.target.value });

  onNewTaskSubmit = (evt) => {
    evt.preventDefault();
    this.addItem(this.state.newTaskLabel.trim());
    this.setState({ newTaskLabel: '' });
  };

  toggleAll = () => {
    this.setState({ filter: 'all' });
  };

  toggleActive = () => {
    this.setState({ filter: 'active' });
  };

  toggleCompleted = () => {
    this.setState({ filter: 'completed' });
  };

  createTodoItem(label) {
    return {
      label,
      id: Date.now(),
      completed: false,
      editing: false,
      // created: `created ${formatDistanceToNow(new Date(), {
      //   includeSeconds: true,
      //   addSuffix: true,
      // })}`,
      created: new Date().toLocaleString(),
    };
  }

  render() {
    localStorage.setItem('data', JSON.stringify(this.state.data));

    const { data, filter, editedLabel, newTaskLabel } = this.state;
    const todoCount = data.reduce((count, task) => (task.completed !== true ? (count += 1) : count), 0);

    return (
      <section className="todoapp">
        <AppHeader
          newTaskLabel={newTaskLabel}
          onAdded={this.addItem}
          onNewTaskPrint={this.onNewTaskPrint}
          onSubmit={this.onNewTaskSubmit}
        />
        <TaskList
          todos={data}
          filter={filter}
          editedLabel={editedLabel}
          onDeleted={this.deleteItem}
          onEditingToggle={this.editingToggle}
          onCompletedToggle={this.completedToggle}
          onEditedItem={this.editItem}
          onAdded={this.addItem}
        />
        <Footer
          todoCount={todoCount}
          setFilter={filter}
          clearCompleted={this.clearCompleted}
          toggleAll={this.toggleAll}
          toggleActive={this.toggleActive}
          toggleCompleted={this.toggleCompleted}
        />
      </section>
    );
  }
}
