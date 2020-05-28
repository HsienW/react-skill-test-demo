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

export const RefButtonHOC = (WrappedComponent) => {
    class refButtonHOC extends Component {

        // componentDidMount() {
        //     this.ref.buttonLog();
        // }

        render() {
            const {forwardedRef} = {...this.props};
            return <WrappedComponent ref={forwardedRef} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <refButtonHOC {...props} forwardedRef={ref}/>;
    });
};
