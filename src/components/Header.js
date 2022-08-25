/* eslint-disable react/no-array-index-key */
// import { IoSearchOutline } from 'react-icons/io5';
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  const menuArr = [
    { name: <img src="img/fplus_logo2.png" alt="logo" />, content: '' },
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
              <img
                src="img/fplus_logo.png"
                className="nav_list_logo_txt"
                alt="logo"
              />
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
          <button type="button" className="icon_btn">
            <img src="img/upload.png" alt="upload" />
          </button>
          <button type="button" className="icon_btn">
            <img src="img/alert.png" alt="alert" />
          </button>
          <button type="button" className="icon_btn">
            <img src="img/message.png" alt="message" />
          </button>
          {isOpen ? <Login modalHandler={modalHandler} /> : null}
          <li className="nav_login" onClick={modalHandler} aria-hidden="true">
            로그인
          </li>
          <Link to="/signup">
            <li className="nav_signup">회원가입</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
