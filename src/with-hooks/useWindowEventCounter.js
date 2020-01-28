import {useState, useEffect} from 'react';

export function useWindowEventCounter(eventName, isActive = true) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter => counter + 1);
    }
    useEffect(() => {
        if (isActive) {
            console.log(`running the use effect callback for ${eventName}`);
            document.addEventListener(eventName, increment);
        }
        return () => {
            if (isActive) {
                console.log(`running the effect cleanup for ${eventName}`);
                document.removeEventListener(eventName, increment);
            }
        };
    }, [eventName, isActive]);
    return counter;
}
