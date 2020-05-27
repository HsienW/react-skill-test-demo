import React from 'react';

export const ProxyHOC = (displayTitle) => (WrappedComponent) => {
    return class proxyHOC extends React.Component {
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

// export const InheritHOC = () => {
//     return class inheritHOC extends React.Component {
//         render() {
//             return super.render();
//         }
//     };
// };
