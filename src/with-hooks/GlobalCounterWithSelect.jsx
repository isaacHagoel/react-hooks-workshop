import React, {useState} from 'react';
import {useWindowEventCounter} from './useWindowEventCounter';

const events = ["keydown", "mousedown"];
// TODO - this is actually a failed attempt that doesn't compile because hooks are not allowed in a loop, can it be made to work? :), notice that the second param (isActive) and its logic, needs to be added to the custom hook in order for this to be logically valid
export function GlobalCounterWithSelect(props) {
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    let counters = {};
    for (const event of events) {
        counters[event] = useWindowEventCounter(event, event === selectedEvent)
    }
    console.log('rendering GlobalCounterWithSelect');
    return (
        <React.Fragment>
            <select value={selectedEvent} onChange={e => setSelectedEvent(e.target.value)}>
                {events.map(event => <option value={event} key={event}>{event}</option>)}
            </select>
            <p>Total {selectedEvent} anywhere: <em>{counters[selectedEvent]}</em></p>
        </React.Fragment>
    );
}
