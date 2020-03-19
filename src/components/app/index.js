import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../../reducers';

import HomePage from '../../pages/home';
import HistoryPage from '../../pages/history';
import NotFound from '../../pages/not_found';

import { IS_PRODUCTION } from '../../constants/config';

const store = IS_PRODUCTION ?
    createStore(reducers)
    :
    createStore(reducers, applyMiddleware(logger, reduxImmutableStateInvariant()));

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/history'} component={HistoryPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
