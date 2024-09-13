import './HomePage.css';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='home-container'>
      <section className="home-header">
        <Slider {...settings}>
          <div>
            <img src="../../public/gol chottor.jpg" alt="Carousel Image 1" />
          </div>
          <div>
            <img src="../../public/ete.jpg" alt="Carousel Image 2" />
          </div>
          <div>
            <img src="../../public/ete2019.jpg" alt="Carousel Image 3" />
          </div>
          <div>
            <img src="../../public/deca.jpg" alt="Carousel Image 3" />
          </div>
        </Slider>
        <div className="content">
          <h3>Welcome to the Department <br />
            OF<br />
            Electronics and Telecommunication Engineering</h3>
        </div>
      </section>

      <section className="course">
        <h1>Courses We Offer</h1>
        <div className="row">
          <div className="course-col">
            <h3>Undergraduate</h3>
            <p>We offer Undergraduate degree of BSC in ETE with a period of 4 years long course </p>
          </div>
          <div className="course-col">
            <h3>Masters</h3>
            <p>We offer Masters degree of MSC in ETE with a period of 2 years long course </p>
          </div>
          <div className="course-col">
            <h3>Postgraduate</h3>
            <p>We offer Postgraduate degree of PHD in ETE with a period of 2 years long course </p>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="counter-up">
          <div className="contents">
            <div className="box">
              <div className="icon"><i className="fas fa-user-graduate"></i></div>
              <div className="counter">500</div>
              <div className="text">Students</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-book-open"></i></div>
              <div className="counter">50</div>
              <div className="text">Research Papers</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-desktop"></i></div>
              <div className="counter">10</div>
              <div className="text">Laboratories</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-award"></i></div>
              <div className="counter">100</div>
              <div className="text">Awards Received</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
