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

        this.handleChange = this.handleChange.bind(this)
        
    }


    
    handleChange(value) {
        this.setState({
            userInput: value
        })
       
    }
//How do I change this for loop into a .map or something??

    updateFilteredArray = (prop) => {
        let books = this.state.books
        // let filteredArray = books.map((prop, i) => {
        //     if(books[i].hasOwnProperty(prop)) {
        //         filteredArray.push(books[i]);
        //     }
        // })
        let filteredArray = [];

        for(let i = 0; i < books.length; i++) {
            if (books[i].hasOwnProperty(prop)) {
                filteredArray.push(books[i])
            }
        }
        this.setState({
            filteredArray: filteredArray
        })
        this.setState({
            userInput: ""
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" >Original: { JSON.stringify(this.state.books)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} placeholder="Enter Text Here"/>
                <button className="confirmationButton" onClick={() => this.updateFilteredArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectPB">Filtered: { JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;






















