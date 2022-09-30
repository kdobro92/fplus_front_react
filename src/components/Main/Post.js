/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import json from '../../assets/dummyData';
import './Post.css';

function Post({ currentMenu }) {
  const navigate = useNavigate();
  const [userList, setUserList] = useState(json);
  const [like, setLike] = useState(false);
  const [currentHeart, setCurrentHeart] = useState(0);
  const [hearted, setHearted] = useState([]);
  const heart = { heart: 1 };

  const clickHeartHandler = (idx) => (e) => {
    e.stopPropagation();
    setLike(!like);
    setCurrentHeart(idx);
    setHearted([...hearted, Object.assign(userList[idx], heart)]);
  };

  const clickDetailHandler = (idx) => {
    navigate(`/musedetail/${idx}`);
  };

  const goToMuse = () => {
    navigate('/muse');
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
              <img src="img/sound.png" alt="sound" />
            </span>
            오늘의 HOT한 MUSE!!
          </div>
          <div className="more_muse_txt" onClick={goToMuse} aria-hidden="true">
            더보기
          </div>
        </div>
      </div>
      <div className="wrap_post">
        <div className="post_container">
          {currentMenu === 0 &&
            userList.map((list) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 1 &&
            theaterFiltered.map((list) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 2 &&
            movieFiltered.map((list) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 3 &&
            musicalFiltered.map((list, index) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 4 &&
            tvFiltered.map((list, index) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 5 &&
            internetFiltered.map((list, index) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={clickHeartHandler}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 6 &&
            singerFiltered.map((list, index) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
          {currentMenu === 7 &&
            stepFiltered.map((list, index) => (
              <div
                key={list.id}
                className="post_list"
                aria-hidden="true"
                onClick={() => clickDetailHandler(list.id)}
              >
                <div className="post_img_container">
                  <img className="post_img" src={list.image} alt="post" />
                  <button
                    type="button"
                    className="heart_btn"
                    onClick={(e) => clickHeartHandler(list.id)(e)}
                  >
                    <img
                      src={
                        like && currentHeart === list.id
                          ? 'img/heart_red.png'
                          : 'img/heart.png'
                      }
                      alt="heart"
                    />
                  </button>
                </div>
                <div className="wrap_top">
                  <li className="post_name">{list.name}</li>
                  <li className="post_type">{list.type}</li>
                </div>
                <li className="post_txt">{list.description}</li>
                <li className="post_tag">{list.tag}</li>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Post;
