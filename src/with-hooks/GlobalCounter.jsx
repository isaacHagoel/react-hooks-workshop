import React from 'react';
import {useWindowEventCounter} from './useWindowEventCounter';

export function GlobalCounter(props) {
    const mouseDownCounter = useWindowEventCounter("mousedown");
    const keyDownCounter = useWindowEventCounter("keydown");
    console.log('rendering GlobalCounter');
    return (
        <React.Fragment>
            <p>Total mouse-downs anywhere: <em>{mouseDownCounter}</em></p>
            <p>Total key-downs anywhere: <em>{keyDownCounter}</em></p>
        </React.Fragment>
    );
}
