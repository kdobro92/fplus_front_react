import Banner from '../components/Mypage/Banner';
import Sidebar from '../components/Mypage/Sidebar';
import Content from '../components/Mypage/Content';
import './Mypage.css';

function Mypage() {
  return (
    <div className="wrap_mypage">
      <Banner />
      <Sidebar />
      <Content />
    </div>
  );
}

export default Mypage;
