import React, {Component} from 'react';
import {logHOC} from '../decorators';

@logHOC
export class LogCase extends Component {
    render() {
        return (
            <div>Log Case</div>
        );
    }
}
