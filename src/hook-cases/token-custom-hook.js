import React, {useState, useEffect} from 'react';
import {fakeApiOne} from '../utils/fake-api';

const useToken = (request) => {
    const [userToken, setNewToken] = useState(null);

    useEffect(() => {
        fakeApiOne(request).then((respond) => {
            setNewToken(respond);
        });
    }, [request]);

    return userToken;
};

export const TokenCustomHookCase = () => {
    const request = {user: '123', passWord: '456'};
    const isGetToken = useToken(request);

    if (isGetToken === null) {
        return 'Loading...';
    }
    return (
        <div>Get Token Success - Custom Hook Case </div>
    );
};
