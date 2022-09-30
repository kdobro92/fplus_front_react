import Banner from '../components/MypageRegister/Banner';
import Sidebar from '../components/MypageRegister/Sidebar';
import Content from '../components/MypageRegister/Content';
import './Mypage.css';

function MypageRegister() {
  return (
    <div className="wrap_mypage">
      <Banner />
      <Sidebar />
      <Content />
    </div>
  );
}

export default MypageRegister;
