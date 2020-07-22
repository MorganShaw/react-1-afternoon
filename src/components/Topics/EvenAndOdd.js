import React, {Component} from "react";

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(e){
        console.log("EVENT OBJECT", e.target.value);
        this.setState({ userInput: e.target.value });
       }
    
    assignEvenAndOdds(userInput){
        let arr1 = userInput.split('').filter((elem) => {
            return elem % 2 === 0;
        })
        let arr2 = userInput.split('').filter((elem) => {
            return elem % 2 !== 0;
        })

        this.setState({
            evenArray: arr1,
            oddArray: arr2
        })
    }
        
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e)}/>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
                
    
                
            </div>
        )
    }
}

export default EvenAndOdd;

//What's JSON.stringify? This is not a necessary addition, but without it your array would not display as [1,2,3,4] but rather 1234. JSON.stringify gives our display a more readable format. You could just do this.state.evenArray or this.state.oddArray if you want to.

