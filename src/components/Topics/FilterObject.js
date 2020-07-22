import React, {Component} from "react";

class FilterObject extends Component {
    constructor(){
        super();
        
        this.state = { 
            books: [
                { 
                    title: "Pride and Prejudice", 
                    author: "Jane Austen", 
                },
                {
                    title: "Man's Search for Meaning",  
                    genre: "Memoir"
                },    
                {
                    title: "Daring Greatly", 
                    author: "Brene Brown", 
                    genre: "Self-Help"
                }
            ],
            userInput: "",
            filteredArray: []
        }
        
    }



    updateFilteredArray = () => {
        // let newArr = [];
        this.setState({
            // filteredArray: event.target.value
        })
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" value={this.state.unFilteredArray}></span>
                <input className="inputLine" onChange={this.state.userInput}/>
                <button className="confirmationButton" onClick={(e) => this.state.updateFilteredArray(e)}>Filter</button>
                <span className="resultsBox filterObjectPB" value={this.state.filteredArray}></span>
            </div>
        )
    }
}

export default FilterObject;