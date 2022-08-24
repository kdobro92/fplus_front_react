/* eslint-disable react/no-array-index-key */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { useState } from 'react';
import './Genre.css';

function Genre() {
  // const genreArr = [
  //   { text: '전체분야', image: 'img/total.png' },
  //   { text: '연극', image: 'img/theater.png' },
  //   { text: '영화', image: 'img/movie.png' },
  //   { text: '뮤지컬', image: 'img/musical.png' },
  //   { text: 'TV방송', image: 'img/tv.png' },
  //   { text: '인터넷플랫폼', image: 'img/platform.png' },
  //   { text: '가수', image: 'img/singer.png' },
  // ];

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="img/total.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/theater.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/movie.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/musical.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/tv.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/platform.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
    <img
      src="img/singer.png"
      onDragStart={handleDragStart}
      role="presentation"
      alt="img"
    />,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 7 },
  };
  // const [isFocused, setIsFocused] = useState(false);

  // const clickHandler = () => {
  //   setIsFocused(!isFocused);
  // };

  return (
    <AliceCarousel mouseTracking items={items} responsive={responsive} />
    // <div className="wrap_genre">
    //   <div className="genre_container">
    //     {genreArr.map((data, index) => (
    //       <button
    //         type="button"
    //         key={index}
    //         className="genre_list"
    //         aria-hidden="true"
    //         onClick={clickHandler}
    //       >
    //         <img
    //           className="genre_img"
    //           src={data.image}
    //           alt="genre"
    //           onDragStart={handleDragStart}
    //           role="presentation"
    //         />
    //         <div className="genre_txt">{data.text}</div>
    //       </button>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Genre;
