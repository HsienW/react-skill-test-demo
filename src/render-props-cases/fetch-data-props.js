import React, {Component} from 'react';
import {fakeArrayApi} from '../utils/fake-api';

class FetchDataWrapper extends Component {
    state = {
        isLoading: true,
        error: null,
        list: []
    };

    fetchData() {
        const {requestURL} = {...this.props};
        fakeArrayApi(requestURL)
            .then((response) => {
                this.setState({
                    list: response,
                    isLoading: false
                });
            })
            .catch((error) => {
                this.setState({
                    error: error,
                    isLoading: false
                });
            });
    }

    componentDidMount() {
        this.setState({isLoading: true}, this.fetchData);
    }

    render() {
        const {render} = {...this.props};
        return (
            render(this.state)
        );
    }
}

export class FetchDataPropsCase extends Component {
    render() {
        return (
            <FetchDataWrapper
                requestURL="https://test"
                render={({list, isLoading, error}) => (
                    <React.Fragment>
                        <h2>Random Users</h2>
                        {
                            error ? <p>{error.message}</p> : null
                        }
                        {
                            isLoading
                                ? <h2>Loading...</h2>
                                : <ul>{list.map(item => <li key={item.id}>{item.name}</li>)}</ul>
                        }
                    </React.Fragment>
                )}
            />
        );
    }
}
