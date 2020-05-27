import React, {Component} from 'react';

export const HandlePropsHOC = (newPropValue) => (WrappedComponent) => {
    return class handlePropsHOC extends Component {
        render() {
            // 可編輯傳入的 props
            const newProps = {
                ...this.props,
                newPropValue: newPropValue
            };
            return (
                <WrappedComponent {...newProps}/>
            );
        }
    };
};
