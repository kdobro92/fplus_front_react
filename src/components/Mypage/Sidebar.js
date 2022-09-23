import { BiPlus } from 'react-icons/bi';
// import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  // const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="wrap_side">
      <div className="side_con">
        <div className="side_head">
          <img src="img/user_profile.png" alt="profile" />
          <div>
            <li className="user_name">-</li>
            <li className="user_inter">관심분야를 선택해주세요</li>
          </div>
        </div>
        <div className="side_mid">
          <li className="side_mid_list">
            <img src="img/place.png" alt="place" />
            <span>-</span>
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
        <div className="side_mid_2">
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
        </div>
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
    </div>
  );
}
export default Sidebar;
