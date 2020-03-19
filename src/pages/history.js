import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class History extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>history</h1>
                <Link to={'/'}>home</Link>

            </Fragment>
        );
    }
}
