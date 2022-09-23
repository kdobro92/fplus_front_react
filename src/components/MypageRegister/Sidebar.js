import { BiPlus } from 'react-icons/bi';

function Sidebar() {
  return (
    <div className="wrap_side">
      <div className="side_con">
        <div className="side_head">
          <img src="img/bibi.png" alt="profile" />
          <div>
            <li className="user_name">비비</li>
            <li className="user_inter">관심분야를 선택해주세요</li>
          </div>
        </div>
        <div className="side_mid">
          <li className="side_mid_list">
            <img src="img/place.png" alt="place" />
            <span>서울</span>
          </li>
          <li className="side_mid_list">
            <img src="img/female.png" alt="place" />
            <span>여성</span>
          </li>
          <li className="side_mid_list">
            <img src="img/birth.png" alt="place" />
            <span>1998.07.25</span>
          </li>
        </div>
        <div className="side_mid_2">
          <div className="side_mid_2_txt">신체정보</div>
          <ul className="side_body_info">
            <li>
              <p>HEIGHT</p>
              <span>170cm</span>
            </li>
            <li>
              <p>SHOES</p>
              <span>240mm</span>
            </li>
            <li>
              <p>HAIR</p>
              <span>BLACK</span>
            </li>
            <li>
              <p>BUST</p>
              <span>32</span>
            </li>
            <li>
              <p>WAIST</p>
              <span>25</span>
            </li>
            <li>
              <p>HIP</p>
              <span>35</span>
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
