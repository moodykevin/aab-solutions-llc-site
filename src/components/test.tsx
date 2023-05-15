// import { Carousel } from 'react-carousel-minimal';
import goodwill from './imgs/goodwill.png'
import red from './imgs/red.png'

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';




function test() {
 const data = [
    {
      image: goodwill,
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const Gallery = () => (
    <AliceCarousel>
      <img src={goodwill} className="yours-custom-class" />
      <img src={red} className="yours-custom-class" />
      <img src={goodwill} className="yours-custom-class" />
      <img src={red} className="yours-custom-class" />
      <img src={goodwill} className="yours-custom-class" />
      <img src={red} className="yours-custom-class" />
      <img src={goodwill} className="yours-custom-class" />
      <img src={red} className="yours-custom-class" />
      <img src={goodwill} className="yours-custom-class" />
    </AliceCarousel>
  )

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img src={goodwill}></img></div>,
    <div className="item" data-value="2"><img src={red}></img></div>,
    <div className="item" data-value="3"><img src={goodwill}></img></div>,
    <div className="item" data-value="4"><img src={red}></img></div>,
    <div className="item" data-value="5"><img src={goodwill}></img></div>,
    <div className="item" data-value="1"><img src={goodwill}></img></div>,
    <div className="item" data-value="2"><img src={red}></img></div>,
    <div className="item" data-value="3"><img src={goodwill}></img></div>,
    <div className="item" data-value="4"><img src={red}></img></div>,
    <div className="item" data-value="5"><img src={goodwill}></img></div>,
];

const Carousel1 = () => (
    <AliceCarousel
        items={items}
        mouseTracking={true}
        responsive={responsive}
        controlsStrategy="alternate"
        animationDuration={400}
        autoPlay={true}
        animationType='slide'
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayStrategy="action"
        
        // onSlideChange={this.onSlideChange}
        // onSlideChanged={this.onSlideChanged}
    />
);


  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}>
          {/* {/* <Carousel
            data={data}
            time={20000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          /> */}
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Carousel1></Carousel1>

    


    </div>
  );
}

export default test;