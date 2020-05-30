import React, {Component} from 'react';
import {logHOC} from '../decorators';
import {fakeApi} from '../utils/fake-api';

@logHOC
export class LogCase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiData: {}
        };
    }

    componentDidMount() {
        console.log('元件本身');
        fakeApi().then((respond) => {
            console.log(respond);
            this.setState(() => ({apiData: respond}));
        });
    }

    render() {
        return (
            <div>Log Case</div>
        );
    }
}
