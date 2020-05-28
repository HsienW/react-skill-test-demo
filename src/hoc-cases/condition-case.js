import React, {Component} from 'react';
import {conditionHOC} from '../decorators';

@conditionHOC
export class ConditionCase extends Component {
    render() {
        return (
            <div>Condition Case</div>
        );
    }
}
