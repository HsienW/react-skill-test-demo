import React, {Component} from 'react';
import {logHOC} from '../decorators';

@logHOC
export class LogCase extends Component {

    render() {
        return (
            <React.Fragment>
                <div>Log Case</div>
            </React.Fragment>
        );
    }
}
