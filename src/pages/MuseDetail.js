// import { useParams } from 'react-router-dom';
import Filter from '../components/Muse/Filter';
import Intro from '../components/MuseDetail/Intro';
import Career from '../components/MuseDetail/Career';
import './MuseDetail.css';

function MuseDeatail() {
  //   const { id } = useParams();

  return (
    <div className="museDetail_con">
      <Filter />
      <Intro />
      <Career />
    </div>
  );
}

export default MuseDeatail;
