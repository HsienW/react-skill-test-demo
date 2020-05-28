import React, {Component} from 'react';

export const handlePropsHOC = (newPropValue) => (WrappedComponent) => {
    return class HandlePropsHOC extends Component {
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
