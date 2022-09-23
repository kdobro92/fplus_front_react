// eslint-disable-next-line object-curly-newline
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Muse from './pages/Muse';
import MuseDetail from './pages/MuseDetail';
import Audition from './pages/Audition';
import AuditionDetail from './pages/AuditionDetail';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage';
import MypageRegister from './pages/MypageRegister';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/muse" element={<Muse />} />
        <Route path="/musedetail/:id" element={<MuseDetail />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/audidetail/:id" element={<AuditionDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypageregister" element={<MypageRegister />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
