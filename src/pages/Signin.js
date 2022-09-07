import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Signin.css';

function Signin({ modalHandler, loginHandler }) {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  const userPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

  const totalData = [userId, userPwd];
  console.log(totalData);
  // 서버에 로그인 요청
  // const requestLoginHandler = async () => {
  //   await axios
  //     .post(
  //       'http://localhost:8090/login',
  //       { totalData },
  //       { withCredentials: true },
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="modal_header">
          <img className="login_img" src="img/login.png" alt="login" />
          <img
            className="close_btn"
            src="img/close.png"
            alt="close"
            onClick={modalHandler}
            aria-hidden="true"
          />
        </div>
        <div className="modal_middle">
          <input
            type="text"
            className="login_id"
            placeholder="아이디"
            onChange={userIdHandler}
          />
          <input
            type="password"
            className="login_pw"
            placeholder="비밀번호"
            onChange={userPwdHandler}
          />
        </div>
        <div className="modal_bottom">
          <div className="wrap_login">
            <input type="checkbox" className="login_chk" />
            <span className="login_txt">로그인 상태 유지</span>
          </div>
        </div>
        <div className="login_btn_con">
          <button
            type="button"
            className="login_btn"
            // onClick={requestLoginHandler}
            onClick={loginHandler}
          >
            로그인
          </button>
        </div>
        <div className="login_menu">
          <button type="button" className="find_pw">
            비밀번호 찾기
          </button>
          <button type="button" className="find_id">
            아이디 찾기
          </button>
          <Link to="/signup">
            <button type="button" className="register">
              회원가입
            </button>
          </Link>
        </div>
        <div className="line_wrap">
          <span className="login_line" />
        </div>
        <div className="wrap_social">
          <div className="social_login">
            <div className="social_txt">간편한 소셜가입/로그인</div>
            <div className="social_btn">
              <button type="button" className="kakao_btn">
                <img src="img/kakao.png" alt="kakao" />
              </button>
              <button type="button" className="naver_btn">
                <img src="img/naver.png" alt="kakao" />
              </button>
              <button type="button" className="apple_btn">
                <img src="img/apple.png" alt="kakao" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
