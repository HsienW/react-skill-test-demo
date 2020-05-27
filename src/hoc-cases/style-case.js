import React, {Component} from 'react';
import {StyleHOC} from '../decorators';
import './hoc-cases-style.css';

@StyleHOC('title')
export class StyleCase extends Component {
    render() {
        return (
            <div>Style Case</div>
        );
    }
}
