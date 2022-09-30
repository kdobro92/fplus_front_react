// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import Content from './Content';
import './Sidebar.css';

function Sidebar() {
  // const userInfo = useSelector((state) => state.userInfo);
  const [isOpen, setIsOpen] = useState(false);
  // const [isDropDown, setIsDropDown] = useState(false);

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
            {isOpen ? <Modal modalHandler={modalHandler} /> : null}
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
          <div className="side_mid2">
            <div className="side_mid2_con">
              <div className="side_mid2_txt">참여/수상경력</div>
              <li>21</li>
              <li>20</li>
              <div className="side_mid2_btn_con">
                <button type="button">
                  <img src="img/profile_arrow_down.png" alt="arrow" />
                </button>
              </div>
            </div>
            <div className="side_mid2_txt">대표작</div>
            <li>22</li>
            <li>21</li>
            <div className="side_mid2_btn_con">
              <button type="button">
                <img src="img/profile_arrow_down.png" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="side_mid3">
            <h3 className="side_mid3_txt">영상</h3>
            <div className="side_mid3_video">
              <ReactPlayer url="123" width="394px" height="224px" />
            </div>
          </div>
          <div className="side_mid4">
            <h3 className="side_mid4_txt">소셜/웹사이트</h3>
            <div className="side_mid4_social">
              <a href="https://www.instagram.com/">인스타그램,</a>
              <a href="https://www.facebook.com/">페이스북,</a>
              <a href="https://tv.naver.com/">네이버TV,</a>
              <a href="https://www.vlive.tv/home/chart?sub=VIDEO&period=HOUR_24&country=ALL">
                V LIVE
              </a>
            </div>
          </div>
          <div className="side_mid5">
            <h3 className="side_mid5_txt">활동정보</h3>
            <div className="side_mid5_con">
              <div className="side_mid5_info">
                <li>6</li>
                <li>작업보기</li>
              </div>
              <div className="side_mid5_info">
                <li>5532</li>
                <li>좋아요 받음</li>
              </div>
              <div className="side_mid5_info">
                <li>66</li>
                <li>작업 저장</li>
              </div>
              <div className="side_mid5_info">
                <li>42</li>
                <li>팔로잉</li>
              </div>
              <div className="side_mid5_info">
                <li>351</li>
                <li>팔로워</li>
              </div>
            </div>
          </div>
        </div>

        <Content />
      </div>
    </div>
  );
}
export default Sidebar;
