import { IoIosArrowForward } from 'react-icons/io';
import './Banner.css';

function Banner() {
  return (
    <>
      <div className="wrap_banner">
        <img src="img/banner.png" alt="banner" />
      </div>
      <p>
        홈
        <span>
          <IoIosArrowForward />
        </span>
        MUSE
      </p>
    </>
  );
}

export default Banner;
