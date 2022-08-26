/* eslint-disable react/no-array-index-key */
import { FaRegSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Signin from '../pages/Signin';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
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

  // const menuList = [
  //   { name: '홈', content: '' },
  //   { name: 'MUSE', content: <Muse /> },
  //   { name: '오디션', content: <Audition /> },
  // ];

  const [currentTab, setCurrentTab] = useState(0);
  const [currentNav, setCurrentNav] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const selectNavHandler = (index) => {
    setCurrentNav(index);
  };
  const data = [
    <Link to="/">
      <div className="menu_txt">홈</div>
    </Link>,
    <Link to="/muse">
      <div className="menu_txt">MUSE</div>
    </Link>,
    <Link to="/audition">
      <div className="menu_txt">오디션</div>
    </Link>,
  ];

  // const location = useLocation();

  // useEffect(() => {
  //   location.reload('/');
  // });

  return (
    <div>
      <div className="header_container">
        <div className="wrap_header">
          <li className="menu_list">
            <FaRegSmileWink />
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
        <div className="wrap_container">
          <div className="left_nav">
            <Link to="/">
              <li className="nav_list">
                <img
                  src="img/head_logo.png"
                  className="nav_list_head_logo"
                  alt="head"
                />
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

            {/* {menuList.map((menu, index) => (
              <li
                key={index}
                className={
                  currentNav === index ? 'navmenu focused_nav' : 'navmenu'
                }
                onClick={() => selectNavHandler(index)}
                aria-hidden="true"
              >
                {menu.name}
              </li>
            ))} */}
          </div>
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
            {isOpen ? <Signin modalHandler={modalHandler} /> : null}
            <li className="nav_login" onClick={modalHandler} aria-hidden="true">
              로그인
            </li>
            <Link to="/signup">
              <li className="nav_signup">회원가입</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
