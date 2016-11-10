import React, { Component } from 'react';
import CreateTodos from './create-todo'
import TodosList from './todos-list';
import _ from 'lodash';
import './App.css';

const todos = [{
  task: 'gör en grej',
  isCompleted: false
},
{
  task: 'gör en annan grej',
  isCompleted: true
}

];

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todos
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <CreateTodos createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleateTask={this.deleateTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos});
  }
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos})
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;

    this.setState({todos: this.state.todos});
  }

  deleateTask(task){
    _.remove(this.state.todos, todo => todo.task === task);
    this.setState({todos: this.state.todos});
  }
}

export default App;
