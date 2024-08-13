import { ImagesSlider } from '../ui/ImagesSlider';

const Landing = () => {
  return (
    <div className="-z-10 h-screen overflow-x-hidden">
      <ImagesSlider images={['/images/carousel1.jpeg', '/images/carousel2.jpg']}>
        <p>The One Piece Wiki</p>
      </ImagesSlider>
    </div>
  );
};

export default Landing;
