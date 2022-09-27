/* eslint-disable no-useless-escape */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [email, setUserId] = useState('');
  const [password, setUserPwd] = useState('');
  const [rePassword, setUserRePwd] = useState('');
  const [friendId, setFriendId] = useState('');
  const [userRole, setUserRole] = useState('');

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

    if (e.target.value === rePassword) {
      setConfirmPasswordError(false);
    } else setConfirmPasswordError(true);
    setUserPwd(e.target.value);
  };

  // 유효성검사 유저 비빌번호 재입력 정규표현식 || 사용자에게 입력받는 RePwd를 userRePwd 상태관리 변수에 최신화
  const isValidRePwd = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setUserRePwd(e.target.value);
  };

  // 친구 초대 추천인 아이디
  const isValidFriendId = (e) => {
    setFriendId(e.target.value);
  };

  const userRoleHandler = (e) => {
    setUserRole(e.target.value);
  };

  // 유저아이디, 비밀번호, 비밀번호 재입력 값들이 다르면, 에러메세지 출력
  const validation = () => {
    if (!email) setUserIdError(true);
    if (!password) setPasswordError(true);
    if (!rePassword) setConfirmPasswordError(true);
  };

  // 유저 아이디 중복 검사
  const duplicateUserCheck = async () => {
    // if (email === 'test@test.com') {
    //   alert('사용 가능한 아이디입니다.');
    // } else {
    //   alert('이미 사용중인 아이디입니다.');
    // }
    if (userIdError) return;
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/emailCheck/${email}/exists`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.data === false) {
          alert('사용 가능한 ID입니다.');
        } else if (res.data === true) {
          alert('중복된 ID입니다.');
        } else {
          console.log('error');
        }
      });
  };

  // 서버에 유저 정보를 담아 요청하는 함수
  const signupHandler = async () => {
    if (validation()) return;
    alert('회원가입이 완료되었습니다.!');
    navigate('/');
    if (userIdError || passwordError || confirmPasswordError) {
      alert('다시 확인해주세요.');
    } else if (!email || !password || !rePassword) {
      alert('모든 항목은 필수 입니다.');
    } else if (password !== rePassword) {
      alert('비번확인');
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/signup`,
          {
            email,
            password,
            friendId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
          { withCredentials: true },
        )
        .then((res) => {
          console.log(res.data);
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        });
    }
  };

  return (
    <div className="wrap_signup">
      <section className="signup_container">
        <form name="signup">
          <input type="hidden" value={userRole} onChange={userRoleHandler} />
          <div className="id_txt">
            아이디<span>(필수)</span>
          </div>
          <div className="id_container">
            <input
              type="email"
              placeholder="이메일 형식"
              onChange={isValidId}
            />
            <button
              type="button"
              className="inval_btn"
              onClick={duplicateUserCheck}
            >
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
          <input type="text" onChange={isValidFriendId} />

          <div className="sns-container">
            <li>
              <img src="img/kakao.png" alt="kakao" />
              <h4>카카오</h4>
            </li>
            <li>
              <img src="img/naver.png" alt="kakao" />
              <h4>네이버</h4>
            </li>
            <li>
              <img src="img/apple.png" alt="kakao" />
              <h4>애플</h4>
            </li>
          </div>
          <div className="find_btn">
            <button type="button" className="regi_btn" onClick={signupHandler}>
              확인
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Signup;
