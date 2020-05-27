import React, {Component} from 'react';
import {RefHOC} from '../decorators';

@RefHOC
export class RefCase extends Component {

    handelLog() {
        console.log('I am ref-case is log success');
    }
    render() {
        return (
            <div>Ref Case</div>
        );
    }
}
