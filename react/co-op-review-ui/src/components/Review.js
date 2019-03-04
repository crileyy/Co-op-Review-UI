import React from 'react';
import './Review.css';

export const Review = ({ review }) => {

    return <li>
        <div className="Review">
        <div className="Review-header">
            <span className="Company-name">{review.company}</span>
            <span className="Position">{review.position}</span>
            <span className="Rating">Rating: {review.rating}</span>
        </div>
        <div className="Company-information">
            <div className="Company-location">
                <p>{review.companyLocation.city}</p>
                <p>{review.companyLocation.state}</p>
                <p>{review.companyLocation.country}</p>
            </div>
        </div>
        <div className="Review-information">
            <p>Position: {review.position}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewText}</p>
            <p>{review.numInterviews}</p>
            <p>{review.returnOffer}</p>
            <p>{review.wouldWorkAgain}</p>
        </div>
        <div className="User">
            <p>{review.user.username}</p>
        </div>
    </div>
    </li>;
};