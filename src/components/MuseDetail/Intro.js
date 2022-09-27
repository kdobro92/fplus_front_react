/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from './Modal';
import userData from '../../assets/dummyData';
import './Intro.css';

function Intro() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState(userData);
  const [currentImg, setCurrentImg] = useState(userData[id].images[0]);

  const clickImageHandler = (idx) => {
    setCurrentImg(userData[id].images[idx]);
  };

  const onClickModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="intro_menu">
        <div className="intro_con">
          <img
            src="/img/arrow_back.png"
            alt="back"
            onClick={goBack}
            aria-hidden="true"
          />
          <span className="intro_menu_txt">MUSE</span>
        </div>
      </div>
      <div className="wrap_intro_profile">
        <div className="intro_profile">
          <div className="profile_row_1">
            {userList[id].images.map((img, idx) => (
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
                <span className="profile_name">{userList[id].name}</span>
                <span className="profile_type">{userList[id].type}</span>
              </div>
              <div className="mid_right">
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="/img/place.png" alt="place" />
                  </div>
                  <span className="icon_txt">{userList[id].place}</span>
                </div>
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="/img/female.png" alt="gender" />
                  </div>
                  <span className="icon_txt">{userList[id].gender}</span>
                </div>
                <div className="mid_con">
                  <div className="mid_icon">
                    <img src="/img/birth.png" alt="birth" />
                  </div>
                  <span className="icon_txt">{userList[id].birth}</span>
                </div>
              </div>
              <div className="bot_right">
                <h3>신체정보</h3>
                <div className="body_info">
                  <li className="info_list">
                    <span className="info_list_left">HEIGHT</span>
                    <span className="info_list_right">
                      {userList[id].body.height}
                    </span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">BUST</span>
                    <span className="info_list_right">
                      {userList[id].body.bust}
                    </span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">SHOES</span>
                    <span className="info_list_right">
                      {userList[id].body.bust}
                    </span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">WAIST</span>
                    <span className="info_list_right">
                      {userList[id].body.waist}
                    </span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">HAIR</span>
                    <span className="info_list_right">
                      {userList[id].body.hair}
                    </span>
                  </li>
                  <li className="info_list">
                    <span className="info_list_left">HIP</span>
                    <span className="info_list_right">
                      {userList[id].body.hip}
                    </span>
                  </li>
                </div>
              </div>
              {isOpen && <Modal onClickModalHandler={onClickModalHandler} />}
              <button
                type="button"
                className="sug_btn"
                onClick={onClickModalHandler}
              >
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
