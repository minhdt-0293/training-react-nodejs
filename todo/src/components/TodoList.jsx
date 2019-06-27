import React, {Component} from 'react';
import Todo from './Todo'

class TodoList extends Component {
  render(){
    let {todoList, onDeleteTodo} = this.props;

    let elementTodoList = todoList.map((todo, index) => {
      return (
        <Todo todo={todo} key={index} index={index} onDeleteTodo={onDeleteTodo} />
      )
    })
    return(
      <ul className="list-group">
        {elementTodoList}
      </ul>
    )
  }
}

export default TodoList;
