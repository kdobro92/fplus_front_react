/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailModal from './DetailModal';
import Image from './Image';
import './ModalPortfolio.css';

function Modal({ onClickPortfolio }) {
  const navigate = useNavigate();
  const [file_name, setFile_name] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const requestRegister = () => {
    alert('등록되었습니다.');
    onClickPortfolio();
    navigate('/mypageregister');
  };

  const detailModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="modal-background">
      <div className="modal-whole-container">
        <div className="modal-view">
          <div className="modal-header">
            <img
              src="img/close_profile_btn.png"
              alt="close_btn"
              onClick={onClickPortfolio}
              aria-hidden="true"
            />
          </div>
          <div className="divide-half">
            <div className="flex_row_1">
              <h3>포트폴리오 대표이미지</h3>
              <Image image={file_name} setFile_name={setFile_name} />
              <h4 className="video">영상</h4>
              <div className="profile_video">
                <img src="img/register_profile_video.png" alt="profile" />
              </div>
              <h4>소셜/웹사이트</h4>
              <div className="bbb_bbb">
                <img src="img/insta2.png" alt="social" />
                <img src="img/youtube2.png" alt="social" />
              </div>
            </div>
            <div className="flex_row_2">
              <div className="flex_row_2_2_2">
                <h3 className="flew_row_title">제목 입력</h3>
                <input type="text" placeholder="열정을 갖은 배우" />
                <h4>직업</h4>
                <div className="ccc_ccc">
                  <input type="text" placeholder="프리랜서" />
                  <img
                    src="img/vector-5.png"
                    alt="arrow-down"
                    className="belong_arrow"
                  />
                </div>
                <h4>이름</h4>
                <input type="text" placeholder="활동 이름을 입력해주세요." />
                <h4>카테고리(작품분류)</h4>
                <div className="aaa">
                  <input
                    type="text"
                    placeholder="포트폴리오의 가테고리를 선택해주세요."
                  />
                  <h4>위치/지역</h4>
                  <input type="text" placeholder="재능/특기 등록해주세요." />
                  <h4>학력/경력</h4>
                  <input type="text" placeholder="태그를 등록해주세요." />
                  <h4>신체정보(선택)</h4>
                  <div className="body_info2_2">
                    <ul className="body_info2_ul">
                      <li>
                        <p>HEIGHT</p>
                        <span>-</span>
                      </li>
                      <li>
                        <p>BUST</p>
                        <span>-</span>
                      </li>
                      <li>
                        <p>SHOES</p>
                        <span>-</span>
                      </li>
                      <li>
                        <p>WAIST</p>
                        <span>-</span>
                      </li>
                      <li>
                        <p>HAIR</p>
                        <span>-</span>
                      </li>
                      <li>
                        <p>HIP</p>
                        <span>-</span>
                      </li>
                    </ul>
                  </div>
                  <h4>참여/수상 경력</h4>
                  <input
                    type="text"
                    placeholder="참여/수상 연도별 입력해주세요. URL 참조가능"
                  />
                </div>
                <div className="btn_container">
                  <button
                    type="button"
                    className="save-btn"
                    onClick={requestRegister}
                  >
                    등록하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
