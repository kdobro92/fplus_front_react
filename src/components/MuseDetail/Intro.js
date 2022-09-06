/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import './Intro.css';

function Intro() {
  const images = [
    'img/detail1.png',
    'img/detail2.png',
    'img/detail3.png',
    'img/detail4.png',
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);

  const clickImageHandler = (idx) => {
    setCurrentImg(images[idx]);
  };

  console.log(currentImg);

  return (
    <>
      <div className="intro_menu">
        <div className="intro_con">
          <img src="img/arrow_back.png" alt="back" />
          <span className="intro_menu_txt">MUSE</span>
        </div>
      </div>
      <div className="wrap_intro_profile">
        <div className="intro_profile">
          <div className="profile_row_1">
            {images.map((img, idx) => (
              <li
                key={idx}
                className="img_detail"
                onClick={() => clickImageHandler(idx)}
                aria-hidden="true"
              >
                <img src={img} alt="sm_detail" />
              </li>
            ))}
          </div>
          <div className="profile_middle">
            <div className="profile_row_2">
              <img src={currentImg} alt="bg_detail" />
            </div>
            <div className="profile_row_3">
              <div className="head_right">
                <span className="profile_name">비비</span>
                <span className="profile_type">배우•모델</span>
              </div>
              <div className="mid_right">
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="img/place.png" alt="place" />
                  </div>
                  <span className="icon_txt">서울</span>
                </div>
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="img/female.png" alt="place" />
                  </div>
                  <span className="icon_txt">여성</span>
                </div>
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="img/birth.png" alt="place" />
                  </div>
                  <span className="icon_txt">1998.07.25</span>
                </div>
              </div>
              <div className="bot_right">
                <h3>신체정보</h3>
                <div className="body_info">
                  <li className="info_list">
                    <span className="info_list_left">HEIGHT</span>
                    <span className="info_list_right">176cm</span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">BUST</span>
                    <span className="info_list_right">32</span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">SHOES</span>
                    <span className="info_list_right">240mm</span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">WAIST</span>
                    <span className="info_list_right">23</span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">HAIR</span>
                    <span className="info_list_right">BLACK</span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">HIP</span>
                    <span className="info_list_right">35</span>
                  </li>
                </div>
              </div>
              <button type="button" className="sug_btn">
                오디션 제안하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
