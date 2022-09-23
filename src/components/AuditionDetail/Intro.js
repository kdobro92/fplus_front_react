/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Content from './Content';
import audiData from '../../assets/dummyAudition';
import './Intro.css';

function Intro() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [auditionList, setAuditionList] = useState(audiData);
  const [currentImg, setCurrentImg] = useState(audiData[id].audi_image);
  const [currentDetailImg, setCurrentDetailImg] = useState(
    audiData[id].audi_detail_img,
  );

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="intro_menu">
        <div className="intro_con">
          <img
            src="/img/arrow_back.png"
            alt="back"
            onClick={goBack}
            aria-hidden="true"
          />
          <span className="intro_menu_txt">오디션</span>
        </div>
      </div>
      <div className="wrap_audi_intro">
        <div className="audi_intro_txt">
          <h2>{auditionList[id].content}</h2>
          <p>{auditionList[id].title}</p>
        </div>
      </div>
      <div className="audi_intro_info">
        <div className="audi_info_con">
          <div className="audi_info_con_row_1">
            <img src={currentImg} alt="audi_detail" />
          </div>
          <div className="audi_info_con_row_2">
            <div className="audi_row_con">
              <li className="audi_type">모집 분야</li>
              <li className="audi_value">{auditionList[id].type}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 연령</li>
              <li className="audi_value">{auditionList[id].age}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">근무 지역</li>
              <li className="audi_value">{auditionList[id].place}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">근무 기간</li>
              <li className="audi_value">{auditionList[id].date}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 인원</li>
              <li className="audi_value">{auditionList[id].recruitment}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">모집 기간</li>
              <li className="audi_value">{auditionList[id].re_preiod}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">성별</li>
              <li className="audi_value">{auditionList[id].gender}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">페이</li>
              <li className="audi_value">{auditionList[id].payment}</li>
            </div>
            <div className="audi_row_con">
              <li className="audi_type">결과 발표</li>
              <li className="audi_value">{auditionList[id].result}</li>
            </div>
            <button type="button">오디션 지원하기</button>
          </div>
        </div>
      </div>
      <Content currentDetailImg={currentDetailImg} />
    </>
  );
}

export default Intro;
