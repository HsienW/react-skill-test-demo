export const fakeApi = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve({
                    token: '123456789'
                });
            }, 1000);
        } else {
            reject([]);
        }
    });
};
