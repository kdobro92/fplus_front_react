/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Filter.css';

function Filter() {
  const [isToggle, setIsToggle] = useState(true);
  const [peopleMenu, setPeopelMenu] = useState([
    '뮤직비디오 연기자',
    '웹드라마 연기자',
  ]);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const deleteMenuHandler = (idx) => {
    const newList = peopleMenu.filter((menu) => menu.id !== idx);
    setPeopelMenu(newList);
  };

  return (
    <div>
      {isToggle ? (
        <div className="filter_con">
          <div className="filter_mid">
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
                  <span className="fil_right_txt">공고</span>
                  <span className="fil_right_people">824건</span>
                </div>
              </div>
            </div>
          </div>
          <div className="big_filter_con">
            <div className="sort_con">
              <div className="filter_list">
                <button type="button" className="btn_list">
                  정렬방식 :
                </button>
                <button type="button" className="btn_list">
                  관심순
                </button>
                <button type="button" className="btn_list">
                  인기순
                </button>
                <button type="button" className="btn_list">
                  최신순
                </button>
                <button type="button" className="btn_list">
                  팔로우한 MUSE만 보기
                </button>
              </div>
              <div
                className="fold_menu"
                onClick={toggleHandler}
                aria-hidden="true"
              >
                <span>작게표시</span>
                <img src="img/arrow_top.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="small_filter_con">
          <div className="sort_con">
            <div className="filter_list">
              <button type="button" className="btn_list">
                정렬방식 :
              </button>
              <button type="button" className="btn_list">
                관심순
              </button>
              <button type="button" className="btn_list">
                인기순
              </button>
              <button type="button" className="btn_list">
                최신순
              </button>
              <button type="button" className="btn_list">
                팔로우한 MUSE만 보기
              </button>
              {peopleMenu.map((menu, idx) => (
                <span className="peo_menu" key={idx}>
                  {menu}
                  <button
                    type="button"
                    className="del_peo_menu"
                    onClick={() => deleteMenuHandler(idx)}
                  >
                    <img src="img/del_peo_menu.png" alt="del" />
                  </button>
                </span>
              ))}
            </div>
            <div className="fil_right">
              <span className="peo_num">
                89
                <span className="pep_num2">명</span>
              </span>
              <div
                className="fold_menu"
                onClick={toggleHandler}
                aria-hidden="true"
              >
                <span className="to_big">상세보기</span>
                <img src="img/arrow_top.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
