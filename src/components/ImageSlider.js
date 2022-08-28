/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unreachable */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ImageSlider.css';

// main image

function ImageSlider() {
  const images = [
    'img/main1.png',
    'img/main2.png',
    'img/main3.png',
    'img/main4.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    dotsClass: 'dots_custom',
  };

  return (
    <div className="container">
      <div className="wrap_thumbnail">
        <Slider {...settings}>
          {images.map((img, index) => (
            <img key={index} className="thumb_img" src={img} alt="thumbnail" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
