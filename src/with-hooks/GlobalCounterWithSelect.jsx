import React, {useState} from 'react';
import {useWindowEventCounter} from './useWindowEventCounter';

const events = ["keydown", "mousedown"];

export function GlobalCounterWithSelect(props) {
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    let counters = {};
    // NOTICE THE DISABLING OF RULES OF HOOKS IN THIS CASE BECAUSE WE KNOW THAT THE LOOP HAS CONSISTENT ORDER AND NO CONDITIONALS
    // eslint-disable-next-line react-hooks/rules-of-hooks
    events.forEach(event => counters[event] = useWindowEventCounter(event, event === selectedEvent));
    console.log('rendering GlobalCounterWithSelect');
    return (
        <React.Fragment>
            <label htmlFor='eventNameSelector'>Select window event to listen to: </label>
            <select id='eventNameSelector' value={selectedEvent} onChange={e => setSelectedEvent(e.target.value)}>
                {events.map(event => <option value={event} key={event}>{event}</option>)}
            </select>
            <p>Total {selectedEvent} anywhere while it was selected: <em>{counters[selectedEvent]}</em></p>
        </React.Fragment>
    );
}
