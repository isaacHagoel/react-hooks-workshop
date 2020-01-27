import React, {useState} from 'react';

/**
 * What if we wanted to stay only with the render function (a-la a functional component) but still have state?
 * The only reason it is still a class is that we can't use 'forceUpdate' on a functional component (but React can :))
 */
export function BtCounter(props) {
    console.log('rendering BtCounter');
    const [sum, setSum] = useState(0);
    // Notice the force updates. Can react do it under the hood whenever 'setSum' is called ??
    return (
        <React.Fragment>
            <p>We are at: <em>{sum}</em></p>
            <button type='button' onClick={e => setSum(sum + 1)}> +</button>
            <button type='button' onClick={e => setSum(oldSum => oldSum - 1)}> -</button>
        </React.Fragment>
    );
}


////////// Don't read below until you fully understand the example above ///////////////
export function BtCounterMulti(props) {
    console.log('rendering BtCounterMulti');
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(100);
    const [sum3, setSum3] = useState(1000);
    return (
        <React.Fragment>
            <p>Sum1 is at: <em>{sum1}</em></p>
            <button type='button' onClick={e => setSum1(sum1 + 1)}> +</button>
            <button type='button' onClick={e => setSum1(oldSum1 => oldSum1 - 1)}> -</button>
            <hr/>
            <p>Sum2 is at: <em>{sum2}</em></p>
            <button type='button' onClick={e => setSum2(sum2 + 1)}> +</button>
            <button type='button' onClick={e => setSum2(oldSum2 => oldSum2 - 1)}> -</button>
            <hr />
            <p>Sum3 is at: <em>{sum3}</em></p>
            <button type='button' onClick={e => setSum3(sum3 + 1)}> +</button>
            <button type='button' onClick={e => setSum3(oldSum3 => oldSum3 - 1)}> -</button>
        </React.Fragment>
    );
}
