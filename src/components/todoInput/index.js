import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { create } from '../../actions/action';

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
        const { create, actionWrite } = this.props;
        const { input } = this.state;
        if (input.trim()) {
            create(input);
            actionWrite(input, 'Add');
            this.setState({ input: '' });
        }
    }

    render() {
        const { input } = this.state;
        return (
            <Input addonBefore={'Todo'} placeholder={'press enter to add todo'} size={'large'} value={input} onChange={this.handleChange} onPressEnter={() => this.handleCreate(input)} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    create: (text) => dispatch(create(text)),
})

export default connect(null, mapDispatchToProps)(TodoInput);