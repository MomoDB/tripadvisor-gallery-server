import React from 'react';
import PropTypes from 'prop-types';

import ReviewCSS from '../../../../style/Review.css';

const Emblem = ({ firstLetter, user }) => (
  <>
    <div className={ReviewCSS.emblem}>
      <span className={ReviewCSS.emblemLetter}>
        {firstLetter}
      </span>
    </div>

    <div className={ReviewCSS.username}>
      {user}
    </div>
  </>
);

Emblem.defaultProps = {
  firstLetter: '',
  user: '',
};
Emblem.propTypes = {
  firstLetter: PropTypes.string,
  user: PropTypes.string,
};

export default Emblem;
