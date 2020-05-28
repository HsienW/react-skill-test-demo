import React, {Component} from 'react';
import {proxyControlStateHOC, inheritControlStateHOC} from '../decorators';

@proxyControlStateHOC
export class ProxyControlStateCase extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Proxy Control State Case</div>
                <input {...this.props}/>
            </React.Fragment>
        );
    }
}

@inheritControlStateHOC
export class InheritControlStateCase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkState: 'I am state value'
        };
    }

    render() {
        return (
            <div>Inherit Control State Case</div>
        );
    }
}
