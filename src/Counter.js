import React, {Component} from 'react';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Display from './Display';



class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            displayClock: true
        }
    }

    changeValue = (action) => {
      
        switch(action) {
            case 'add':
                this.setState(prevState=>{
                    return({counterValue: prevState.counterValue + 1});
                })
                break;
                
            case 'init':
                this.setState({counterValue: this.props.initValue});
                break;

            case 'reset':
                this.setState({counterValue: 0});
                break;
        }

    }

    changeDisplayClock = (displayBoolean) => {
        this.setState({displayClock: displayBoolean})
    }    
    

    render() {

        let clockElement =  null;

        if(this.state.displayClock) {
            clockElement = <Clock methodDisplayClock={this.changeDisplayClock} />;
        } else {
            clockElement = <h5 className="show-clock" onClick={()=>this.changeDisplayClock(true)}>Pokaż zegar</h5>;
        }

        return (
            <div className="counter">
                <Display count={this.state.counterValue} />
                <ButtonsPanel changeValueMethod={this.changeValue} />
                {clockElement}
            </div>
        );
    }
}

export default Counter;


//button.addEventListener('click', changeValue)