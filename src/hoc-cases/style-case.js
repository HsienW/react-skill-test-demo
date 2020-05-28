import React, {Component} from 'react';
import {styleHOC} from '../decorators';
import './hoc-cases-style.css';

@styleHOC('title')
export class StyleCase extends Component {
    render() {
        return (
            <div>Style Case</div>
        );
    }
}
