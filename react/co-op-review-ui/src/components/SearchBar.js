import React, { useState } from 'react';
import './SearchBar.css';

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
  
  const reviewsTest = [
    review,
    review,
    review,
    review,
    review,
    review,
  ]

export const SearchBar = ({ updateReviews }) => {

    const [ search, setSearch ] = useState('');

    const change = (e) => {
        setSearch(e.target.value);
        // search for reviews based on e
        updateReviews(reviewsTest);
    };

    return <div className="SearchBar">
        <form>
            <div className="SearchBar-fields">
                <input onChange={change} value={search} placeholder="Search" />
            </div>
        </form>
    </div>;
};