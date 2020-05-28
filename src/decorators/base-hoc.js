import React, {Component} from 'react';

export const proxyHOC = (displayTitle) => (WrappedComponent) => {
    return class ProxyHOC extends Component {
        render() {
            return (
                <React.Fragment>
                    <div>{displayTitle}</div>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            );
        }
    };
};

export const inheritHOC = (WrappedComponent) => {
    return class InheritHOC extends WrappedComponent {
        render() {
            return (
                <React.Fragment>
                    {super.render()}
                </React.Fragment>
            );
        }
    };
};
