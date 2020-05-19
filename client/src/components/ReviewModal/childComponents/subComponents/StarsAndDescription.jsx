import React from 'react';
import PropTypes from 'prop-types';
import ReviewCSS from '../../../../style/Review.css';
import Stars from './Stars';

const StarsAndDescription = ({ stars, description, handleReadReviewClick }) => (
  <>
    <div className={ReviewCSS.starsAndDescriptionContainer}>
      <Stars stars={stars} />
      <div className={ReviewCSS.descriptionShort}>
        {`${description.slice(0, 150)}...`}
      </div>
    </div>
    <button onClick={handleReadReviewClick} className={ReviewCSS.readReviewButton} type="button">Read Review</button>
  </>
);

StarsAndDescription.defaultProps = {
  stars: 0,
  description: '',
  handleReadReviewClick: () => {},
};
StarsAndDescription.propTypes = {
  stars: PropTypes.number,
  description: PropTypes.string,
  handleReadReviewClick: PropTypes.func,
};


export default StarsAndDescription;
