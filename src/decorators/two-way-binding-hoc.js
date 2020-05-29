import React, {Component} from 'react';

export const twoWayBindingHOC = (WrappedComponent) => {
    return class TwoWayBindingHOC extends Component {
        onChange = (event) => {
            const {changeModel} = this.context;
            const {onChange} = {...this.props};
            const {modelView} = {...this.props};
            changeModel(modelView, event.target.value);
            if (typeof onChange === 'function') {
                onChange(event);
            }
        }

        render() {
            const {model} = this.context;
            const {modelView} = {...this.props};
            return (
                <WrappedComponent
                    {...this.props}
                    value={model[modelView]}
                    onChange={this.onChange}
                />
            );
        }
    };
};
