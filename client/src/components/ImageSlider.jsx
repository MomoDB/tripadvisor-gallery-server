/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import ImageSliderCSS from '../style/ImageSlider.css';

// Import AWS S3 Links
import awsS3Links from '../../../AmazonS3Links';
// Destrcture awsS3Links
const { arrowIcon, cameraIcon, diagonalArrows } = awsS3Links;

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isImageHovered: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);

    // Destructure props event handlers
    const { handleImageSliderClick } = this.props;
    this.handleImageSliderClick = handleImageSliderClick.bind(this);
  }

  handleClick(e) {
    this.handleImageSliderClick(e);
  }

  handleHoverIn() {
    this.setState({
      isImageHovered: true,
    });
    document.querySelector('#container').classList.add(ImageSliderCSS.containerHover);
  }

  handleHoverOut() {
    this.setState({
      isImageHovered: false,
    });
    document.querySelector('#container').classList.remove(ImageSliderCSS.containerHover);
  }

  render() {
    // Destructure props static data
    const { backgroundImage, imageCount } = this.props;
    const { isImageHovered } = this.state;

    return (
      // * Accessibility features to implemenet: ability to focus Image Click with tab keypress *
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div // Clickable div that features a background image for the current picture
        role="button"
        style={backgroundImage}
        className={ImageSliderCSS.container}
        aria-label="Click to View Image Modal"
        onClick={this.handleClick}
        onKeyPress={() => {}}
        onMouseEnter={this.handleHoverIn}
        onMouseLeave={this.handleHoverOut}
        id="container"
      >
        <div className={ImageSliderCSS.prev_button}>
          <button // Button that includes an arrow icon img to go to the previous image
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
            onMouseEnter={this.handleHoverOut}
            onMouseLeave={this.handleHoverIn}
          >
            <img
              className={ImageSliderCSS.directional_arrow_left}
              src={arrowIcon}
              alt="Previous"
            />
          </button>
        </div>

        { isImageHovered ? (
          <div id="fullView" className={ImageSliderCSS.fullView}>
            <span className={ImageSliderCSS.fullViewSpan}>
              <img className={ImageSliderCSS.diagonalArrows} alt="Expand to Full Screen" src={diagonalArrows} />
              Full View
            </span>
          </div>
        )
          : <div /> }

        <div className={ImageSliderCSS.slider_button_container}>
          <button // Button that includes an arrow icon img to go to the next image
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
            onMouseEnter={this.handleHoverOut}
            onMouseLeave={this.handleHoverIn}
          >
            <img
              className={ImageSliderCSS.directional_arrow_right}
              src={arrowIcon}
              alt="Next"
            />
          </button>
        </div>

        <div className={ImageSliderCSS.view_all_button_div}>
          <button // Button that allows a user to view the Gallery Modal for all of the images
            className={ImageSliderCSS.view_all_button}
            type="button"
            onClick={this.handleClick}
            onMouseEnter={this.handleHoverOut}
            onMouseLeave={this.handleHoverIn}
          >
            <img
              className={ImageSliderCSS.view_all_img}
              src={cameraIcon}
              alt="View Gallery"
            />
            <span
              className={ImageSliderCSS.img_count}
            >
              View All Photos (
              {imageCount}
              )
            </span>
          </button>
        </div>
      </div>
    );
  }
}

ImageSlider.defaultProps = {
  handleImageSliderClick: () => {},
  backgroundImage: {},
  imageCount: 0,
};

ImageSlider.propTypes = {
  handleImageSliderClick: PropTypes.func,
  backgroundImage: PropTypes.shape({}),
  imageCount: PropTypes.number,
};

ImageSlider.propTypes = {};
export default ImageSlider;
