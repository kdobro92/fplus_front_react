/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Genre.css';

function Genre() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="/img/total.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/theater.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/movie.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/musical.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img src="img/tv.png" onDragStart={handleDragStart} alt="presentation" />,
    <img
      src="img/platform.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/singer.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/singer.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/singer.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
    <img
      src="img/singer.png"
      onDragStart={handleDragStart}
      alt="presentation"
    />,
  ];

  return (
    <div className="wrap_container">
      <div className="wrap_genre">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 7,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Genre;
