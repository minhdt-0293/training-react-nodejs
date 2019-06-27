import React, {Component} from 'react';


class Todo extends Component {
  onDeleteTodo = (index) => {
    this.props.onDeleteTodo(index)
  }

  render(){
    let {todo, index} = this.props;

    return(
      <li className="list-group-item">
        {todo}
        <button className="btn btn-danger" onClick={() => this.onDeleteTodo(index)}>Delete</button>
      </li>
    )
  }
}

export default Todo;
