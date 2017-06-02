import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// give the path to import files. Don't need to do that for libraries sicne they are namespaces
// files are different, have to specify relative path
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDr7ynlNGEQMaD1bVk6f9LD82zIs974CCI";

// pass a call-back function
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {console.log(data)});

/*
Create a new component, This component should produce some HTML
 */
// Remember: React is the package that used JavaScript to generate HTML for user.


// const is ES6 syntax. Like var, declare a variable.
// However, the variable declared with const won't change (kind of immutable?)

/*
const App = function(){

    // We have somethings looks like inside HTML at here. But they are javascript.
    // These inside HTML, we referred as JSX. JSX is a subset or dialect of JavaScript
    return <div>Hi!</div>;
}
*/

// Below works the same as above code. But in ES6 syntax
/*
const App = () => {
    return(
        <div>
            Hello World
            <br />
            <br />
            <SearchBar />
        </div>
    );

}
*/

// And instantiate of the component(cosnt App, we already had the 'class' but no object) before pass to React.createElement
// by making this <App/>

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch(
            { key: API_KEY, term: 'surfboards'}, (data) => {
                this.setState({videos: data});
                console.log(data);
            }
        );
        // es6 syntax: when key and value names are the same, can use a simple condensed way to update value
        // so above the setState part could also be:
        // YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) {this.setState({videos})});
    }

    render(){
        return(
            <div>
                <SearchBar />
            </div>
        );
    }
}



// Take this component's generated HTML and put it on the page (in the DOM)
// Remember to IMPORT React (core react) and ReactDOM (used to place html on webpage)
// ReactDOM takes second argument for position to place HTML. Here we put it in div that class = 'container'
ReactDOM.render(<App />, document.querySelector('.container'));