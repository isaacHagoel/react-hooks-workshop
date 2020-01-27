import React from 'react';

export class BtCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {sum: 0};
        console.log('constructed BtCounter');
    }
    render() {
        console.log('rendering BtCounter');
        const {sum} = this.state;
        return (
            <React.Fragment>
                <p>We are at: <em>{sum}</em></p>
                <button type='button' onClick={e => this.setState({sum: (sum + 1)})}> + </button>
                <button type='button' onClick={e => this.setState({sum: (sum - 1)})}> - </button>
            </React.Fragment>
        );
    }
}
