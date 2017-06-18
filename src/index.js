import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// Take this component's generated HTML and put it on the page (in the DOM)
// Remember to IMPORT React (core react) and ReactDOM (used to place html on webpage)
// ReactDOM takes second argument for position to place HTML. Here we put it in div that class = 'container'
ReactDOM.render(<App />, document.querySelector('.container'));