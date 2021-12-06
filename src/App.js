import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import AppHeader from './components/AppHeader';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('data')) || []);
  const [filter, setFilter] = useState('all');
  const [time, setTime] = useState({ min: '', sec: '' });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todos));
  }, [todos]);

  const onChangeMin = (evt) => {
    setTime({
      ...time,
      min: evt.target.value > 999 ? 999 : evt.target.value,
    });
  };

  const onChangeSec = (evt) => {
    setTime({ ...time, sec: evt.target.value > 59 ? 59 : evt.target.value });
  };

  const onChangeTaskTime = (id, min, sec) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, time: { ...time, min, sec } } : todo)));
  };

  const createTodoItem = (label) => ({
    label,
    id: Date.now(),
    completed: false,
    editing: false,
    created: `created ${formatDistanceToNow(new Date(), {
      includeSeconds: true,
      addSuffix: true,
    })}`,
    // created: new Date().toLocaleString(),
    time: {
      min: parseInt(time.min, 10) || 0,
      sec: parseInt(time.sec, 10) || 0,
    },
  });

  const addItem = (text) => {
    if (text) {
      setTime({ ...time, min: '', sec: '' });
      setTodos([...todos, createTodoItem(text)]);
    }
  };

  const deleteItem = (id) => setTodos(todos.filter((item) => item.id !== id));

  const editItem = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, label: text } : todo)));
  };

  const editingToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, editing: !todo.editing, completed: false } : todo))
    );
  };

  const completedToggle = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((item) => !item.completed));
  };

  const toggleAll = () => {
    setFilter('all');
  };

  const toggleActive = () => {
    setFilter('active');
  };

  const toggleCompleted = () => {
    setFilter('completed');
  };

  const todoCount = todos.reduce((count, task) => (task.completed !== true ? (count += 1) : count), 0);

  return (
    <section className="todoapp">
      <AppHeader time={time} onAddItem={addItem} changeMin={onChangeMin} changeSec={onChangeSec} />
      <TaskList
        todos={todos}
        filter={filter}
        onDeleted={deleteItem}
        onEditingToggle={editingToggle}
        onCompletedToggle={completedToggle}
        onEditedItem={editItem}
        onChangeTaskTime={onChangeTaskTime}
      />
      <Footer
        todoCount={todoCount}
        filter={filter}
        clearCompleted={clearCompleted}
        toggleAll={toggleAll}
        toggleActive={toggleActive}
        toggleCompleted={toggleCompleted}
      />
    </section>
  );
}
