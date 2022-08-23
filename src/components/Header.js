/* eslint-disable react/no-array-index-key */
// import { IoSearchOutline } from 'react-icons/io5';
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const menuArr = [
    { name: 'FPLUS', content: '' },
    { name: '프리랜서 코리아', content: '' },
    { name: 'FPLUS 클래스', content: '' },
  ];

  const menuList = [
    { name: '홈', content: '' },
    { name: 'MUSE', content: '' },
    { name: '오디션', content: '' },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const [currentNav, setCurrentNav] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const selectNavHandler = (index) => {
    setCurrentNav(index);
  };

  return (
    <div>
      <div className="wrap_header">
        <li className="menu_list">
          <FaRegSmileWink />
        </li>
        {menuArr.map((el, index) => (
          <li
            key={index}
            className={currentTab === index ? 'submenu focused' : 'submenu'}
            onClick={() => selectTabHandler(index)}
            aria-hidden="true"
          >
            {el.name}
          </li>
        ))}
      </div>
      <div className="wrap_container">
        <div className="left_nav">
          <Link to="/">
            <li className="nav_list">
              <FaRegSmileWink className="nav_list_logo" />
              <span className="nav_list_logo_txt">FPLUS</span>
            </li>
          </Link>
          {menuList.map((el, index) => (
            <li
              key={index}
              className={
                currentNav === index ? 'navmenu focused_nav' : 'navmenu'
              }
              onClick={() => selectNavHandler(index)}
              aria-hidden="true"
            >
              {el.name}
            </li>
          ))}
        </div>
        {/* <div className="search_bar">
          <span className="search_bar_logo">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            className="search_bar_txt"
            placeholder="다양한 매력의 뮤즈를 검색해보세요!"
          />
        </div> */}
        <div className="right_nav">
          <Link to="/login">
            <li className="nav_login">로그인</li>
          </Link>
          <Link to="/signup">
            <li className="nav_signup">회원가입</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
