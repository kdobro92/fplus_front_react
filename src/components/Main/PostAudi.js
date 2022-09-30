/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import json from '../../assets/dummyAudition';
import './Audition.css';

function PostAudi({ currentMenu }) {
  const navigate = useNavigate();
  const [userList, setUserList] = useState(json);
  const [like, setLike] = useState(false);
  const [currentHeart, setCurrentHeart] = useState(0);

  const clickHeartHandler = (e) => {
    e.stopPropagation();
    setLike(!like);
  };

  const clickDetailHandler = (idx) => {
    navigate(`/audidetail/${idx}`);
  };

  const goToAudition = () => {
    navigate('/audition');
  };

  const theaterFiltered = userList.filter((el) => el.genre === '연극');
  const movieFiltered = userList.filter((el) => el.genre === '영화');
  const musicalFiltered = userList.filter((el) => el.genre === '뮤지컬');
  const tvFiltered = userList.filter((el) => el.genre === 'tv방송');
  const internetFiltered = userList.filter((el) => el.genre === '인터넷플랫폼');
  const singerFiltered = userList.filter((el) => el.genre === '가수');
  const stepFiltered = userList.filter((el) => el.genre === '스텝');

  return (
    <>
      <div className="wrap_title">
        <div className="wrap_title_con">
          <div className="title_con">
            <span>
              <img src="img/balloon.png" alt="sound" />
            </span>
            오늘의 HOT한 MUSE!!
          </div>
          <div
            className="more_muse_txt"
            onClick={goToAudition}
            aria-hidden="true"
          >
            더보기
          </div>
        </div>
      </div>
      <div className="wrap_post">
        <div className="post_container">
          {currentMenu === 0 &&
            userList.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="heart_btn"
                  onClick={clickHeartHandler}
                >
                  <img
                    src={
                      like && currentHeart === data.id
                        ? 'img/heart_red.png'
                        : 'img/heart.png'
                    }
                    alt="heart"
                  />
                </button>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 1 &&
            theaterFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 2 &&
            movieFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 3 &&
            musicalFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 4 &&
            tvFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 5 &&
            internetFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 6 &&
            singerFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {currentMenu === 7 &&
            stepFiltered.map((data, index) => (
              <div
                key={data.id}
                className="card_whole"
                onClick={() => clickDetailHandler(data.id)}
                aria-hidden="true"
              >
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default PostAudi;
