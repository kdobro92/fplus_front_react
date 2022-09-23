import { useState } from 'react';
import Modal from './Modal';
import './Banner.css';

function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="banner_con">
      <img src="img/mypage_banner.png" alt="banner" />
      <div className="user_profile_list">
        <div className="three_list">
          <li>0</li>
          <li>포트폴리오</li>
        </div>
        <div className="three_list">
          <li>0</li>
          <li>팔로워</li>
        </div>
        <div className="three_list">
          <li>0</li>
          <li>오디션</li>
        </div>
      </div>
      {isOpen ? <Modal modalHandler={modalHandler} /> : null}
      <button type="button" className="modi_pro_btn" onClick={modalHandler}>
        프로필 등록
      </button>
    </div>
  );
}
export default Banner;
