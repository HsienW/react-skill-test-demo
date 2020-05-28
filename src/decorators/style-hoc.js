import React, {Component} from 'react';

export const styleHOC = (className) => (WrappedComponent) => {
    return class StyleHOC extends Component {
        render() {
            const {title} = {...this.props};
            return (
                <React.Fragment>
                    <div className={className}>{title}</div>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            );
        }
    };
};
