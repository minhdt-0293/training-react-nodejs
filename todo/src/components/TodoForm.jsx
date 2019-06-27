import React, { Component } from 'react';

class TodoForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      newTodo: ""
    }
  }

  addTodo = () => {
    this.props.onAddNewTodo(this.state.newTodo);
    this.setState({newTodo: ""});
  }

  changeText = (event) => {
    let newTodo = event.target.value;
    this.setState({newTodo});
  }

  render() {
    let {newTodo} = this.state;
    return(
      <div className="input-group">
        <input type="search" className="form-control" value={newTodo} onChange={this.changeText} />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={this.addTodo}>
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Add!
          </button>
        </span>
      </div>
    )
  }
}

export default TodoForm;
