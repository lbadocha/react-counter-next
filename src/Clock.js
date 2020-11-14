import React, {Component} from 'react';

import './Clock.css';

class Clock extends Component {

    constructor() {
        super();

        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {

        this.timer = setInterval(()=>{
            this.setState({date: new Date().toLocaleTimeString()})
        }, 1000);

        console.log('Komponent Clock.js zamontowany');
    }

    componentDidUpdate() {
        console.log('aktualziacja komponentu co sekundę');
    }

    componentWillUnmount() {
        console.log('demontujemy komponent Clock.js');
        clearInterval(this.timer);
    }

    render() {
        console.log(this.props);
        return <h5 className="clock">Time: {this.state.date} <span onClick={()=>this.props.methodDisplayClock(false)}>x</span></h5>;
    }
}

export default Clock;