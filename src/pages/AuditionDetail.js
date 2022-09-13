// import { useParams } from 'react-router-dom';
import Filter from '../components/Muse/Filter';
import Intro from '../components/AuditionDetail/Intro';
import Content from '../components/AuditionDetail/Content';
import './AuditionDetail.css';

function AuditionDetail() {
  //   const { id } = useParams();

  return (
    <div className="audiDetail_con">
      <Filter />
      <Intro />
      <Content />
    </div>
  );
}

export default AuditionDetail;
