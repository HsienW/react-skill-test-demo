import React, {Component} from 'react';

export const logHOC = (WrappedComponent) => {
    return class LogHOC extends Component {
        componentDidMount() {
            this.start = Date.now();
            console.log(`我的 render 時間是: ${this.start}`);
        }


        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    };
};
