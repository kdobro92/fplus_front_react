/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ modalHandler }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [accessToken, setAccessToken] = useState('');

  const userIdHandler = (e) => {
    setUsername(e.target.value);
  };

  const userPwdHandler = (e) => {
    setPassword(e.target.value);
  };

  // 서버에 로그인 요청
  const requestLoginHandler = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/login`,
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        navigate('/');
      });
  };

  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="modal_header">
          <img className="login_img" src="/img/login.png" alt="login" />
          <img
            className="close_btn"
            src="/img/close.png"
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
            onClick={requestLoginHandler}
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
          <button type="button" className="register">
            회원가입
          </button>
        </div>
        <div className="line_wrap">
          <span className="login_line" />
        </div>
        <div className="wrap_social">
          <div className="social_login">
            <div className="social_txt">간편한 소셜가입/로그인</div>
            <div className="social_btn">
              <button type="button" className="kakao_btn">
                <img src="/img/kakao.png" alt="kakao" />
              </button>
              <button type="button" className="naver_btn">
                <img src="/img/naver.png" alt="kakao" />
              </button>
              <button type="button" className="apple_btn">
                <img src="/img/apple.png" alt="kakao" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
