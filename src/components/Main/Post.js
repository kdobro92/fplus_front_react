/* eslint-disable react/no-array-index-key */
import './Post.css';

function Post() {
  const images = [
    'img/post1.png',
    'img/post2.png',
    'img/post3.png',
    'img/post4.png',
    'img/post5.png',
  ];

  return (
    <>
      <div className="wrap_filter">
        <div className="wrap">
          <div className="filter_list">
            <button type="button" className="btn_list">
              정렬방식 :
            </button>
            <button type="button" className="btn_list">
              관심순
            </button>
            <hr />
            <button type="button" className="btn_list">
              인기순
            </button>
            <hr />
            <button type="button" className="btn_list">
              최신순
            </button>
          </div>
        </div>
      </div>
      <div className="wrap_post">
        <div className="post_container">
          <div className="post_list">
            {images.map((img, index) => (
              <img key={index} src={img} alt="post" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
