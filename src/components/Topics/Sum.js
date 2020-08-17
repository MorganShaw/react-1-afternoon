import React, {Component} from "react";

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: '',
            number2: '',
            sum: null
        }
    }

    handleChange = (e) => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
//This one works as a universal change handler (if you pass in e.target.name and e.target.value when the function is invoked in the onChange on the input tag):
    // handleChange = (value, name) => {
    //     console.log(value, name);
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // FROM SOLUTION CODE - two functions to update number1 and number2 separately:
    // updateNumber1(val){
    //     this.setState({
    //         number1: parseInt(val, 10)
    //     })
    // }
    
    // updateNumber2(val){
    //     this.setState({
    //         number2: parseInt(val, 10)
    //     })
    // }

    addNumbers = (num1, num2) => {
        const newSum = +num1 + (+num2);
        this.setState({
            sum: newSum,
            number1: '',
            number2: ''
        })
    }
    //How would I clear the input boxes after clicking sum? this.setState didn't work.

    render() {
        const {number1, number2, sum} = this.state;
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input name='number1' value={number1} onChange={(e) => this.handleChange(e)} className='inputLine'></input>
                <input name='number2' value={number2} onChange={(e) => this.handleChange(e)} className='inputLine'></input>
                <button onClick={() => this.addNumbers(number1, number2)} className='confirmationButton'>Add</button>
                <span className='resultsBox'>Sum: {sum}</span>
            </div>
            )
    }
}

export default Sum;