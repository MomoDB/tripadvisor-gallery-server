// Import AWS S3 Links
import awsS3Links from '../../../AmazonS3Links';
// Destrcture awsS3Links
const { awsBaseUrl } = awsS3Links;

const preloadImages = (photos) => {
  // Mount preconnect link to DOM
  const preconnect = document.createElement('link');
  preconnect.setAttribute('rel', 'preconnect');
  preconnect.setAttribute('href', awsBaseUrl);
  document.head.appendChild(preconnect);

  // Mount preload links to DOM for images
  photos.forEach((photo) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'image');
    link.setAttribute('href', `${awsBaseUrl}/${photo.link}`);
    document.head.appendChild(link);
  });
};

export default preloadImages;
