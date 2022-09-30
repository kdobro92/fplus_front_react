import './Content.css';

function Content({ currentDetailImg }) {
  return (
    <>
      <div className="wrap_audi_content">
        <div className="audi_underline" />
      </div>
      <div className="audi_img_con">
        <div className="audi_img">
          <img src={currentDetailImg} alt="audi_detail" />
        </div>
      </div>
    </>
  );
}

export default Content;
