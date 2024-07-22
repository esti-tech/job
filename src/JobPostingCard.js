// JobPostingCard.js
import React from 'react';
import styles from './JobPostingCard.module.css';

const JobPostingCard = ({ title, datePosted, applicantCount }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>Date Posted: {datePosted}</p>
            <p>Applicants: {applicantCount}</p>
        </div>
    );
};

export default JobPostingCard;
