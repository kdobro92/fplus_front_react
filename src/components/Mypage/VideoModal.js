/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoModal.css';

function VideoModal({ videoModalHandler, inputValue, setInputValue }) {
  const [videoUrl, setVideoUrl] = useState('');
  inputValue.video = videoUrl;
  console.log(videoUrl);
  const onChangeVideoUrl = (e) => {
    setVideoUrl(e.target.value);
  };

  const onClickCancelHandler = () => {
    videoModalHandler();
  };

  const onClickRegisterHandler = () => {
    alert('등록 되었습니다.');
    videoModalHandler();
    setVideoUrl('');
  };

  return (
    <div className="modal-video-background">
      <div className="modal-video-container">
        <div className="modal-video-view">
          <div className="modal-video-header">
            <img
              src="img/close_profile_btn.png"
              alt="close_btn"
              onClick={onClickCancelHandler}
              aria-hidden="true"
            />
          </div>
          <div className="url_con">
            <input
              type="text"
              placeholder="URL을 등록해주세요."
              onChange={onChangeVideoUrl}
            />
          </div>
          <div className="url_btn_con">
            <button type="button" onClick={onClickRegisterHandler}>
              등록
            </button>
            <button type="button" onClick={onClickCancelHandler}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
