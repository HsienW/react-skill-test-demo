import React, {Component} from 'react';
import {handlePropsHOC} from '../decorators';

@handlePropsHOC('I am new props')
export class HandlePropsCase extends Component {
    render() {
        const {newPropValue} = {...this.props};
        return (
            <React.Fragment>
                <div>Show new props: {newPropValue}</div>
                <div>HandleProps Case</div>
            </React.Fragment>
        );
    }
}
