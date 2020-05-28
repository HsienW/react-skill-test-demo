import React, {Component} from 'react';

export const conditionHOC = (WrappedComponent) => {
    return class ConditionHOC extends Component {
        render() {
            const {showComponent} = {...this.props};
            if (!showComponent) {
                return null;
            }
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    };
};
