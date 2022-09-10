import './Content.css';

function Content() {
  return (
    <div className="wrap_mp_content">
      <div className="content_row_1">1</div>
      <div className="content_row_2">
        <div className="mp_content_con">
          <p className="mp_content_tit">포트폴리오</p>
          <span className="mp_content_txt">
            개성과 매력이 돋보이는 사진을 올려주세요!
          </span>
          <span className="mp_content_more">더보기</span>
        </div>
        <div className="mp_content_img_con">
          <div className="aa">
            <input type="file" id="mp_file" />
            <img src="img/upload_mp.png" alt="mp_img" />
          </div>
          <div className="aa">
            <img src="img/upload_mp.png" alt="mp_img" />
          </div>
          <div className="aa">
            <img src="img/upload_mp.png" alt="mp_img" />
          </div>
          <div className="aa">
            <img src="img/upload_mp.png" alt="mp_img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
