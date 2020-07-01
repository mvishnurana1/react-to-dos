import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updatedTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }


  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
              name="task"
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="">
          <button onClick={this.toggleForm}> edit </button>
          <button onClick={this.handleRemove}> delete </button>
          <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>
            {this.props.task}</li>
        </div >
      )
    }

    return result;
  }
}

export default ToDo; 