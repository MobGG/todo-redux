import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import TodoSearch from '../components/todoSearch';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';
import { writeHistory } from '../actions/action';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    handleWriteHistory = (input, status) => {
        const { writeHistory } = this.props;
        const dateTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const historyObj = {
            text: input,
            status: status,
            dateTime: dateTime
        };
        writeHistory(historyObj);
    }

    render() {
        return (
            <Fragment>
                <h1 className='center'>Todo List</h1>
                <div className='padding'>
                    <Link to={'/history'}>go to history page</Link>
                    <TodoSearch />
                    <TodoInput actionWrite={this.handleWriteHistory} />
                    <TodoList actionWrite={this.handleWriteHistory} />
                </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    writeHistory: (text, removed) => dispatch(writeHistory(text, removed))
})

export default connect(null, mapDispatchToProps)(Home);