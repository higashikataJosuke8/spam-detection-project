import React, { Component } from "react";
import Slider from "react-slick";
import spam_email from './SPAM_EMAL.png'
import spam_sms from './SPAM_SMS.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Pie, PieChart, Tooltip} from 'recharts';

const emailSpamReceived = [
  { name: "Advertisements", value: 75, fill: "#276999"},
  { name: "Unwanted Spam", value: 68, fill: "#348ccc"}, 
  { name: "Phishing", value: 61, fill: "#3b9ee6"},
  { name: "Events", value: 45, fill: "#42afff"},
  { name: "Spoofing", value: 39, fill: "#a1d7ff"},
  { name: "Tech Support", value: 29, fill: "#0E798D"},
  { name: "Malware", value: 22, fill: "#4294D0"},
  { name: "None", value: 4, fill: "#808080"}
]

const smsSpamReceived = [
  { name: "Advertisements", value: 55, fill: "#276999"},
  { name: "Unwanted Spam", value: 64, fill: "#348ccc"}, 
  { name: "Phishing", value: 53, fill: "#3b9ee6"},
  { name: "Events", value: 38, fill: "#42afff"},
  { name: "Spoofing", value: 57, fill: "#a1d7ff"},
  { name: "Tech Support", value: 4, fill: "#0E798D"},
  { name: "Malware", value: 16, fill: "#4294D0"},
  { name: "None", value: 3, fill: "#808080"}
]
export default class Carousel1 extends Component {
  render() {
    const settings = {
      arrows: true,
      //   dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      faded: true,
      className: "slides",
    };
    return (
      <div className="body" id="car1">
        <Slider className="slider" {...settings}>
          <div className="div-one">
            <h5>Word Cloud Spam Email</h5> 
            <div className="shape">
              <img src={spam_email} alt='spam_email'/> 
            </div>
          </div>
          <div className="div-two">
            <h5>Word Cloud Spam SMS</h5> 
            <div className="shape">
              <img src={spam_sms} alt='spam_sms' />
            </div>
          </div>
          <div className="div-three">
            <h5>Ratio of Spam Emails Received</h5>
            <div className="shape"> 
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={emailSpamReceived}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>
            </div>
          </div>
          <div className="div-four">
            <h5>Ratio of Spam SMS's Received</h5>
            <div className="shape">
              <PieChart width={600} height={300}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={smsSpamReceived}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#fff"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
