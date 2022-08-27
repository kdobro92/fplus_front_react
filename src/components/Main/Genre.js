/* eslint-disable react/no-array-index-key */
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import './Genre.css';

function Genre() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="aaa">
      <div className="wrap_container">
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/total.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">전체분야</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/theater.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">연극</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/movie.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">영화</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/musical.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">뮤지컬</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/theater.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">TV방송</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/tv.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">인터넷플랫폼</div>
        </div>
        <div className="wrap_genre">
          <img
            className="genre_img"
            src="img/platform.png"
            onDragStart={handleDragStart}
            role="presentation"
            alt="img"
          />
          <div className="genre_txt">가수</div>
        </div>
      </div>

      {/* <div className="wrap_genre">
        <img
          className="genre_img"
          src="img/singer.png"
          onDragStart={handleDragStart}
          role="presentation"
          alt="img"
        />
        <div className="genre_txt">스텝</div>
      </div>
      <div className="wrap_genre">
        <img
          className="genre_img"
          src="img/theater.png"
          onDragStart={handleDragStart}
          role="presentation"
          alt="img"
        />
        <div className="genre_txt">인터넷플랫폼</div>
      </div>
      <div className="wrap_genre">
        <img
          className="genre_img"
          src="img/theater.png"
          onDragStart={handleDragStart}
          role="presentation"
          alt="img"
        />
        <div className="genre_txt">인터넷플랫폼</div>
      </div> */}
    </div>,
  ];

  // const responsive = {
  //   0: {
  //     items: 2,
  //   },
  //   1024: {
  //     items: 11,
  //   },
  // };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableDotsControls
      disableButtonsControls
      // responsive={responsive}
    />
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
    //       </button>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Genre;
