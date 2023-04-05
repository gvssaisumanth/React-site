import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/AItouch.jpeg";
import img2 from "../assets/generativeAi.png";
import img3 from "../assets/bagroundImage.jpeg";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { Segment } from "semantic-ui-react";

function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Segment className="py-5 m-5" inverted>
        <h4>Testimonial</h4>
        <span style={{textAlign:"center"}}>
          AI Office Solutions has completely transformed the way we operate.
          Their AI-powered tools have helped us save time, reduce costs, and
          improve decision-making. We highly recommend them to any business
          looking to stay ahead in today's competitive landscape.
        </span>
      </Segment>
      <Footer />
    </div>
  );
}

export default Home;
