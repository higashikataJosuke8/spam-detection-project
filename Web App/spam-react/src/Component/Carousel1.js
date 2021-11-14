import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default class Carousel1 extends Component {
  render() {
    const settings = {
      arrows: true,
      //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      faded: true,
      className: "slides",
    };
    return (
      <div className="body" id="car1">
        <h2> Email Notifications</h2>
        <Slider className="slider" {...settings}>
          <div className="div-one">
            <div className="shape">
              <h1> 1 </h1>
            </div>
          </div>
          <div className="div-two">
            <div className="shape">
              <h1> 2 </h1>
            </div>
          </div>
          <div className="div-three">
            <div className="shape">
              <h1> 3 </h1>
            </div>
          </div>
          <div className="div-four">
            <div className="shape">
              <h1> 4 </h1>
            </div>
          </div>
          <div className="div-five">
            <div className="shape">
              <h1> 5 </h1>
            </div>
          </div>
          <div className="div-six">
            <div className="shape">
              <h1> 6 </h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
