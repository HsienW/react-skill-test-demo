import React, {Component} from 'react';
import {ProxyHOC, InheritHOC} from '../decorators';

@ProxyHOC('Hello Title')
export class SimpleProxyCase extends Component {
    render() {
        return (
            <div>Proxy Simple Case</div>
        );
    }
}

@InheritHOC
export class SimpleInheritCase extends Component {
    render() {
        return (
            <div>Inherit Simple Case</div>
        );
    }
}
