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
            <div>
                {render({
                    increment: this.increment,
                    decrement: this.decrement,
                    count: count
                })}
            </div>
        );
    }
}

export class CounterPropsCase extends React.Component {
    render() {
        return (
            <CounterWrapper
                render={({increment, decrement, count}) => (
                    <div>
                        <div>
                            <h3>Render Props Counter</h3>
                        </div>
                        <div>
                            <p>{count}</p>
                            <button onClick={() => increment()}>Increment</button>
                            <button onClick={() => decrement()}>Decrement</button>
                        </div>
                    </div>
                )}
            />
        );
    }
}
