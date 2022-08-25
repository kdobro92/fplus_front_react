import './Login.css';

function Login() {
  return (
    <div className="modal_background">
      <div className="modal_container">
        <div className="modal_header" aria-hidden="true">
          <img className="modal-close" src="img/3d.png" alt="close" />
          {/* <img className="modal-close" src="img/close.png" alt="close" /> */}
        </div>
        <div className="modal_bottom">
          <input type="text" className="login_id" placeholder="아이디" />
          <input type="password" className="login_pw" placeholder="비밀번호" />
        </div>
      </div>
    </div>
  );
}

export default Login;
