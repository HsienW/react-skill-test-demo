import React, {Component} from 'react';

export const StyleHOC = (className) => (WrappedComponent) => {
    return class styleHOC extends Component {
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
