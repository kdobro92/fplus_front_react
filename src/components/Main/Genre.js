/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import './Genre.css';

function Genre() {
  const genreArr = [
    { text: '전체분야', image: 'img/total.png' },
    { text: '연극', image: 'img/theater.png' },
    { text: '영화', image: 'img/movie.png' },
    { text: '뮤지컬', image: 'img/musical.png' },
    { text: 'TV방송', image: 'img/tv.png' },
    { text: '인터넷플랫폼', image: 'img/platform.png' },
    { text: '가수', image: 'img/singer.png' },
  ];

  const [isFocused, setIsFocused] = useState(false);

  const clickHandler = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className="wrap_genre">
      <div className="genre_container">
        {genreArr.map((data, index) => (
          <button
            type="button"
            key={index}
            className="genre_list"
            aria-hidden="true"
            onClick={clickHandler}
          >
            <img className="genre_img" src={data.image} alt="genre" />
            <div className="genre_txt">{data.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Genre;
