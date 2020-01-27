import React from 'react';

export class GlobalCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
        console.log('constructed GlobalCounter');
    }
    increment() {
        this.setState({count: this.state.count +1});
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.increment);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.increment);
    }

    render() {
        console.log('rendering GlobalCounter');
        return (
            <p>Total mouse-downs anywhere: <em>{this.state.count}</em></p>
        );
    }
}
