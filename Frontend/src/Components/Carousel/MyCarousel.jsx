import Carousel from "react-bootstrap/Carousel";
import Img from "./Img";

function MyCarousels() {
  return (
    <Carousel className="container mb-6">
      <Carousel.Item interval={1000}>
        <Img text="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>First slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img text="Second slide" />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Second slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Img text="Third slide" />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Third slide</h3>
          <p style={{ color: "black" }}>Lorem, ipsum..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousels;
