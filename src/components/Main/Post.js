/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

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
  const postArr2 = [
    {
      name: '서지우',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post6.png',
    },
    {
      name: '지소라',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post7.png',
    },
    {
      name: '김유진',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post8.png',
    },
    {
      name: '이미주',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post9.png',
    },
    {
      name: '이여름',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post10.png',
    },
  ];
  const postArr3 = [
    {
      name: '구자영',
      type: '배우 모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post11.png',
    },
    {
      name: '하유주',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post12.png',
    },
    {
      name: '쥬나',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post13.png',
    },
    {
      name: '곽지철',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post14.png',
    },
    {
      name: '반휘혈',
      type: '배우•모델',
      text: '"저의 굉장한 끈기로 어떤 역할이든 소화해 낼 수 있는 배우가 될 수 있도록 노력하겠습니다."',
      tag: '피팅',
      image: 'img/post15.png',
    },
  ];

  const navigate = useNavigate();
  const sortedMenu = ['관심순', '인기순', '최신순', '팔로우한 MUSE만 보기'];
  const [like, setLike] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [currentHeart, setCurrentHeart] = useState(0);

  const selectSortedMenuHandler = (idx) => {
    setCurrentMenu(idx);
  };

  const clickHeartHandler = (idx) => {
    setLike(!like);
    const newArr = currentHeart.filter((el) => el.id !== idx);
    setCurrentHeart(idx);
  };

  const clickDetailHandler = (e) => {
    e.preventDefault();
    navigate('/musedetail');
  };

  return (
    <>
      <div className="wrap_filter">
        <div className="filter_container">
          <div className="filter_list">
            <div className="btn_list">정렬방식 : </div>
            {sortedMenu.map((menu, idx) => (
              <button
                key={idx}
                type="button"
                className={currentMenu === idx ? 'btn_list active' : 'btn_list'}
                onClick={() => selectSortedMenuHandler(idx)}
              >
                {menu}
              </button>
            ))}
          </div>
        </div>
      </div>
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
      <div className="wrap_post">
        <div className="post_container">
          {postArr2.map((data, index) => (
            <div className="post_list" key={index}>
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
      <div className="wrap_post">
        <div className="post_container">
          {postArr3.map((data, index) => (
            <div className="post_list" key={index}>
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
    </>
  );
}

export default Post;
