import React, {Component} from "react";

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }


    // updateNumber1(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    updateNumber1(val){
        this.setState({
            number1: parseInt(val, 10)
        })
    }
    
    // updateNumber2(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    updateNumber2(val){
        this.setState({
            number2: parseInt(val, 10)
        })
    }

    addNumbers = (num1, num2) => {
        const newSum = num1 + num2;
        this.setState({
            sum: newSum
        })
    }
    //How would I clear the input boxes after clicking sum? this.setState didn't work.

    render() {
        const {number1, number2, sum} = this.state;
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={(e) => this.updateNumber1(e.target.value)} className='inputLine'></input>
                <input onChange={(e) => this.updateNumber2(e.target.value)} className='inputLine'></input>
                <button onClick={() => this.addNumbers(number1, number2)} className='confirmationButton'>Add</button>
                <span className='resultsBox'>Sum: {sum}</span>
            </div>
            )
    }
}

export default Sum;