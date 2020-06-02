import React, {Component} from 'react';
import {fakeUserArrayApi, fakeTodoArrayApi} from '../utils/fake-api';

class FetchDataWrapper extends Component {
    state = {
        isLoading: true,
        error: null,
        list: []
    };

    fetchData() {
        const {requestObj, renderApi} = {...this.props};
        renderApi(requestObj)
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
                requestObj={{
                    url: 'https://test',
                    token: '12345678'
                }}
                renderApi={fakeUserArrayApi}
                render={({list, isLoading, error}) => (
                    <React.Fragment>
                        <h2>Fetch Data Props Case</h2>
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

const UserList = (props) => {
    const {title, requestObj} = {...props};
    return (
        <FetchDataWrapper
            requestObj={requestObj}
            renderApi={fakeUserArrayApi}
            render={({list, isLoading, error}) => (
                <React.Fragment>
                    {
                        <h2>{title}</h2>
                    }
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
};

const TodoList = (props) => {
    const {title, requestObj} = {...props};
    return (
        <FetchDataWrapper
            requestObj={requestObj}
            renderApi={fakeTodoArrayApi}
            render={({list, isLoading, error}) => (
                <React.Fragment>
                    {
                        <h2>{title}</h2>
                    }
                    {
                        error ? <p>{error.message}</p> : null
                    }
                    {
                        isLoading
                            ? <h2>Loading...</h2>
                            : <ul>{list.map(item => <li key={item.id}>{item.todoItem}</li>)}</ul>
                    }
                </React.Fragment>
            )}
        />
    );
};

export const MultipleFetchDataPropsCase = () => {
    return (
        <React.Fragment>
            <UserList
                title={'User List'}
                requestObj={{url: 'https://test', token: '12345678'}}
            />
            <TodoList
                title={'Todo List'}
                requestObj={{url: 'https://test', token: '12345678'}}
            />
        </React.Fragment>
    );
};
