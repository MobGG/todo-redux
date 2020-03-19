import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };

    }

    handleChange = (event) => {
        event.preventDefault();
        // const dataTag = event.currentTarget.getAttribute('data-tag');
        this.setState({ input: event.currentTarget.value })
    }

    handleCreate = () => {
        const { input } = this.state;
        const { actionCreate } = this.props;
        actionCreate(input);
        this.setState({ input: '' });
    }

    render() {
        const { input } = this.state;
        return (
            <div>
                <input value={input} onChange={this.handleChange} />
                <button onClick={() => this.handleCreate(input)}>Add Todo</button>
            </div>
        )
    }
}

export default TodoInput;