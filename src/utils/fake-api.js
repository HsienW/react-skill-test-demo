export const fakeApiOne = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve({
                    token: '123456789'
                });
            }, 500);
        } else {
            reject([]);
        }
    });
};

export const fakeApiTwo = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve({
                    message: 'sign out done'
                });
            }, 500);
        } else {
            reject([]);
        }
    });
};

