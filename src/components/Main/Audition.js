/* eslint-disable react/no-array-index-key */
import './Audition.css';

function Audition() {
  const audiArr = [
    {
      title: '해녀의 부엌',
      content: '해녀의 부엌과 함께하실 배우를 모집합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card1.png',
      cir_image: 'img/circle1.png',
    },
    {
      title: '아모르',
      content: '아모르의 단원을 모집합니다.',
      tag: '멀티',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card2.png',
      cir_image: 'img/circle2.png',
    },
    {
      title: '해피',
      content: '해피한 퍼포먼스 모델(급구).',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card3.png',
      cir_image: 'img/circle3.png',
    },
    {
      title: '비보잉',
      content: '비보잉 유튜브 출현하실 크리에이터 모집.',
      tag: '무급',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card4.png',
      cir_image: 'img/circle4.png',
    },
    {
      title: '엑터스나무',
      content: '단편영화 배우 구합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card5.png',
      cir_image: 'img/circle5.png',
    },
  ];
  const audiArr2 = [
    {
      title: '해녀의 부엌',
      content: '해녀의 부엌과 함께하실 배우를 모집합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card6.png',
      cir_image: 'img/circle6.png',
    },
    {
      title: '아모르',
      content: '아모르의 단원을 모집합니다.',
      tag: '멀티',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card7.png',
      cir_image: 'img/circle7.png',
    },
    {
      title: '해피',
      content: '해피한 퍼포먼스 모델(급구).',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card8.png',
      cir_image: 'img/circle8.png',
    },
    {
      title: '비보잉',
      content: '비보잉 유튜브 출현하실 크리에이터 모집.',
      tag: '무급',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card9.png',
      cir_image: 'img/circle9.png',
    },
    {
      title: '엑터스나무',
      content: '단편영화 배우 구합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card10.png',
      cir_image: 'img/circle10.png',
    },
  ];
  const audiArr3 = [
    {
      title: '해녀의 부엌',
      content: '해녀의 부엌과 함께하실 배우를 모집합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card11.png',
      cir_image: 'img/circle11.png',
    },
    {
      title: '아모르',
      content: '아모르의 단원을 모집합니다.',
      tag: '멀티',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card12.png',
      cir_image: 'img/circle12.png',
    },
    {
      title: '해피',
      content: '해피한 퍼포먼스 모델(급구).',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card13.png',
      cir_image: 'img/circle13.png',
    },
    {
      title: '비보잉',
      content: '비보잉 유튜브 출현하실 크리에이터 모집.',
      tag: '무급',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card14.png',
      cir_image: 'img/circle14.png',
    },
    {
      title: '엑터스나무',
      content: '단편영화 배우 구합니다.',
      tag: '오디션',
      date: '22.08.25 마감',
      detail: '자세히 >',
      image: 'img/card15.png',
      cir_image: 'img/circle15.png',
    },
  ];

  return (
    <>
      <div className="wrap_position">
        <p className="posi_devi">오디션 분류</p>
        <p className="posi_intro">당신을 기다리는 오디션을 소개합니다.</p>
      </div>
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {audiArr.map((data, index) => (
              <div key={index} className="card_whole">
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {audiArr2.map((data, index) => (
              <div key={index} className="card_whole">
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap_card">
        <div className="card_container">
          <div className="img_container">
            {audiArr3.map((data, index) => (
              <div key={index} className="card_whole">
                <div className="card_top">
                  <img className="card_img" src={data.image} alt="card" />
                  <div className="card_new">New</div>
                  <div className="card_limit">마감임박</div>
                  <div className="card_circle">
                    <img
                      className="circle_img"
                      src={data.cir_image}
                      alt="circle"
                    />
                  </div>
                </div>
                <div className="card_middle">
                  <div className="card_title">{data.title}</div>
                  <div className="card_content">{data.content}</div>
                  <div className="card_tag">{data.tag}</div>
                  <div className="card_bottom">
                    <div className="card_date">{data.date}</div>
                    <button type="button" className="card_detail">
                      {data.detail}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Audition;
