import Thumbnail from '../components/Main/Thumbnail';
import Position from '../components/Main/Position';
import Genre from '../components/Main/Genre';
import Post from '../components/Main/Post';
import Audition from '../components/Main/Audition';
import MidBanner from '../components/Main/MidBanner';
import Muse from './Muse';

function Main() {
  return (
    <>
      <Thumbnail />
      <Position />
      <Genre />
      <Post />
      <MidBanner />
      <Audition />
      <Muse />
    </>
  );
}

export default Main;
