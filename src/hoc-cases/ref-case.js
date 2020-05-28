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

    buttonLog = () => {
        console.log('Ref button case log');
    };

    render() {
        return (
            <button onClick={this.buttonLog}>
                Ref button case
            </button>
        );
    }
}
