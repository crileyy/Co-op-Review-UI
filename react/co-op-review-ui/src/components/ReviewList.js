import React from 'react';
import { Review } from './Review';
import './ReviewList.css';

export const ReviewList = ({ reviews }) => {
    return <div className="Review-list">
        <ul>
        {
            reviews.map(review => {
                return <Review review={review} />;
            })
        }
        </ul>
    </div>;
};