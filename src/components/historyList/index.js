import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import { sort } from '../../actions/action';

const HistoryList = ({ historyArray }) => {
    return (
        <List
            bordered
            dataSource={historyArray}
            renderItem={item => (
                <List.Item>
                    {item.text}
                </List.Item>
            )}
        />
    )
}

const sortHistoryBy = (history, sort) => {
    let sortedHistory = [...history].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    if (sort === 'desc') {
        return sortedHistory.reverse();
    } else if (sort === 'asc') {
        return sortedHistory;
    }
}

const mapStateToProps = (state) => {
    const { historyReducer, sortReducer } = state;
    return { historyArray: sortHistoryBy(historyReducer, sortReducer), }
}

const mapDispatchToProps = (dispatch) => {
    // must import action
    return {
        sort: (text) => dispatch(sort(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);
