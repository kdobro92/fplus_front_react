/* eslint-disable jsx-a11y/media-has-caption */
import './Career.css';

function Career() {
  return (
    <div className="wrap_career">
      <div className="career_con">
        <div className="career_left">
          <div className="career_txt_con">
            <h3 className="career_txt">참여/수상경력</h3>
            <button type="button" className="career_more_btn">
              <span className="more_txt">더보기</span>
              <img src="img/arrow_front.png" alt="more" className="more_img" />
            </button>
          </div>
          <div className="car_content">
            <li className="car_cotent_con">
              <h3 className="content_num">21</h3>
              <h3 className="content_txt">SEOUL 365 FASHION SHOW</h3>
            </li>
            <li className="car_cotent_con">
              <h3 className="content_num">20</h3>
              <h3 className="content_txt">
                MAG & LOGAN RED CARPET BAEK OK SU HANBOK KWAK HYUN JU COLLECTION
                20 S/S DE REVE 20 S/S O.F.F FASHION SHOW
              </h3>
            </li>
            <li className="car_cotent_con">
              <h3 className="content_num">22</h3>
              <h3 className="content_txt">
                MAG & LOGAN RED CARPET BAEK OK SU HANBOK KWAK HYUN JU COLLECTION
                20 S/S DE REVE 20 S/S O.F.F FASHION SHOW
              </h3>
            </li>
            <li className="car_cotent_con">
              <h3 className="content_num">23</h3>
              <h3 className="content_txt">
                MAG & LOGAN RED CARPET BAEK OK SU HANBOK KWAK HYUN JU COLLECTION
                20 S/S DE REVE 20 S/S O.F.F FASHION SHOW
              </h3>
            </li>
          </div>
          <div className="wrap_social_txt">
            <div className="social_con">소셜/웹사이트</div>
            <div className="social_link">
              <span className="social_list">인스타그램</span>
              <span className="social_list">페이스북</span>
              <span className="social_list">네이버TV</span>
              <span className="social_list">V LIVE</span>
            </div>
          </div>
        </div>
        <div className="career_right">
          <div className="career_txt_con_right">
            <h3 className="career_txt">대표작</h3>
            <button type="button" className="more_right_btn">
              <span className="more_right_txt">더보기</span>
              <img src="img/arrow_front.png" alt="more" className="more_img" />
            </button>
          </div>
          <div className="wrap_mp_con">
            <div className="mp_con">
              <li className="mp_list">
                <img
                  src="img/mp_list1.png"
                  alt="mp_list"
                  className="mp_list_img"
                />
              </li>
              <li className="mp_list">
                <img
                  src="img/mp_list2.png"
                  alt="mp_list"
                  className="mp_list_img"
                />
              </li>
              <li className="mp_list">
                <img
                  src="img/mp_list3.png"
                  alt="mp_list"
                  className="mp_list_img"
                />
              </li>
              <li className="mp_list">
                <img
                  src="img/mp_list4.png"
                  alt="mp_list"
                  className="mp_list_img"
                />
              </li>
            </div>
          </div>
          <div className="wrap_video">
            <div className="video_con">영상</div>
            <button type="button" className="more_txt_btn">
              <span className="more_txt_video">더보기</span>
              <img src="img/arrow_front.png" alt="more" className="more_img" />
            </button>
          </div>
          <video width="672" loop autoPlay muted className="video">
            <source src="img/nike.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Career;
