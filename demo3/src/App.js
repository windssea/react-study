import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AddTodo from './compents/AddTodo';
import Footer from './compents/Footer';
import TodoList from './compents/TodoLIst';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './action/actions';

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter} = this.props;
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(toggleTodo(index))}/>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
      </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
