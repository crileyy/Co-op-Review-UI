import React, { useState } from 'react';
import './App.css';
import {ReviewList} from './components/ReviewList.js';
import {SearchBar} from './components/SearchBar.js';

/*
search bar returns reviews of the words searched
SearchBar -> App (keeps state for list of reviews) -> ReviewList
*/
export const App = () => {

  const [reviews, setReviews] = useState([]);

  const updateReviews = (newReviews) => {
    setReviews(newReviews);
  }

  return <div className="App">
    <header className="Header">Best Co-op</header>
    <h1>Northeastern Co-op Reviews</h1>
    <h3>Find the job that fits your co-op cycle</h3>
    <SearchBar updateReviews={updateReviews}/>
    <ReviewList reviews={reviews} />
  </div>;
};