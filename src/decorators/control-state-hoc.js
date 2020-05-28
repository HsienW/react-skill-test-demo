import React, {Component} from 'react';

export const proxyControlStateHOC = (WrappedComponent) => {
    return class ProxyControlStateHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {value: ''};
        }

        onChangeValue = (event) => {
            const {onChange} = {...this.props};
            this.setState({
                value: event.target.value,
            }, () => {
                if (typeof onChange === 'function') {
                    onChange(event);
                }
            });
        };

        render() {
            const newProps = {
                value: this.state.value,
                onChange: this.onChangeValue,
            };
            return (
                <WrappedComponent {...newProps}/>
            );
        }
    };
};

export const inheritControlStateHOC = (WrappedComponent) => {
    return class InheritControlStateHOC extends WrappedComponent {
        render() {
            console.log('props', this.props);
            console.log('state', this.state);
            return (
                <div>{super.render()}</div>
            );
        }
    };
};