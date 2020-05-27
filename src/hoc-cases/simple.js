import React, {Component} from 'react';
import {ProxyHOC, InheritHOC} from '../decorators';

@ProxyHOC('Hello Title')
export class SimpleProxy extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>Proxy Simple Case</div>
        );
    }
}

@InheritHOC
export class SimpleInherit extends Component {
    render() {
        return (
            <div>Inherit Simple Case</div>
        );
    }
}
