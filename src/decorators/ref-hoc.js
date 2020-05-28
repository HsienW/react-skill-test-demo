import React, {Component} from 'react';

export const refHOC = (WrappedComponent) => {
    return class RefHOC extends Component {

        componentDidMount() {
            this.wrappedRef.handelLog();
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    ref={refs => {
                        this.wrappedRef = refs;
                    }}
                />
            );
        }
    };
};

// todo this HOC should fix to
export const refButtonHOC = (WrappedComponent) => {
    class RefButtonHOC extends Component {
        render() {
            const {forwardedRef, ...props} = {...this.props};
            return <WrappedComponent ref={forwardedRef} {...props} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <RefButtonHOC forwardedRef={ref} {...props}/>;
    });
};
