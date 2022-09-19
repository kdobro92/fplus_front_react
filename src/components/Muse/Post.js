/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post() {
  const postArr = [
    {
      name: '허안나',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post1.png',
    },
    {
      name: '김철우',
      type: '음향스텝',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '음향',
      image: 'img/post2.png',
    },
    {
      name: '최민석',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '태그',
      image: 'img/post3.png',
    },
    {
      name: '김소영',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '태그',
      image: 'img/post4.png',
    },
    {
      name: '진수진',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '태그',
      image: 'img/post5.png',
    },
  ];

  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [currentHeart, setCurrentHeart] = useState(0);

  const clickHeartHandler = (idx) => {
    setLike(!like);
    setCurrentHeart(idx);
  };

  const clickDetailHandler = (e) => {
    e.stopPropagation();
    navigate('/w1/musedetail');
  };

  return (
    <div className="wrap_post">
      <div className="post_container">
        {postArr.map((data, index) => (
          <div
            key={index}
            className="post_list"
            onClick={clickDetailHandler}
            aria-hidden="true"
          >
            <div className="post_img_container">
              <img className="post_img" src={data.image} alt="post" />
              <button
                type="button"
                className="heart_btn"
                onClick={() => clickHeartHandler(index)}
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
              <li className="post_name">{data.name}</li>
              <li className="post_type">{data.type}</li>
            </div>
            <li className="post_txt">{data.text}</li>
            <li className="post_tag">{data.tag}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
