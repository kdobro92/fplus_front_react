/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import json from '../../assets/dummyAudition';
import GenreAudi from './GenreAudi';
import './Audition.css';

function Audition() {
  const [audiList, setAudiList] = useState(json);

  return (
    <>
      <div className="wrap_title">
        <div className="title_con">
          <span>
            <img src="img/sound.png" alt="sound" />
          </span>
          오늘의 HOT한 MUSE!!
        </div>
      </div>
      <GenreAudi />
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {audiList.map((data, index) => (
              <Link to="/audidetail">
                <div key={index} className="card_whole">
                  <div className="card_top">
                    <img className="card_img" src={data.image} alt="card" />
                    <div className="card_new">New</div>
                    <div className="card_limit">마감임박</div>
                    <div className="card_circle">
                      <img
                        className="circle_img"
                        src={data.cir_image}
                        alt="circle"
                      />
                    </div>
                  </div>
                  <div className="card_middle">
                    <div className="card_title">{data.title}</div>
                    <div className="card_content">{data.content}</div>
                    <div className="card_tag">{data.tag}</div>
                    <div className="card_bottom">
                      <div className="card_date">{data.date}</div>
                      <button type="button" className="card_detail">
                        {data.detail}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {/* {audiArr2.map((data, index) => (
              <div key={index} className="card_whole">
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {/* {audiArr3.map((data, index) => (
              <div key={index} className="card_whole">
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Audition;
