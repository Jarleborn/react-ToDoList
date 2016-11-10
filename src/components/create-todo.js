import React, { Component } from 'react';

import './App.css';



class CreateTodos extends Component {


  render() {
  return (
    <form onSubmit={this.handleCreate.bind(this)}>
      <input type='text' placeholder='vad ska göras?' ref='createInput'/>
      <button>Skapa </button>
    </form>
    );
  }
  handleCreate(event){
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}

export default CreateTodos;
