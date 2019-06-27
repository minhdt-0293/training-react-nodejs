import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: []
    }
  }

  onAddNewTodo = (newTodo) => {
    this.setState({todoList: [...this.state.todoList, newTodo]})
  }

  onDeleteTodo = (index) => {
    let {todoList} = this.state;
    todoList.splice(index, 1);
    this.setState({todoList});
  }

  render(){
    let {todoList} = this.state;
    return(
      <div className="container">
        <TodoForm onAddNewTodo={this.onAddNewTodo} />
        <TodoList todoList = {todoList} onDeleteTodo={this.onDeleteTodo} />
      </div>
    )
  }
}

export default App;
