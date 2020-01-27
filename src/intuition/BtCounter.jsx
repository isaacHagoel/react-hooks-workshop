import React from 'react';
import {MyReact} from './myHooks';

/**
 * What if we wanted to stay only with the render function (a-la a functional component) but still have state?
 * The only reason it is still a class is that we can't use 'forceUpdate' on a functional component
 */
export class BtCounter extends React.Component {
    render() {
        console.log('rendering BtCounter');
        const [sum, setSum] = MyReact.useSingleState(0);
        // Notice the force updates. Can react do it under the hood whenever 'setSum' is called ??
        return (
            <React.Fragment>
                <p>We are at: <em>{sum}</em></p>
                <button type='button' onClick={e => {setSum(sum + 1); this.forceUpdate()}}> +</button>
                <button type='button' onClick={e => {setSum(oldSum => oldSum - 1); this.forceUpdate()}}> -</button>
            </React.Fragment>
        );
    }
}


////////// Don't read below until you fully understand the example above ///////////////
export class BtCounterMulti extends React.Component {
    render() {
        console.log('rendering BtCounterMulti');
        const [sum1, setSum1] = MyReact.useState(0);
        const [sum2, setSum2] = MyReact.useState(100);
        const [sum3, setSum3] = MyReact.useState(1000);
        // Can react do this reset under the hood?
        MyReact.resetIdx();
        return (
            <React.Fragment>
                <p>Sum1 is at: <em>{sum1}</em></p>
                <button type='button' onClick={e => {setSum1(sum1 + 1); this.forceUpdate()}}> +</button>
                <button type='button' onClick={e => {setSum1(oldSum1 => oldSum1 - 1); this.forceUpdate()}}> -</button>
                <hr/>
                <p>Sum2 is at: <em>{sum2}</em></p>
                <button type='button' onClick={e => {setSum2(sum2 + 1); this.forceUpdate()}}> +</button>
                <button type='button' onClick={e => {setSum2(oldSum2 => oldSum2 - 1); this.forceUpdate()}}> -</button>
                <hr />
                <p>Sum3 is at: <em>{sum3}</em></p>
                <button type='button' onClick={e => {setSum3(sum3 + 1); this.forceUpdate()}}> +</button>
                <button type='button' onClick={e => {setSum3(oldSum3 => oldSum3 - 1); this.forceUpdate()}}> -</button>
            </React.Fragment>
        );
    }
}
