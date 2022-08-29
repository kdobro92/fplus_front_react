// eslint-disable-next-line object-curly-newline
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Muse from './pages/Muse';
import Audition from './pages/Audition';
import Signin from './pages/Signin';
import Signup from './pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/muse" element={<Muse />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
