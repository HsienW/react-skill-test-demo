import React, {Component} from 'react';

class CounterWrapper extends Component {
    state = {
        count: 0
    };

    // Increase count
    increment = () => {
        const {count} = this.state;
        return this.setState({count: count + 1});
    };

    // Decrease count
    decrement = () => {
        const {count} = this.state;
        return this.setState({count: count - 1});
    };

    render() {
        const {count} = this.state;
        const {render} = {...this.props};

        return (
            <React.Fragment>
                {render({
                    increment: this.increment,
                    decrement: this.decrement,
                    count: count
                })}
            </React.Fragment>
        );
    }
}

export class CounterPropsCase extends Component {
    render() {
        return (
            <CounterWrapper
                render={({increment, decrement, count}) => (
                    <React.Fragment>
                        <h3>Render Props Counter</h3>
                        <div>
                            <p>{count}</p>
                            <button onClick={() => increment()}>Increment</button>
                            <button onClick={() => decrement()}>Decrement</button>
                        </div>
                    </React.Fragment>
                )}
            />
        );
    }
}
