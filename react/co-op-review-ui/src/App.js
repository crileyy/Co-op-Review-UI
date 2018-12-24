import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewList from './components/Review/ReviewList/ReviewList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

const review = {
  company: 'Random Company',
  reviewText: 'review text',
  rating: 5,
  position: 'Software Engineer Co-op',
  companyLocation: {
    city: 'San Francisco',
    state: 'California',
    country: 'United States'
  },
  numInterviews: 3,
  returnOffer: true,
  wouldWorkAgain: true,
  user: {
    username: 'criley',
    firstname: 'Colin',
    lastname: 'Riley',
    year: 3,
    email: 'test@husky.neu.edu',
    numCoops: 3
  }
}

const reviews = [
  review,
  review,
  review,
  review,
  review,
  review,
]

/*
in App div: Interface to search companies
<h1>Best Co-op</h1>
        <SearchBar searchCompanies={this.searchYelp}/>
        <ReviewList reviews={reviews}/>

need interface for reading reviews, creating an account, writing review

flow:
search a company in search bar -> click on company -> see company info and all reviews
or
search a company in search bar -> see all reviews for that company on same page

create an account button -> enter info -> hit enter

write a review button -> enter info -> hit enter

Mock reviews and companies for now

TODO: Reformat the info inside a single review, add search bar
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">Best Co-op</header>
        <h1>Northeastern Co-op Reviews</h1>
        <h2>Find the job that fits your co-op cycle</h2>
        <SearchBar />
        <ReviewList reviews={reviews}/>
      </div>
    );
  }
}

export default App;
