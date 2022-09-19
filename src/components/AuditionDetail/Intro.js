import { useNavigate } from 'react-router-dom';
import './Intro.css';

function Intro() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="intro_menu">
        <div className="intro_con">
          <img
            src="img/arrow_back.png"
            alt="back"
            onClick={goBack}
            aria-hidden="true"
          />
          <span className="intro_menu_txt">오디션</span>
        </div>
      </div>
      <div className="wrap_audi_intro">
        <div className="audi_intro_txt">
          <h2>해녀의 부엌과 함께할 배우를 모집합니다.</h2>
          <p>해녀의부엌</p>
        </div>
      </div>
      <div className="audi_intro_info">
        <div className="audi_info_con">
          <div className="audi_info_con_row_1">
            <img src="img/audi_detail.png" alt="audi_detail" />
          </div>
          <div className="audi_info_con_row_2">
            <div className="audi_row_con">
              <li className="audi_type">모집 분야</li>
              <li className="audi_value">배우</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 연령</li>
              <li className="audi_value">무관</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">근무 지역</li>
              <li className="audi_value">제주시 영동</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">근무 기간</li>
              <li className="audi_value">미정</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 인원</li>
              <li className="audi_value">2명</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 기간</li>
              <li className="audi_value">2022-08-16-2022-09-20</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">성별</li>
              <li className="audi_value">여성</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">페이</li>
              <li className="audi_value">면접 후 결정</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">결과 발표</li>
              <li className="audi_value">합격자 개별통보</li>
            </div>
            <button type="button">오디션 지원하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
