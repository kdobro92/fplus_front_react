// import { useParams } from 'react-router-dom';
import Intro from '../components/MuseDetail/Intro';
import Career from '../components/MuseDetail/Career';
import './MuseDetail.css';

function MuseDeatail() {
  //   const { id } = useParams();

  return (
    <div className="museDetail_con">
      <Intro />
      <Career />
    </div>
  );
}

export default MuseDeatail;
