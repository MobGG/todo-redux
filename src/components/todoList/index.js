import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined, } from '@ant-design/icons';

function TodoList(props) {
    const { todoArray, actionRemove } = props;
    if (todoArray.length > 0) {
        return todoArray.map((todo, index) => {
            return (
                <div key={todo.id.toString()}>
                    <h1> {todo.id} {todo.text}</h1>
                    <Button type="primary" onClick={() => actionRemove(todo.id)}>
                        Remove
                    </Button>
                </div>
            )
        })
    } else {
        return <h1>nothing todo</h1>;
    }

}

export default TodoList;
