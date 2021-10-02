import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './App.css';

export default class App extends Component {
  state = {
    data: [],
    filter: 'all',
    setFilter: 'all',
    newTaskLabel: '',
  };

  copyData = (arr) => JSON.parse(JSON.stringify(arr));

  findIdx = (arr, id) => arr.findIndex((item) => item.id === id);

  addItem = (text) => {
    if (text) {
      this.setState(({ data }) => ({ data: [...data, this.createTodoItem(text)] }));
    }
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

  onNewTaskPrint = (evt) => this.setState({ newTaskLabel: evt.target.value });

  onNewTaskSubmit = (evt) => {
    evt.preventDefault();
    this.addItem(this.state.newTaskLabel.trim());
    this.setState({ newTaskLabel: '' });
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

  toggleSelected = (evt) => {
    if (evt.target.id === 'all') this.setState({ setFilter: 'all' });
    if (evt.target.id === 'active') this.setState({ setFilter: 'active' });
    if (evt.target.id === 'completed') this.setState({ setFilter: 'completed' });
  };

  toggleAll = () => {
    this.showAll();
    this.setState({ setFilter: 'all' });
  };

  toggleActive = () => {
    this.showActive();
    this.setState({ setFilter: 'active' });
  };

  toggleCompleted = () => {
    this.showCompleted();
    this.setState({ setFilter: 'completed' });
  };

  createTodoItem(label) {
    return {
      label,
      id: Date.now(),
      completed: false,
      editing: false,
      created: `created ${formatDistanceToNow(new Date(), {
        includeSeconds: true,
        addSuffix: true,
      })}`,
    };
  }

  render() {
    const { data, filter, setFilter, editedLabel, newTaskLabel } = this.state;
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
          setFilter={setFilter}
          clearCompleted={this.clearCompleted}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
          showAll={this.showAll}
          toggleAll={this.toggleAll}
          toggleActive={this.toggleActive}
          toggleCompleted={this.toggleCompleted}
        />
      </section>
    );
  }
}
