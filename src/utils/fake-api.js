export const fakeObjApi = (request) => {
    console.log(request);
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

export const fakeArrayApi = (request) => {
    console.log(request);
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: '123'
                    },
                    {
                        id: 2,
                        name: '456'
                    },
                ]);
            }, 500);
        } else {
            reject([]);
        }
    });
};

