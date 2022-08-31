/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import { useState } from 'react';
import './Signup.css';

function Signup() {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userRePwd, setUserRePwd] = useState('');

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // 유효성검사 유저 아이디 정규표현식 || 사용자에게 입력받는 id를 userId 상태관리 변수에 최신화
  const isValidId = (e) => {
    const userIdRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (userIdRegex.test(e.target.value)) {
      setUserIdError(false);
    } else setUserIdError(true);
    setUserId(e.target.value);
  };

  // 유효성검사 유저 비밀번호 정규표현식 || 사용자에게 입력받는 pwd를 userPwd 상태관리 변수에 최신화
  const isValidPwd = (e) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (passwordRegex.test(e.target.value)) {
      setPasswordError(false);
    } else setPasswordError(true);

    if (e.target.value === userRePwd) {
      setConfirmPasswordError(false);
    } else setConfirmPasswordError(true);
    setUserPwd(e.target.value);
  };

  // 유효성검사 유저 비빌번호 재입력 정규표현식 || 사용자에게 입력받는 RePwd를 userRePwd 상태관리 변수에 최신화
  const isValidRePwd = (e) => {
    if (userPwd === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setUserRePwd(e.target.value);
  };

  // 유저아이디, 비밀번호, 비밀번호 재입력 값들이 다르면, 에러메세지 출력
  const validation = () => {
    if (!userId) setUserIdError(true);
    if (!userPwd) setPasswordError(true);
    if (!userRePwd) setConfirmPasswordError(true);
  };

  // 유저 아이디 중복 검사
  const sameIdCheck = async () => {
    await axios
      .post(
        'http://localhost:8080/go_create',
        {
          userId,
        },
        { withCredentials: true },
      )
      .then((res) => {
        alert('사용 가능한 Id입니다.');
        console.log(res);
      });
  };
  // 서버에 요청할 모든 유저 정보
  const userInfo = [userId, userPwd, userRePwd];

  // 서버에 유저 정보를 담아 요청하는 함수
  const signupHandler = async () => {
    if (validation()) return;
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
      <div className="signup_container">
        <div className="id_txt">
          아이디<span>(필수)</span>
        </div>
        <div className="id_container">
          <input type="email" placeholder="이메일 형식" onChange={isValidId} />
          <button type="button" className="inval_btn" onClick={sameIdCheck}>
            중복확인
          </button>
        </div>
        {userIdError && (
          <div className="invalid-input">
            *이메일 형식으로 입력해주세요(ex. fplus@adwiz.com)
          </div>
        )}
        <div className="pwd_txt">
          비밀번호<span>(필수)</span>
        </div>
        <input
          type="password"
          placeholder="숫자, 영문, 특수문자 조합 최소 8자"
          onChange={isValidPwd}
        />
        {passwordError && (
          <div className="invalid-input">
            *숫자,영문,특수문자 조합 최소 8자를 조합해주세요.
          </div>
        )}
        <input
          type="password"
          placeholder="비밀번호 재입력"
          onChange={isValidRePwd}
        />
        {confirmPasswordError && (
          <div className="invalid-input">*비밀번호를 다시 확인해주세요.</div>
        )}
        <div className="friend_txt">친구 초대 추천인 아이디</div>
        <input type="text" />
        <div className="find_btn">
          <button type="button" className="regi_btn" onClick={signupHandler}>
            확인
          </button>
        </div>
      </div>
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
