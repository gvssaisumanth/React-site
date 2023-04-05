import React, { Component } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 mx-auto mt-3 brand">
            <h1 className="text-left">
              <a className="navbar-brand" href="#">
                AI <span className="text-warning">Solutions</span>
              </a>
            </h1>
            <p className="text-left">
              AI Office Solutions is an innovative technology company
              specializing in providing AI-powered tools and solutions for
              businesses worldwide. Founded in 20XX, our mission is to
              revolutionize the way businesses operate by leveraging the power
              of artificial intelligence to streamline operations, improve
              productivity, and drive growth.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto mt-3 products">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>Features</p>
            <p>Testimonials</p>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto mt-3 categories">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Our Services offer
            </h5>
            <p>Sports</p>
            <p>Technology</p>
            <p>Music Concerts</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <small>
              {" "}
              AI Solutions Copyright &copy; 2023 All Rights Reserved
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
