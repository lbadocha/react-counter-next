import React, {Component} from 'react';
import ButtonsPanel from './ButtonsPanel';
import Display from './Display';



class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
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
    

    render() {
    
        return (
            <div className="counter">
                <Display count={this.state.counterValue} />
                <ButtonsPanel changeValueMethod={this.changeValue} />
            </div>
        );
    }
}

export default Counter;


//button.addEventListener('click', changeValue)