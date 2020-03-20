import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HistoryList from '../components/historyList';
import ClearHistoryButton from '../components/clearHistoryButton';

const History = () => {
    return (
        <Fragment>
            <h1 className='center'>history</h1>
            <div className='padding'>
                <Link to={'/'}>back to home</Link>
                <HistoryList />
                <ClearHistoryButton />
            </div>
        </Fragment>
    );
}

export default History;
