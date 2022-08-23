/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Genre.css';
// import Slider from 'react-slick';

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

  return (
    <div className="wrap_genre">
      <div className="genre_list">
        {genreArr.map((data, index) => (
          <div className="genre_container" key={index}>
            <div className="genre_txt">{data.text}</div>
            <img key={index} src={data.image} alt="genre" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genre;
