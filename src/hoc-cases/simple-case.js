import React, {Component} from 'react';
import {proxyHOC, inheritHOC} from '../decorators';

@proxyHOC('Hello Title')
export class SimpleProxyCase extends Component {
    render() {
        return (
            <div>Proxy Simple Case</div>
        );
    }
}

@inheritHOC
export class SimpleInheritCase extends Component {
    render() {
        return (
            <div>Inherit Simple Case</div>
        );
    }
}
