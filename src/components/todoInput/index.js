import React, { Component } from 'react';
import moment from 'moment';

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

    handleWriteHistory = (input, status) => {
        const { actionWrite } = this.props;
        const dateTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const historyObj = {
            text: input,
            status: status,
            dateTime: dateTime
        };
        actionWrite(historyObj);
    }

    handleCreate = () => {
        const { actionCreate } = this.props;
        const { input } = this.state;
        const status = 'Add';
        actionCreate(input);
        this.handleWriteHistory(input, status);
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