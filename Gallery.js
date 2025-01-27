import Greeting from './Greeting';
import placeholderImage from './img1.jpg';

function Gallery() {
  return (
    <div>
      <Greeting />
      <img
        src={placeholderImage}
        alt="Placeholder"
        style={{ width: '150px', height: '150px', marginTop: '10px' }}
      />
    </div>
  );
}

export default Gallery;
