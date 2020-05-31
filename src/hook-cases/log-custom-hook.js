import React, {useState, useEffect} from 'react';

const useLog = (eventTime) => {
    const [isLog] = useState(null);

    useEffect(() => {
        console.log(`The time this event occurs is ${eventTime}`);
    }, [eventTime, isLog]);

    return isLog;
};

const LogCustomHookCase = () => {
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

export default LogCustomHookCase;

