import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
          <ul>
            {this.props.todos.map((todo, index) =>
              <Todo {...todo}
                    key={index}
                    onClick={() => this.props.onTodoClick(index)} />
            )}
          </ul>
        )
      }
}

export default TodoList;