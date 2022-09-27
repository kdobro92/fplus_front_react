/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailModal from './DetailModal';
import Image from './Image';
import './Modal.css';

function Modal({ modalHandler }) {
  const navigate = useNavigate();
  const [file_name, setFile_name] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const requestRegister = () => {
    alert('등록되었습니다.');
    modalHandler();
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
              onClick={modalHandler}
              aria-hidden="true"
            />
          </div>
          <div className="divide-half">
            <div className="flex_row_1">
              <h3>프로필 대표이미지</h3>
              <Image image={file_name} setFile_name={setFile_name} />
              <h4 className="body_info_3">신체정보(선택)</h4>
              <div className="body_info2">
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
              <h4 className="video1">영상</h4>
              <div className="profile_video">
                <img src="img/register_profile_video.png" alt="profile" />
              </div>
            </div>
            <div className="flex_row_2">
              <div className="flex_row_2_2">
                <h4>나의 상태</h4>
                <div className="ccc">
                  <input type="text" placeholder="오디션을 찾고 있어요." />
                  <img
                    src="img/vector-5.png"
                    alt="arrow-down"
                    className="audi_arrow"
                    onClick={detailModalHandler}
                    aria-hidden="true"
                  />
                </div>
                <h4>자기소개</h4>
                <input
                  type="text"
                  placeholder="한 줄 이상의 자기소개를 입력해주세요."
                />
                <div className="ccc">
                  <h4>소속</h4>
                  <input type="text" />
                  <img
                    src="img/vector-5.png"
                    alt="arrow-down"
                    className="belong_arrow"
                  />
                </div>
                <h4>직업</h4>
                <div className="aaa">
                  <input type="text" placeholder="직업을 선택해주세요." />
                  <h4>위치/지역</h4>
                  <input type="text" placeholder="위치를 선택해주세요." />
                  <h4>학력/경력</h4>
                  <input type="text" placeholder="학력/경력을 선택해주세요." />
                  <h4>참여/수상 경력</h4>
                  <input
                    type="text"
                    placeholder="참여/수상 연도별 입력해주세요. URL 참조가능"
                  />
                  <h4>소셜/웹사이트</h4>
                  <div className="bbb">
                    <img src="img/insta.png" alt="social" />
                    <img src="img/youtube.png" alt="social" />
                  </div>
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
