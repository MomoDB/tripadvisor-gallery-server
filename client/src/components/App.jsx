import React from 'react';
import ImageSlider from './ImageSlider';
import Modal from './Modal';

// Helper Functions
import fetchTripAdvisorData from '../helpers/fetchTripAdvisorData';
import preloadImages from '../helpers/preloadImages';

// Event Handlers
import eventHandlers from '../helpers/handlers';

// Destructure Specific Handlers
const {
  nextImageHandler, prevImageHandler, showGalleryModalHandler,
  showReviewModalHandler, handleImageSliderClick, closeModal,
} = eventHandlers;

// Import AWS S3 Links
import awsS3Links from '../../../AmazonS3Links';
// Destrcture awsS3Links
const { awsBaseUrl } = awsS3Links;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      activePhotoIdx: 0,
      photos: [{ link: '' }],
      showGalleryModal: false,
      showReviewModal: false,
    };
    this.nextImageHandler = nextImageHandler.bind(this);
    this.prevImageHandler = prevImageHandler.bind(this);
    this.showGalleryModalHandler = showGalleryModalHandler.bind(this);
    this.showReviewModalHandler = showReviewModalHandler.bind(this);
    this.closeModal = closeModal.bind(this);
    this.handleImageSliderClick = handleImageSliderClick.bind(this);
    this.preloadImages = preloadImages;
    this.fetchTripAdvisorData = fetchTripAdvisorData;
  }

  // When the gallery component mounts,
  // 1. activity data is fetched,
  // 2. images are pre-loaded in the browser, and
  // 3. state is initialized
  componentDidMount() {
    this.fetchTripAdvisorData((err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(data.photos.rows);
        console.log(data.photos.rows[0]);
        const { activity, photos } = data;
        this.preloadImages(photos);
        this.setState({
          activePhotoIdx: 0,
          photos,
          activity,
        });
      }
    });
  }

  render() {
    // Grabs the active picture for the ImageSlider component
    const {
      activity, photos, activePhotoIdx, showGalleryModal, showReviewModal,
    } = this.state;
    const { link, alt } = photos[activePhotoIdx];
    console.log(activePhotoIdx);
    let imageStyle = {};
    if (link) {
      imageStyle = { backgroundImage: `url(${awsBaseUrl}/${link})` };
    }

    return (
      <>
        <ImageSlider
          backgroundImage={imageStyle}
          alt={alt}
          imageCount={photos.length}
          handleImageSliderClick={this.handleImageSliderClick}
        />
        {showGalleryModal || showReviewModal ? ( // Dynamically renders a modal component
          <Modal
            name={activity.name}
            location={activity.location}
            activePhotoIdx={Number(activePhotoIdx)}
            photos={photos}
            shouldShowGalleryModal={showGalleryModal}
            showGalleryModal={this.showGalleryModalHandler}
            showReviewModal={this.showReviewModalHandler}
            handleImageSliderClick={this.handleImageSliderClick}
            closeModal={this.closeModal}
          />
        ) : <div />}
      </>
    );
  }
}

export default App;
