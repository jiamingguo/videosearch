import React, {Component} from 'react';

/*
const SearchBar = () =>{
    return <input />
};
*/

class SearchBar extends Component {
    constructor (props) {
        super(props);

        // ONLY CLASS Has state, functional based doesn't have
        // This is how to initialize a state
        // every time a state is changed, react will re-render it and its children
        // in the state object, we define the term that we want to track, here is "term"
        // say, for here, when user typed something in the input bar, term will get updated.
        // We want to update term as the value user typed in
        this.state = { term: '' };
    }

    // every class that extends react.component need to override this render method
    render() {
        /*
        return <input onChange={this.onInputChange} />;
        also can do
        return <input onChange={(event) => console.log(event.target.value)} />;
        */
        return (
            <div>
                <input onChange={this.onInputChange} />
                <br />
                <input onChange={(event) => this.setState({term : event.target.value})} />
                Value of the input from state : {this.state.term}
            </div>
        );

    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}


// remember to export for other files to import
export default SearchBar;