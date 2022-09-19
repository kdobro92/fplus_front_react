/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function Filter() {
  const [isToggle, setIsToggle] = useState(false);
  const [peopleMenu, setPeopelMenu] = useState([
    { id: 1, name: '뮤직비디오 연기자' },
    { id: 2, name: '웹드라마 연기자' },
    { id: 3, name: '연극단원' },
    { id: 4, name: 'OTT' },
  ]);

  const genres = ['연기', '모델', '뮤지컬', '퍼포먼스', '스텝'];
  const sortedMenu = ['관심순', '인기순', '최신순', '팔로우한 MUSE만 보기'];

  const [currentGenre, setCurrentGenre] = useState(0);
  const [currentMenu, setCurrentMenu] = useState(0);

  const selectGenreHandler = (idx) => {
    setCurrentGenre(idx);
  };

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  const selectSortedMenuHandler = (idx) => {
    setCurrentMenu(idx);
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
                      {genres.map((menu, idx) => (
                        <li
                          key={idx}
                          className={
                            currentGenre === idx ? 'focused_genre' : ''
                          }
                          onClick={() => selectGenreHandler(idx)}
                          aria-hidden
                        >
                          {menu}
                        </li>
                      ))}
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
                <div className="btn_list">정렬방식 : </div>
                {sortedMenu.map((menu, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={
                      currentMenu === idx ? 'btn_list active' : 'btn_list'
                    }
                    onClick={() => selectSortedMenuHandler(idx)}
                  >
                    {menu}
                  </button>
                ))}
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
              <div className="btn_list">정렬방식 : </div>
              {sortedMenu.map((menu, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={
                    currentMenu === idx ? 'btn_list active' : 'btn_list'
                  }
                  onClick={() => selectSortedMenuHandler(idx)}
                >
                  {menu}
                </button>
              ))}
              {peopleMenu.map((menu) => (
                <div className="peo_menu" key={menu.id}>
                  <h4>{menu.name}</h4>
                  <button
                    type="button"
                    className="del_peo_menu"
                    onClick={() => deleteMenuHandler(menu.id)}
                  >
                    <img src="img/del_peo_menu.png" alt="del" />
                  </button>
                </div>
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
