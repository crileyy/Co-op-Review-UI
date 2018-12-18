import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
in App div: Interface to search companies
<h1>Best Co-op</h1>
        <SearchBar searchCompanies={this.searchYelp}/>
        <ReviewList reviews={reviews}/>

need interface for reading reviews, creating an account, writing review

flow:
search a company in search bar -> click on company -> see company info and all reviews

create an account button -> enter info -> hit enter

write a review button -> enter info -> hit enter

Mock reviews and companies for now
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
