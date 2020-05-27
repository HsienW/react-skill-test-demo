import React, {Component} from 'react';
import {ConditionHOC} from '../decorators';

@ConditionHOC
export class ConditionCase extends Component {
    render() {
        return (
            <div>Condition Case</div>
        );
    }
}