import React, {useState, useEffect, useRef} from 'react';

const useLog = (eventTime) => {
    const [isLog] = useState(null);

    useEffect(() => {
        console.log(`The time this event occurs is ${eventTime}`);
    }, [eventTime, isLog]);

    return isLog;
};

export const LogCustomHookCase = () => {
    const [triggerTime, setTriggerTime] = useState(null);
    useLog(triggerTime);

    const trigger = () => {
        console.log('trigger success');
        setTriggerTime(new Date());
    };

    return (
        <React.Fragment>
            <div>Log Custom Hook Case</div>
            <button onClick={trigger}>Trigger event & Log</button>
            <div>{triggerTime ? `current log time is ${triggerTime}` : 'current is not have triggered'}</div>
        </React.Fragment>
    );
};

// 是否為第一次 load
const useInitLog = (props) => {
    const init = useRef(true);
    useEffect(() => {
        if (init.current) {
            init.current = false;
            console.log('this time is initial');
        } else {
            console.log('not is initial');
        }
    }, [props]);
};

export const InitCustomHookCase = (props) => {
    // const handleLog = () => {
    //     console.log('not is initial');
    // };

    useInitLog(props);
    return (
        <div>Init Custom Hook Case</div>
    );
};


