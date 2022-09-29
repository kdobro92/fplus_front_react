import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import Modal from './Modal';
import Content from './Content';
import './Sidebar.css';

function Sidebar() {
  const userInfo = useSelector((state) => state.userInfo);
  const [isOpen, setIsOpen] = useState(false);
  console.log(userInfo);
  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="wrap_side">
        <div className="side_con">
          <div className="side_head">
            <div className="side_head_row1">
              <div className="aaaa">
                <img src="img/user_profile.png" alt="profile" />
              </div>
              {/* <img src="img/user_profile.png" alt="profile" /> */}
            </div>
            <div className="side_head_row2">
              <span>
                <img
                  src="/img/profile_regi.png"
                  className="profile_img"
                  alt="profile"
                  onClick={modalHandler}
                  aria-hidden="true"
                />
              </span>
              <li className="user_name">-</li>
              <li className="user_inter">관심분야를 선택해주세요.</li>
              {/* <li className="user_inter">배우•모델</li> */}
            </div>
            {/* <div className="side_head_row2">
              <li className="user_name">-</li>
              <li className="user_inter">관심분야를 선택해주세요</li>
              <span>
                <img
                  src="img/profile_regi.png"
                  className="profile_img"
                  alt="profile"
                />
              </span>
            </div> */}
            {isOpen ? <Modal modalHandler={modalHandler} /> : null}
          </div>
          <div className="side_mid">
            <li className="side_mid_list">
              <img src="img/place.png" alt="place" />
              <span>{userInfo.place}</span>
            </li>
            <li className="side_mid_list">
              <img src="img/female.png" alt="place" />
              <span>-</span>
            </li>
            <li className="side_mid_list">
              <img src="img/birth.png" alt="place" />
              <span>-</span>
            </li>
          </div>
          {/* <div className="side_mid_2">
            <div className="side_mid_2_txt">신체정보</div>
            <ul className="side_body_info">
              <li>
                <p>HEIGHT</p>
                <span>-</span>
              </li>
              <li>
                <p>SHOES</p>
                <span>-</span>
              </li>
              <li>
                <p>HAIR</p>
                <span>-</span>
              </li>
              <li>
                <p>BUST</p>
                <span>-</span>
              </li>
              <li>
                <p>WAIST</p>
                <span>-</span>
              </li>
              <li>
                <p>HIP</p>
                <span>-</span>
              </li>
            </ul>
          </div> */}
          <div className="side_bot">
            <div className="side_bot_txt">카테고리</div>
            <button type="button" className="add_cate_btn">
              <BiPlus className="plus_cate_icon" />
              카테고리 추가
            </button>
            <div className="side_bot_txt">태그</div>
            <button type="button" className="add_tag_btn">
              <BiPlus className="plus_cate_icon" />
              관심태그 추가
            </button>
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}
export default Sidebar;
