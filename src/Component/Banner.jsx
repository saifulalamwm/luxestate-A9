import bannerImg1 from "../assets/image/Green-ValleySingle-Family Home.jpg";
import bannerImg2 from "../assets/image/Luxury Family Villa.jpg";
import bannerImg3 from "../assets/image/Mountain View Vacation Home.jpg";
import bannerImg4 from "../assets/image/Lake-View-Apartment.png";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div
        id="slide1"
        className="carousel-item relative w-full h-[600px]"
        style={{
          backgroundImage: `url(${bannerImg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // adjust the height as needed
        }}
      >
        {/* <img src={bannerImg1} className="w-auto" /> */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `url(${bannerImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // adjust the height as needed
        }}
      >
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `url(${bannerImg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // adjust the height as needed
        }}
      >
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full"
        style={{
          backgroundImage: `url(${bannerImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // adjust the height as needed
        }}
      >
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
