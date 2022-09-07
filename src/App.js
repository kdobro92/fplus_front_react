// eslint-disable-next-line object-curly-newline
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Muse from './pages/Muse';
import MuseDetail from './pages/MuseDetail';
import Audition from './pages/Audition';
import Signin from './pages/Signin';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/muse" element={<Muse />} />
        <Route path="/musedetail" element={<MuseDetail />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
