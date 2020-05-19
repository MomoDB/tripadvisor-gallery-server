import React from 'react';
import PropTypes from 'prop-types';

import GalleryModalPictureCSS from '../../../style/GalleryModalPicture.css';
import awsS3Links from '../../../../../AmazonS3Links';

const { awsBaseUrl } = awsS3Links;

const GalleryModalPicture = ({ photo, showReviewModal, id }) => (
  // *Accessibility feature to add: keypress for view reviewModal
  <>
    <div className={GalleryModalPictureCSS.container}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt={photo.alt}
        src={`${awsBaseUrl}/${photo.link}`}
        onClick={showReviewModal}
        id={id}
        className={GalleryModalPictureCSS.photoStyling}
        onKeyPress={() => {}}
      />
    </div>
  </>
);

GalleryModalPicture.defaultProps = {
  photo: {},
  showReviewModal: () => {},
  id: 0,
};

GalleryModalPicture.propTypes = {
  photo: PropTypes.object.isRequired,
  showReviewModal: PropTypes.func,
  id: PropTypes.number,
};


export default GalleryModalPicture;