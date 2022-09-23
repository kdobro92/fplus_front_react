/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Post from './Post';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Genre.css';

function Genre() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="genre_list">
      <img
        src="/img/total.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">전체분야</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/theater.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">연극</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/movie.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">영화</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/musical.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">뮤지컬</p>
      </div>
    </div>,
    <div className="genre_list">
      <img src="/img/tv.png" onDragStart={handleDragStart} alt="presentation" />
      <div className="genre_txt_div">
        <p className="genre_txt">TV방송</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/platform.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">인터넷플랫폼</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/singer.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">가수</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/musical.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">스텝</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/theater.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">가수</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/movie.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">스텝</p>
      </div>
    </div>,
    <div className="genre_list">
      <img
        src="/img/singer.png"
        onDragStart={handleDragStart}
        alt="presentation"
      />
      <div className="genre_txt_div">
        <p className="genre_txt">영화</p>
      </div>
    </div>,
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  const selectTabHandler = (idx) => {
    setCurrentMenu(idx);
  };

  return (
    <>
      <div className="wrap_container">
        <div className="wrap_genre">
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={{
              0: {
                items: 1,
              },
              1024: {
                items: 7,
              },
            }}
          >
            {items.map((menu, idx) => (
              <li
                key={idx}
                className={
                  currentMenu === idx
                    ? 'genre_list focused_genre'
                    : 'genre_list'
                }
                onClick={() => selectTabHandler(idx)}
                aria-hidden="true"
              >
                {menu}
              </li>
            ))}
          </AliceCarousel>
        </div>
      </div>
      <Post currentMenu={currentMenu} />
    </>
  );
}

export default Genre;
