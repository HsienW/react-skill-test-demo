import React, {Component} from 'react';
import {refHOC, refButtonHOC} from '../decorators';

@refHOC
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

@refButtonHOC
export class RefButtonCase extends Component {
    constructor() {
        super();
        this.ref = React.createRef();
    }

    buttonLog = () => {
        console.log('Ref button case log');
    };

    render() {
        return (
            <button onClick={this.buttonLog} ref={this.ref}>
                Ref button case
            </button>
        );
    }
}

