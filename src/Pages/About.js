import React from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { Card, Segment } from "semantic-ui-react";
import CardData from "../Components/Card/card";
import img1 from "../assets/aboutus.jpeg";

function About() {
  return (
    <div>
      <Header />
      <div class="modal-body row">
        <div class="col-md-4">
          <Segment className="mt-5 mb-5 mx-5 p-5">
            <CardData />
          </Segment>
        </div>
        <div class="col-md-7">
          <Segment className="m-5">
            <img className="img-fluid" src={img1} />

            <Segment style={{ color: "black" }}>
              <h3>Our Mission</h3>
              <p>
                At AI Office Solutions, our mission is to revolutionize the way
                businesses operate by providing cutting-edge AI-powered tools
                and solutions. We aim to help companies streamline their
                operations, increase productivity, and drive growth by
                leveraging the power of artificial intelligence.
              </p>
              <h3>Our Vision</h3>
              <p>
                Our vision is to become the leading provider of AI solutions for
                businesses across industries, enabling them to stay ahead in
                today's competitive landscape. We are committed to fostering
                innovation, developing sustainable solutions, and creating
                long-lasting partnerships with our clients.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>
                  <strong>Innovation:</strong> We embrace and drive change
                  through continuous research, development, and improvement of
                  our solutions.
                </li>
                <li>
                  <strong>Integrity:</strong> We act honestly, ethically, and
                  transparently in everything we do.
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe in the power of
                  teamwork and work together to achieve our shared goals.
                </li>
                <li>
                  <strong>Customer-Centric:</strong> We put our clients' needs
                  at the center of our decision-making process and strive to
                  exceed their expectations.
                </li>
              </ul>
            </Segment>
          </Segment>
        </div>
      </div>
      <Segment className="m-5" style={{ color: "black" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsu
      </Segment>

      <Footer />
    </div>
  );
}

export default About;
