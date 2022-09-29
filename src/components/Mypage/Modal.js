/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoModal from './VideoModal';
import Image from './Image';
import './Modal.css';

function Modal({ modalHandler }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [inputValue, setInputValue] = useState({
    status: '',
    intro: '',
    team: '',
    job: '',
    place: '',
    career: '',
    join: '',
    social: '',
    image: '',
    video: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const videoModalHandler = () => {
    setOpenVideoModal(!openVideoModal);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(inputValue).includes('')) {
      alert('모든 항목은 필수 입니다.');
    } else {
      const data = {
        status: inputValue.status,
        intro: inputValue.intro,
        team: inputValue.team,
        job: inputValue.job,
        place: inputValue.place,
        career: inputValue.career,
        join: inputValue.join,
        image: inputValue.image,
        video: inputValue.video,
      };
      try {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/profile`, data, {
            headers: {
              'content-type': 'application/json',
            },
          })
          .then((res) => {
            console.log(res.data);
            alert('등록되었습니다.');
            modalHandler();
          });
      } catch (error) {
        console.log(error);
      }
    }
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
              <div className="flex_row_1_img">
                <Image inputValue={inputValue} setInputValue={setInputValue} />
              </div>
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
              {openVideoModal ? (
                <VideoModal
                  videoModalHandler={videoModalHandler}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              ) : null}
              {inputValue.video ? (
                <div
                  className="profile_video"
                  onClick={videoModalHandler}
                  aria-hidden="true"
                >
                  <ReactPlayer
                    url={inputValue.video}
                    width="344px"
                    height="196px"
                    playing="true"
                  />
                </div>
              ) : (
                <div
                  className="profile_video"
                  onClick={videoModalHandler}
                  aria-hidden="true"
                >
                  <img src="img/register_profile_video.png" alt="profile" />
                </div>
              )}
            </div>
            <div className="flex_row_2">
              <div className="flex_row_2_2">
                <h4>나의 상태</h4>
                <form onSubmit={onSubmit}>
                  <div className="ccc">
                    <input
                      type="text"
                      name="status"
                      placeholder="오디션을 찾고 있어요."
                      onChange={onChangeHandler}
                    />
                    <img
                      src="img/vector-5.png"
                      alt="arrow-down"
                      className="audi_arrow"
                      aria-hidden="true"
                    />
                    <h4>자기소개</h4>
                    <input
                      type="text"
                      name="intro"
                      placeholder="한 줄 이상의 자기소개를 입력해주세요."
                      onChange={onChangeHandler}
                    />
                    <h4>소속</h4>
                    <input type="text" name="team" onChange={onChangeHandler} />
                    <img
                      src="img/vector-5.png"
                      alt="arrow-down"
                      className="belong_arrow"
                    />
                    <div className="underline" />
                  </div>
                  <div className="aaa">
                    <h4>직업</h4>
                    <input
                      type="text"
                      name="job"
                      placeholder="직업을 선택해주세요."
                      onChange={onChangeHandler}
                    />
                    <h4>위치/지역</h4>
                    <input
                      type="text"
                      name="place"
                      placeholder="위치를 선택해주세요."
                      onChange={onChangeHandler}
                    />
                    <h4>학력/경력</h4>
                    <input
                      type="text"
                      name="career"
                      placeholder="학력/경력을 선택해주세요."
                      onChange={onChangeHandler}
                    />
                    <h4>참여/수상 경력</h4>
                    <input
                      type="text"
                      name="join"
                      placeholder="참여/수상 연도별 입력해주세요. URL 참조가능"
                      onChange={onChangeHandler}
                    />
                    <h4>소셜/웹사이트</h4>
                    <input
                      type="text"
                      name="join"
                      placeholder="소셜 아이디/웹사이트를 참조해주세요. (URL 추천)"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="btn_container">
                    <button
                      type="submit"
                      className="pre_save_btn"
                      // onClick={onSubmit}
                    >
                      임시저장
                    </button>
                    <button
                      type="submit"
                      className="save_btn"
                      // onClick={onSubmit}
                    >
                      등록하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
