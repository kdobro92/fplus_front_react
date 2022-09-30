/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import json from '../../assets/dummyData';

function Post({ currentMenu, currentGenre }) {
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

  const attentionFiltered = userList.filter((el) => el.sort === '관심순');
  const popularFiltered = userList.filter((el) => el.sort === '인기순');
  const latestFiltered = userList.filter((el) => el.sort === '최신순');

  const aaa = userList.filter((el) => el.genre === '연기');
  const bbb = userList.filter((el) => el.genre === '모델');
  const ccc = userList.filter((el) => el.genre === '뮤지컬');
  const ddd = userList.filter((el) => el.genre === '퍼포먼스');
  const eee = userList.filter((el) => el.genre === '스텝');
  const fff = userList.filter((el) => el.genre === '가수');
  const ggg = userList.filter((el) => el.genre === '모델');

  return (
    <div className="wrap_post">
      <div className="post_container">
        {currentMenu === 0 &&
          currentGenre === 0 &&
          userList.map((list, index) => (
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
          popularFiltered.map((list, index) => (
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
                      like && currentHeart === index
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
          latestFiltered.map((list, index) => (
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
        {currentGenre === 0 &&
          currentMenu === 0 &&
          aaa.map((list, index) => (
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

        {currentGenre === 1 &&
          bbb.map((list, index) => (
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
        {currentGenre === 2 &&
          ccc.map((list, index) => (
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
        {currentGenre === 3 &&
          ddd.map((list, index) => (
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
        {currentGenre === 4 &&
          eee.map((list, index) => (
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
        {currentGenre === 5 &&
          fff.map((list, index) => (
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
        {currentGenre === 6 &&
          fff.map((list, index) => (
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
        {currentGenre === 6 &&
          ggg.map((list, index) => (
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
  );
}

export default Post;
