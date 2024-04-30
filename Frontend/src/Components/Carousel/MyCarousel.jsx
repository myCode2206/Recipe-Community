import Carousel from "react-bootstrap/Carousel";
import Img from "./Img";

function MyCarousels() {
  return (
    <Carousel className="container mb-6">
      <Carousel.Item interval={1000}>
        <Img
          text="First slide"
          img="https://s3.amazonaws.com/thumbnails.venngage.com/template/20c81e0c-377d-410d-b152-41bddb7bbf2a.png"
        />
        <Carousel.Caption>
          {/* <h3 style={{ color: "black" }}>First slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img
          text="Second slide"
          img="https://www.peta.org/wp-content/uploads/2010/06/VSK-Recipe-Banner-2.jpg"
        />
        <Carousel.Caption>
          {/* <h3 style={{ color: "black" }}>Second slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img
          text="Third slide"
          img="https://cdn.vectorstock.com/i/500p/14/30/fast-food-horizontal-web-banner-vector-45811430.jpg"
        />
        <Carousel.Caption>
          {/* <h3 style={{ color: "black" }}>Third slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousels;
