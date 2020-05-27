import React from 'react';
// import PropTypes from 'prop-types';
import {ProxyHOC} from '../decorators';

@ProxyHOC('Hello Title')
export class SimpleProxy extends React.Component {
    render() {
        return (
            <div>Proxy Simple Case</div>
        );
    }
}

// SimpleProxy.propTypes = {
//     // accessibility: PropTypes.bool,
// };
//
// @InheritHOC()
// export class SimpleInherit extends React.Component {
//     render() {
//         return (
//             <div>Inherit Simple Case</div>
//         );
//     }
// }
