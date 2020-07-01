import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDo from './NewTodo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ todos: [] });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask }
      }
      return todo;
    });

    this.setState({ todos: updatedTodos })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });

    this.setState({ todos: updatedTodos })
  }


  render() {
    const todos = this.state.todos.map(todo => {
      return <ToDo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updatedTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    })

    return (
      <div className="TodoList">
        <h1>Todo List <span>A simple React Todo</span> </h1>
        <ul>{todos}</ul>
        <NewToDo createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList; 
