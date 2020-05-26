import React from 'react';

const HocContainer = (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            };
        };

        render() {
            return <WrappedComponent {...this.props} />
        }
    };

@HocContainer
export class Main extends React.Component {
    render() {
        return <div>I'm Main</div>
    }
}

