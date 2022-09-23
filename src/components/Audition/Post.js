/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import json from '../../assets/dummyAudition';

function Post({ currentMenu, currentGenre }) {
  const navigate = useNavigate();
  const [auditionList, setAuditionList] = useState(json);
  const [like, setLike] = useState(false);
  const [currentHeart, setCurrentHeart] = useState(0);

  const clickHeartHandler = (idx) => {
    setLike(!like);
    setCurrentHeart(idx);
  };

  const clickDetailHandler = (idx) => {
    navigate(`/audidetail/${idx}`);
  };

  const attentionFiltered = auditionList.filter((el) => el.sort === '관심순');
  const popularFiltered = auditionList.filter((el) => el.sort === '인기순');
  const latestFiltered = auditionList.filter((el) => el.sort === '최신순');

  const aaaa = auditionList.filter((el) => el.genre === '연기');
  const bbb = auditionList.filter((el) => el.genre === '모델');
  const ccc = auditionList.filter((el) => el.genre === '뮤지컬');
  const ddd = auditionList.filter((el) => el.genre === '퍼포먼스');
  const eee = auditionList.filter((el) => el.genre === '스텝');
  const fff = auditionList.filter((el) => el.genre === '가수');
  const ggg = auditionList.filter((el) => el.genre === '모델');

  return (
    <div className="wrap_post">
      <div className="post_container">
        {currentMenu === 0 &&
          currentGenre === 0 &&
          auditionList.map((data, index) => (
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
          popularFiltered.map((data, index) => (
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
          latestFiltered.map((data, index) => (
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
        {currentGenre === 0 &&
          currentMenu === 0 &&
          aaaa.map((data, index) => (
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
        {currentGenre === 1 &&
          bbb.map((data, index) => (
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
        {currentGenre === 2 &&
          ccc.map((data, index) => (
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
        {currentGenre === 3 &&
          ddd.map((data, index) => (
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
        {currentGenre === 4 &&
          eee.map((data, index) => (
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
        {currentGenre === 5 &&
          fff.map((data, index) => (
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
        {currentGenre === 6 &&
          ggg.map((data, index) => (
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
  );
}

export default Post;
