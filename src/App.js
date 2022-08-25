import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Signup from './pages/Signup';
// import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/about" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
