import React, {Component} from 'react';

export const RefHOC = (WrappedComponent) => {
    return class refHOC extends Component {

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
export const RefButtonHOC = (WrappedComponent) => {
    class refButtonHOC extends Component {
        render() {
            const {forwardedRef, ...props} = {...this.props};
            return <WrappedComponent ref={forwardedRef} {...props} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <refButtonHOC forwardedRef={ref} {...props}/>;
    });
};
