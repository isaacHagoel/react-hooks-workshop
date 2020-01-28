import React, {useState, useEffect} from 'react';

export function GlobalCounter(props) {
    const [counter, setCounter] = useState(0);
    function increment() {
        // what if we use setCounter(counter + 1)? how does it relate to the deps array we pass into the effect?
        setCounter(counter => counter + 1);
    }
    useEffect(() => {
        console.log('running the use effect callback');
        document.addEventListener("mousedown", increment);
        return () => {
            console.log("running the effect cleanup");
            document.removeEventListener("mousedown", increment)
        }; //what happens if we remove the empty deps array?
    }, []);

    console.log('rendering GlobalCounter');
    return (
        <p>Total mouse-downs anywhere: <em>{counter}</em></p>
    );
}
