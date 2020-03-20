import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';
import { create, remove, search, writeHistory } from '../actions/action';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, create, search, remove, writeHistory } = this.props;
        return (
            <Fragment>
                <h1 className="App">home</h1>
                <Link to={'/history'}>history</Link>
                <input placeholder={'search'} onChange={(event) => search(event.currentTarget.value)} />
                <TodoInput actionCreate={create} actionWrite={writeHistory} />
                <TodoList todoArray={todos} actionRemove={remove} />
            </Fragment>
        );
    }
}

const searchTodo = (todos, filter) => {
    if (filter !== '') {
        return todos.filter(todo => todo.text.search(filter) !== -1);
        // return todos.filter(todo => todo.text.search(filter) !== -1 || todo.id.search(filter) !== -1);
    } else {
        return todos.filter(todo => !todo.removed);
    }
}

const mapStateToProps = combineReducers => ({
    todos: searchTodo(combineReducers.todoReducer, combineReducers.searchReducer)
})

const mapDispatchToProps = dispatch => ({
    // must import action
    create: (text) => dispatch(create(text)),
    search: (text) => dispatch(search(text)),
    remove: (id) => dispatch(remove(id)),
    writeHistory: (text, removed) => dispatch(writeHistory(text, removed))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);