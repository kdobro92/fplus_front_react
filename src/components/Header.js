/* eslint-disable react/no-array-index-key */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const requsetLogoutHandler = () => {
    setIsLogin(false);
    navigate('/');
  };

  const menuArr = [
    { name: <img src="img/fplus_logo2.png" alt="logo" />, content: '' },
    { name: '프리랜서 코리아', content: '' },
    {
      name: (
        <div className="wrap_meta">
          <img src="img/meta.png" alt="meta" />
          <p className="meta_txt">메타라이브</p>
        </div>
      ),
      content: '',
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const [currentNav, setCurrentNav] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const selectNavHandler = (index) => {
    setCurrentNav(index);
  };

  const data = [
    <Link to="/w1">
      <div className="wrap_menu">
        <li className="menu_txt">홈</li>
      </div>
    </Link>,
    <Link to="/w1/muse">
      <div className="wrap_menu">
        <li className="menu_txt">MUSE</li>
      </div>
    </Link>,
    <Link to="/w1/audition">
      <div className="wrap_menu">
        <li className="menu_txt">오디션</li>
      </div>
    </Link>,
  ];
  return (
    <div>
      <div className="header_container">
        <div className="wrap_header">
          <li className="menu_list">
            <img src="img/fplus_logo3.png" alt="logo" />
          </li>
          {menuArr.map((menu, index) => (
            <li
              key={index}
              className={currentTab === index ? 'submenu focused' : 'submenu'}
              onClick={() => selectTabHandler(index)}
              aria-hidden="true"
            >
              {menu.name}
            </li>
          ))}
        </div>
        <div className="wrap_left_nav">
          <div className="left_nav">
            <Link to="/w1">
              <li className="nav_list">
                <img
                  src="img/fplus_logo.png"
                  className="nav_list_logo_txt"
                  alt="logo"
                />
              </li>
            </Link>
            {data.map((menu, index) => (
              <li
                key={index}
                className={
                  currentNav === index ? 'navmenu focused_nav' : 'navmenu'
                }
                onClick={() => selectNavHandler(index)}
                aria-hidden="true"
              >
                {menu}
              </li>
            ))}
          </div>
          {isLogin ? (
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
              <Link to="/w1/mypage">
                <li
                  className="nav_login"
                  onClick={modalHandler}
                  aria-hidden="true"
                >
                  마이페이지
                </li>
              </Link>
              <li
                className="nav_signup"
                onClick={requsetLogoutHandler}
                aria-hidden="true"
              >
                로그아웃
              </li>
            </div>
          ) : (
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
              {isOpen ? (
                <Login
                  modalHandler={modalHandler}
                  loginHandler={loginHandler}
                />
              ) : null}
              <li
                className="nav_login"
                onClick={modalHandler}
                aria-hidden="true"
              >
                로그인
              </li>
              <Link to="/w1/signup">
                <li className="nav_signup">회원가입</li>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
