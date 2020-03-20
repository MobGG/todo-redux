import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, List } from 'antd';

import { clearAllHistory, sort } from '../actions/action';

class History extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { historyArray, clearAllHistory } = this.props;
        return (
            <Fragment>
                <h1>history</h1>
                <Link to={'/'}>home</Link>
                <div>
                    <Button type="primary" onClick={() => clearAllHistory()}>
                        Remove
                    </Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={historyArray}
                    renderItem={item => (
                        <List.Item>
                            {item.text}
                            {/* <Typography.Text mark>[ITEM]</Typography.Text> {item} */}
                        </List.Item>
                    )}
                />

            </Fragment>
        );
    }
}

const mapStateToProps = combineReducers => ({
    // todos: searchTodo(combineReducers.todoReducer, combineReducers.searchReducer)
    historyArray: combineReducers.historyReducer
})

const mapDispatchToProps = dispatch => ({
    // must import action
    clearAllHistory: () => dispatch(clearAllHistory()),
    sort: (text) => dispatch(sort(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(History);
