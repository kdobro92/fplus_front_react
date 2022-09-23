/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { GrClose } from 'react-icons/gr';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';

function Modal({ modalHandler, setIsTrue }) {
  const [file_name, setFile_name] = useState('');
  const navigate = useNavigate();

  const requestRegister = () => {
    alert('등록되었습니다.');
    modalHandler();
    navigate('/mypageregister');
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-view">
          <div className="modal-header">
            <GrClose onClick={modalHandler} className="close_icon" />
          </div>
          <div className="divide-half">
            <div className="aa">
              <Image image={file_name} setFile_name={setFile_name} />
            </div>
            <div className="flex_row_2">
              <div className="flex_row_2_2">
                <input type="text" placeholder="이름" />
                <input type="text" placeholder="사는지역" />
                <input type="text" placeholder="성별" />
                <input type="text" placeholder="생년월일" />
              </div>
              <div className="flex_row_2_2">
                <h4>신체정보</h4>
                <input type="text" placeholder="HEIGHT" />
                <input type="text" placeholder="BUST" />
                <input type="text" placeholder="SHOES" />
                <input type="text" placeholder="WAIST" />
                <input type="text" placeholder="HAIR" />
                <input type="text" placeholder="HIP" />
              </div>
            </div>
          </div>
          <div className="bb">
            <div className="btn_container">
              <button
                type="button"
                className="close-btn"
                onClick={modalHandler}
              >
                취소
              </button>
              <button
                type="button"
                className="save-btn"
                onClick={requestRegister}
              >
                수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
