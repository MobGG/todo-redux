import React from 'react';
import { connect } from 'react-redux';
import { List, Button } from 'antd';
import { remove } from '../../actions/action';

const handleRemove = (item, remove, actionWrite) => {
    remove(item.id);
    actionWrite(item.text, 'Remove');
}

const TodoList = ({ todos, remove, actionWrite }) => {
    return (
        <List
            dataSource={todos}
            renderItem={item => (
                <List.Item actions={[<Button key="list-loadmore-edit" onClick={() => handleRemove(item, remove, actionWrite)}>Remove</Button>]} >
                    {item.text}
                </List.Item>
            )}
        />
    );
}

const searchTodo = (todos, filter) => {
    if (filter !== '') {
        return todos.filter(todo => todo.text.search(filter) !== -1 && todo.removed !== true);
    } else {
        return todos.filter(todo => !todo.removed);
    }
}

const mapStateToProps = state => ({
    todos: searchTodo(state.todoReducer, state.searchReducer)
})

const mapDispatchToProps = dispatch => ({
    remove: (id) => dispatch(remove(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);