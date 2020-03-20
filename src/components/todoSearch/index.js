import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { search } from '../../actions/action';

const TodoSearch = ({ search }) => {
    return (
        <Input addonBefore={'Search'} placeholder={'try search text'} size={'large'} onChange={(event) => search(event.currentTarget.value)} />
    );
}

const mapDispatchToProps = dispatch => ({
    search: (text) => dispatch(search(text)),
})

export default connect(null, mapDispatchToProps)(TodoSearch);