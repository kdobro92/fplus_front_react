import { IoIosArrowForward } from 'react-icons/io';
import './Banner.css';

function Banner() {
  return (
    <>
      <div className="wrap_banner">
        <img src="img/banner.png" alt="banner" />
      </div>
      <div className="fil_container">
        <div className="fil_txt">
          홈
          <IoIosArrowForward className="arrow_icon" />
          오디션
        </div>
      </div>
    </>
  );
}

export default Banner;
