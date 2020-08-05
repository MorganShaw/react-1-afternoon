import React, {Component} from "react";

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            songs: ["Happy Birthday", "It's a Small World", "Getting to Know You", "The Reason", "Oklahoma!"],
            userInput: "",
            filteredSongs: []
        }
    }

    handleInput = (value) => {
        this.setState({
            userInput: value
        })
    }

    filterSongs = (userInput) => {
        let songs = this.state.songs;
        let filteredSongs = [];

        for (let i = 0; i < songs.length; i++) {
            if(songs[i].includes(userInput)){
                filteredSongs.push(songs[i]);
            }
        }
        
        this.setState({
            filteredSongs: filteredSongs
        })
        // this.setState({
        //     userInput: ""
        // })
    }

    render() {

        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Songs: {JSON.stringify(this.state.songs, null, 10)}</span>
                <input onChange={(e) => this.handleInput(e.target.value)} className="inputLine"/>
                <button onClick={() => this.filterSongs(this.state.userInput)} className="confirmationButton">Filter</button>
                <span className="resultsBox filterStringRB">Filtered Songs: {JSON.stringify(this.state.filteredSongs, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;


//Can I do the span this way (below)? It gave me a ton of errors, so I went with the solution code.
{/* <span className="puzzleText">Songs: {let mappedUnfiltered = songs.map((song) => {
    return <p>{song}</p>
})} </span> */}


//Tried the following to do a map instead of a for loop. Couldn't get it to work.
// let filteredSongs = songs.map((userInput, i) => {
//     if(songs[i].includes(userInput)) {
//         filteredSongs.push(songs[i])
//    }
// })