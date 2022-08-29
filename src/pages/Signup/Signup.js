/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import { useState } from 'react';
import './Signup.css';

function Signup() {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userRePwd, setUserRePwd] = useState('');

  // 유효성검사 유저 아이디 정규표현식
  const isValidId = () => {
    const emailFailMessage = document.querySelector('.email-invalid-message');
    // 계정@도메인.최상위도메인
    if ('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'.test(userId)) {
      emailFailMessage.classList.add('change');
    } else {
      emailFailMessage.classList.remove('change');
    }
  };

  // 유효성검사 유저 비밀번호 정규표현식
  const isValidPwd = () => {
    const passwordFailMessage = document.querySelector(
      '.password-invalid-message',
    );
    // 최소 8 자, 최소 하나의 알파벳, 하나의 숫자 및 하나의 특수 문자 :
    if (/(?=.*\d)(?=.*[a-zA-ZS]).{8,}/.test(userPwd)) {
      passwordFailMessage.classList.add('change');
    } else {
      passwordFailMessage.classList.remove('change');
    }
  };

  const isValidRePwd = () => {
    const repasswordFailMessage = document.querySelector(
      '.repassword-invalid-message',
    );
    if (userPwd !== userRePwd) {
      repasswordFailMessage.classList.add('change');
    } else {
      repasswordFailMessage.classList.remove('change');
    }
  };

  // 사용자에게 입력받는 id를 userId 상태관리 변수에 최신화
  const userIdHandler = (e) => {
    setUserId(e.target.value);
  };

  // 사용자에게 입력받는 pwd를 userPwd 상태관리 변수에 최신화
  const userPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

  // 사용자에게 입력받는 RePwd를 userRePwd 상태관리 변수에 최신화
  const userRePwdHandler = (e) => {
    setUserRePwd(e.target.value);
  };

  // 서버에 요청할 모든 유저 정보
  const userInfo = [userId, userPwd, userRePwd];

  // 서버에 유저 정보를 담아 요청하는 함수
  const signupHandler = async () => {
    await axios
      .post(
        'http://localhost:8080/go_create',
        {
          userInfo,
        },
        { withCredentials: true },
      )
      .then((res) => {
        alert('회원가입이 완료되었습니다.');
        console.log(res);
      });
  };

  return (
    <div className="wrap_signup">
      <div>아이디(필수)</div>
      <input
        type="text"
        placeholder="이메일 형식"
        onChange={(e) => isValidId(userIdHandler(e.target.value))}
      />
      <div className="email-invalid-message change">
        이메일 형식으로 입력해주세요(ex. fplus@adwiz.com)
      </div>
      <button type="button">중복확인</button>
      <div>비밀번호(필수)</div>
      <input
        type="password"
        placeholder="숫자, 영문, 특수문자 조합 최소 8자"
        onChange={(e) => isValidPwd(userPwdHandler(e.target.value))}
      />
      <div className="email-invalid-message change">
        *숫자,영문,특수문자 조합 최소 8자를 조합해주세요.
      </div>
      <input
        type="password"
        placeholder="비밀번호 재입력"
        onChange={(e) => isValidRePwd(userRePwdHandler(e.target.value))}
      />
      <div>친구 초대 추천인 아이디</div>
      <input type="text" />
      <button type="button" onClick={signupHandler}>
        확인
      </button>
    </div>
    // <div className="wrap_signup">
    //   <div className="menu_text">{'홈 > 회원가입'}</div>
    //   <div className="signup_container">
    //     <div className="mid_row">
    //       <ul>
    //         <li className="num">1</li>
    //         <li className="num">2</li>
    //         <li className="num">3</li>
    //         <li className="num">4</li>
    //         <li className="num">5</li>
    //       </ul>
    //     </div>
    //     <div className="regi_method_txt">가입방법선택</div>
    //   </div>
    // </div>
  );
}

export default Signup;
