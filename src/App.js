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
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/w1" element={<Main />} />
        <Route path="/w1/muse" element={<Muse />} />
        <Route path="/w1/musedetail" element={<MuseDetail />} />
        <Route path="/w1/audition" element={<Audition />} />
        <Route path="/w1/audidetail" element={<AuditionDetail />} />
        <Route path="/w1/Login" element={<Login />} />
        <Route path="/w1/signup" element={<Signup />} />
        <Route path="/w1/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
