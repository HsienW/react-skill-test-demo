import React, {Component} from 'react';

export const ConditionHOC = (WrappedComponent) => {
    return class conditionHOC extends Component {
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
