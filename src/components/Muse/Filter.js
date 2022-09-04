import { IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import './Filter.css';

function Filter() {
  return (
    <>
      <div className="fil_container">
        <div className="fil_txt">
          홈
          <IoIosArrowForward className="arrow_icon" />
          MUSE
        </div>
      </div>
      <div className="filter_con">
        <div className="wrap_fil">
          <div className="filter_left">
            <div className="filter_top">
              <div className="fil_top">
                <p>희망분야</p>
              </div>
              <FiSearch className="search_icon" />
              <input
                type="text"
                className="search_box"
                placeholder="손모델, 단원 등 검색해보세요."
              />
              <div className="menu_con">
                여성
                <input type="checkbox" className="chk_box" />
              </div>
              <div className="menu_con">
                남성
                <input type="checkbox" className="chk_box" />
              </div>
              <div className="menu_con">
                신인
                <input type="checkbox" className="chk_box" />
              </div>
            </div>
            <div className="filter_bot">
              <div className="fil_col_2">
                <ul>
                  <li>연기</li>
                  <li>모델</li>
                  <li>뮤지컬</li>
                  <li>퍼포먼스</li>
                  <li>스텝</li>
                </ul>
              </div>
              <div className="fil_col_8">
                <div className="menu_all">
                  <div className="menu_all_txt">연기 전체선택</div>
                  <input type="checkbox" className="menu_chk_box" />
                </div>
                <div className="fil_half">
                  <div className="fil_col_half">
                    <div className="fil_row_2">드라마/영화</div>
                    <div className="fil_row_8">웹드라마 연기자</div>
                  </div>
                  <div className="fil_col_half">
                    <div className="fil_row_2">연극/뮤지컬</div>
                    <div className="fil_row_8">웹드라마 연기자</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter_right">
            <div className="fil_right_half_1" />
            <div className="fil_right_half_2">
              <span className="fil_right_txt">MUSE</span>
              <span className="fil_right_people">759명</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
