import Thumbnail from '../components/Main/Thumbnail';
import Position from '../components/Main/Position';
import Genre from '../components/Main/Genre';
import GenreAudi from '../components/Main/GenreAudi';
import PositionAudi from '../components/Main/PositionAudi';
// import Post from '../components/Main/Post';
// import Audition from '../components/Main/Audition';
import MidBanner from '../components/Main/MidBanner';

function Main() {
  return (
    <>
      <Thumbnail />
      <Position />
      <Genre />
      <MidBanner />
      <PositionAudi />
      <GenreAudi />
      {/* <Post /> */}
      {/* <Audition /> */}
    </>
  );
}

export default Main;
