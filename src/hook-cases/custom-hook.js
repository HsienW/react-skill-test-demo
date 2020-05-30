import React, {useState, useEffect} from 'react';
import {fakeApiOne, fakeApiTwo} from '../utils/fake-api';

const useToken = (request) => {
    const [userToken, setCurrentToken] = useState(null);

    useEffect(() => {
        function handleTokenChange(status) {
            console.log(status);
            setCurrentToken(status.userToken);
        }

        fakeApiOne(request, handleTokenChange);
        return () => {
            fakeApiTwo(request, handleTokenChange);
        };
    });

    return userToken;
};

const CustomHookCase = () => {
    const request = {user: '123', passWord: '456'};
    const isGetToken = useToken(request);

    if (isGetToken === null) {
        return 'Loading...';
    }
    return (
        <div>Get Token Success - Custom Hook Case </div>
    );
};

export default CustomHookCase;

