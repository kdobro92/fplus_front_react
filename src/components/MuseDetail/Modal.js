/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import './Modal.css';

function Modal({ onClickModalHandler }) {
  const navigate = useNavigate();

  const requestSuggestMuse = () => {
    alert('오디션을 제안했습니다.!');
    onClickModalHandler();
  };

  return (
    <div className="modal-background">
      <div className="modal-portfolio-container">
        <div className="modal-portfolio-view">
          <div className="modal-portfolio-header">
            <img src="/img/audi_suggest.png" alt="header" />
            <img
              src="/img/close_audi_sug.png"
              alt="close"
              onClick={onClickModalHandler}
              aria-hidden="true"
            />
          </div>
          <section>
            <form>
              <div className="sug_form_con">
                <div className="sug_form_chk">
                  <input type="checkbox" />
                  <button type="button">
                    <span>로그인이 필요합니다.</span>
                  </button>
                  <img src="/img/sug_arrow_more.png" alt="arrow" />
                </div>
                <div className="sug_form_chk">
                  <input type="checkbox" />
                  <button type="button">
                    <span>프로필을 등록해주세요.</span>
                  </button>
                  <img src="/img/sug_arrow_more.png" alt="arrow" />
                </div>
                <div className="sug_form_chk">
                  <input type="checkbox" />
                  <button type="button">
                    <span>사업자를 등록해주세요.</span>
                  </button>
                  <img src="/img/sug_arrow_more.png" alt="arrow" />
                </div>
                <div className="sug_form_chk">
                  <input type="checkbox" />
                  <button type="button">
                    <span>정보공개 약관에 동의하십니까?</span>
                  </button>
                  <img src="/img/sug_arrow_more.png" alt="arrow" />
                </div>
              </div>
              <div className="sug_form_btn_con">
                <button
                  type="button"
                  className="sug_form_btn"
                  onClick={requestSuggestMuse}
                >
                  제안하기
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
