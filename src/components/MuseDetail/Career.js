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
        </div>
        <div className="career_right">
          <div className="career_txt_con">
            <h3 className="career_txt">대표작</h3>
            <button type="button" className="more_right_btn">
              <span className="more_right_txt">더보기</span>
              <img src="img/arrow_front.png" alt="more" className="more_img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
