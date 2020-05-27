import React, {Component} from 'react';

export const RefHOC = (WrappedComponent) => {
    return class refHOC extends Component {
        componentDidMount() {
            this.wrappedRef.handelLog();
        }

        render() {
            return (
                <React.Fragment>
                    <WrappedComponent
                        {...this.props}
                        ref={ref => {
                            this.wrappedRef = ref;
                        }}
                    />
                </React.Fragment>
            );
        }
    };
};
