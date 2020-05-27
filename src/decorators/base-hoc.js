import React, {Component} from 'react';

export const ProxyHOC = (displayTitle) => (WrappedComponent) => {
    return class proxyHOC extends Component {
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

export const InheritHOC = (WrappedComponent) => {
    return class inheritHOC extends WrappedComponent {
        render() {
            return (
                <React.Fragment>
                    {super.render()}
                </React.Fragment>
            );
        }
    };
};
