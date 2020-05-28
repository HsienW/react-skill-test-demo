import React, {Component} from 'react';
import {proxyControlStateHOC} from '../decorators';

@proxyControlStateHOC
export class ControlStateHOCCase extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Control State Case</div>
                <input {...this.props}/>
            </React.Fragment>
        );
    }
}
