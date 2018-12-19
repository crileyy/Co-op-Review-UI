import React from 'react';
import './ReviewList.css';
import Review from '../Review.js';

class ReviewList extends React.Component {

	render() {
		return(
			<div className="Review-list">
      {
        this.props.reviews.map(review => {
          return <Review review={review}/>;
        })
      }
      </div>
      );
	}
}

export default ReviewList;