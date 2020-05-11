import React from 'react';
import PropTypes from 'prop-types';

// Child Components
import ContainerLeft from './Containers/ContainerLeft';
import ContainerRight from './Containers/ContainerRight';
import Review from './childComponents/Review';
import ReviewSlider from './childComponents/ReviewSlider';

// CSS styling
import ReviewModalCSS from '../../style/ReviewModal.css';

// AWS links' data
import awsS3Links from '../../../../AmazonS3Links';
// Destructure baseurl from AWS links
const { awsBaseUrl } = awsS3Links;

// -------------------------------------------------------------------------------------------------
const ReviewModal = (
  {
    photos, activePhotoIdx, // array of photos, and the active photoIdx
    handleImageSliderClick, showGalleryModal, // Handlers to change active image, show gallery modal
  },
) => {
  const activePhoto = photos[activePhotoIdx];

  return (
    <>
      <div className={ReviewModalCSS.container}>

        <ContainerLeft // Contains buttons on left-side of the ReviewModal component
          showGalleryModal={showGalleryModal}
          handleImageSliderClick={handleImageSliderClick}
        />

        {/* Primary content of the page: current image */}
        <img
          className={ReviewModalCSS.image}
          alt={activePhoto.alt}
          src={`${awsBaseUrl}/${activePhoto.link}`}
        />

        <ContainerRight // Contains information / buttons on right-side of the ReviewModal component
          activePhotoIdx={activePhotoIdx}
          photos={photos}
          handleImageSliderClick={handleImageSliderClick}
        />

        {/* Displays relevant information about the review associated with this phot */}
        <div className={ReviewModalCSS.reviewComponent}>
          <Review photos={photos} activePhotoIdx={activePhotoIdx} />
        </div>

        <ReviewSlider photos={photos} activePhotoIdx={activePhotoIdx} />
      </div>
    </>
  );
};

ReviewModal.defaultProps = {
  photos: [],
  activePhotoIdx: 0,
  handleImageSliderClick: () => {},
  showGalleryModal: () => {},
};

ReviewModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photos: PropTypes.array,
  activePhotoIdx: PropTypes.number,
  handleImageSliderClick: PropTypes.func,
  showGalleryModal: PropTypes.func,
};

export default ReviewModal;
