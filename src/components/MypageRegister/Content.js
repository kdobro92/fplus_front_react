/* eslint-disable react/no-unescaped-entities */

function Content() {
  return (
    <div className="wrap_mp_content">
      <div className="content_row_1" />
      <div className="content_row_2">
        <div className="mp_content_con">
          <p className="mp_content_tit">포트폴리오</p>
          <span className="mp_content_txt">
            개성과 매력이 돋보이는 사진을 올려주세요!
          </span>
          <div className="more_port_con">
            <span className="more_more">더보기</span>
            <img src="img/arrow_front.png" alt="more" className="more_img" />
          </div>
        </div>
        <div className="mp_content_img_con">
          <div className="mp_upload">
            <input
              type="file"
              className="mp_file"
              src="img/upload_mp.png"
              accept="image/jpg,image/png,image/jpeg"
            />
            <img src="img/iu1.png" alt="mp_img" />
          </div>
          <div className="mp_upload">
            <input
              type="file"
              className="mp_file"
              src="img/upload_mp.png"
              accept="image/jpg,image/png,image/jpeg"
            />
            <img src="img/iu2.jpeg" alt="mp_img" />
          </div>
          <div className="mp_upload">
            <input
              type="file"
              className="mp_file"
              src="img/upload_mp.png"
              accept="image/jpg,image/png,image/jpeg"
            />
            <img src="img/iu3.png" alt="mp_img" />
          </div>
          <div className="mp_upload">
            <input
              type="file"
              className="mp_file"
              src="img/upload_mp.png"
              accept="image/jpg,image/png,image/jpeg"
            />
            <img src="img/iu4.png" alt="mp_img" />
          </div>
        </div>
        <div className="user_content_con">
          <div className="user_content_list">
            <div className="user_mp">
              <div className="user_mp_txt">
                <p>참여/수상경력</p>
                <span>예시) 2022년 영화'애드위즈' 출연</span>
                <div className="more_con">
                  <span className="more_more">더보기</span>
                  <img
                    src="img/arrow_front.png"
                    alt="more"
                    className="more_img"
                  />
                </div>
              </div>
              <div className="user_upload_awards">
                <img src="img/upload_mp_list.png" alt="mp" />
              </div>
            </div>
            <div className="user_mp">
              <div className="user_mp_txt">
                <p>대표작</p>
                <span>뮤즈의 대표작 포스터를 올려주시면, 매칭확률 UP!</span>
                <div className="more_con">
                  <span className="more_more">더보기</span>
                  <img
                    src="img/arrow_front.png"
                    alt="more"
                    className="more_img"
                  />
                </div>
              </div>
              <div className="user_upload_awards">
                <img src="img/upload_mp_list.png" alt="mp" />
              </div>
            </div>
            <div className="user_mp">
              <div className="user_mp_txt">
                <p>소셜/웹사이트</p>
                <span>인스타그램, 유튜브 등 SNS/웹사이트를 등록해주세요.</span>
                <div className="more_con">
                  <span className="more_more">더보기</span>
                  <img
                    src="img/arrow_front.png"
                    alt="more"
                    className="more_img"
                  />
                </div>
              </div>
              <div className="user_upload_awards">
                <img src="img/upload_mp_list.png" alt="mp" />
              </div>
            </div>
            <div className="user_mp">
              <div className="user_mp_txt">
                <p>영상</p>
                <span>오디션에 도움이 될 영상이 있다면 올려주세요.</span>
                <div className="more_con">
                  <span className="more_more">더보기</span>
                  <img
                    src="img/arrow_front.png"
                    alt="more"
                    className="more_img"
                  />
                </div>
              </div>
              <div className="user_upload_awards">
                <img src="img/upload_mp_list.png" alt="mp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
