import React from 'react';
import './Review.css';

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

class Review extends React.Component {

	render() {
		return (
			<li>
				<div className="Review">
				<div className="Review-header">
					<span className="Company-name">{this.props.review.company}</span>
					<span className="Position">{this.props.review.position}</span>
					<span className="Rating">Rating: {this.props.review.rating}</span>
				</div>
				<div className="Company-information">
					<div className="Company-location">
						<p>{this.props.review.companyLocation.city}</p>
						<p>{this.props.review.companyLocation.state}</p>
						<p>{this.props.review.companyLocation.country}</p>
					</div>
				</div>
				<div className="Review-information">
						<p>Position: {this.props.review.position}</p>
						<p>Rating: {this.props.review.rating}</p>
						<p>{this.props.review.reviewText}</p>
						<p>{this.props.review.numInterviews}</p>
						<p>{this.props.review.returnOffer}</p>
						<p>{this.props.review.wouldWorkAgain}</p>
				</div>
				<div className="User">
						<p>{this.props.review.user.username}</p>
				</div>
			</div>
			</li>
		);
	}
}

export default Review;