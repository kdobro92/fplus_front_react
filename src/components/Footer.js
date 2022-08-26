import './Footer.css';

function Footer() {
  return (
    <div className="wrap_footer">
      <div className="left_col">
        <div className="left_col_4">
          <img src="img/footer_logo.png" alt="footer" />
        </div>
        <div className="left_col_6">
          <ul>
            <li>(주)애드위즈컴퍼니</li>
            <li>서울 송파구 백제고분로 202</li>
            <li>대표이사 : 신은진 사업자등록번호: 340-99-01002</li>
            <li>전화 : 02-420-9330</li>
            <li>ALL RIGHTS RESERVED. 2019 © adwizcompany</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
      </div>
      <div className="right_col">
        <div className="right_col_4">
          <div className="right_col_1">
            <ul>
              <li>서비스소개</li>
              <li>공지사항</li>
              <li>운영정책</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
          <div className="right_col_2">
            <ul>
              <li>자주묻는질문</li>
              <li>문의하기</li>
              <li>광고하기</li>
            </ul>
          </div>
        </div>
        <div className="right_col_6">
          <button type="button">
            <img src="img/google_app.png" alt="app" />
          </button>
          <button type="button">
            <img src="img/apple_app.png" alt="app" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
