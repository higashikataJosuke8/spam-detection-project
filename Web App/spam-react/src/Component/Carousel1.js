import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const experienced_hacking = [
  {
    name: '1',
    Yes: 3,
    No: 5,
    Maybe: 1,
    amt: 7,
  },
  {
    name: '2',
    Yes: 1,
    No: 7,
    Maybe: 1,
    amt: 7,
  },
  {
    name: '3',
    Yes: 0,
    No: 3,
    Maybe: 2,
    amt: 7,
  },
  {
    name: '4',
    Yes: 11,
    No: 10,
    Maybe: 4,
    amt: 7,
  },
  {
    name: '5',
    Yes: 0,
    No: 1,
    Maybe: 1,
    amt: 7,
  },
  {
    name: '6',
    Yes: 0,
    No: 1,
    Maybe: 0,
    amt: 7,
  }
];

const email_accounts_count = [
  {
    name: '1',
    Yes: 4,
    No: 4,
    Maybe: 1,
    amt: 7,
  },
  {
    name: '2',
    Yes: 2,
    No: 4,
    Maybe: 3,
    amt: 7,
  },
  {
    name: '3',
    Yes: 4,
    No: 1,
    Maybe: 0,
    amt: 7,
  },
  {
    name: '4',
    Yes: 9,
    No: 14,
    Maybe: 2,
    amt: 7,
  },
  {
    name: '5',
    Yes: 0,
    No: 2,
    Maybe: 0,
    amt: 7,
  },
  {
    name: '6',
    Yes: 0,
    No: 1,
    Maybe: 0,
    amt: 7,
  }
];

const recognize_spam_by_age = [
  {
    name: 'Female',
    Halfway_through: 25.86,
    Immediately: 30.13,
    After_reading_all: 41.8,
    amt: 40
  },
  {
    name: 'Male',
    Halfway_through: 36.77,
    Immediately: 34.88,
    After_reading_all: 22.5,
    amt: 40
  },
  {
    name: 'Prefer not to say',
    Halfway_through: 28,
    Immediately: 42.5,
    After_reading_all: 0,
    amt: 40
  },
  {
    name: 'Total',
    Halfway_through: 32.13,
    Immediately: 34.5,
    After_reading_all: 36.29,
    amt: 40
  }
];

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
            <h5>Experienced Being Hacked Through Spams</h5> 
            <div className="shape">
            <LineChart
                width={400}
                height={150}
                data={experienced_hacking}
                margin={{
                  top: 5,
                  right: 40,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical="" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Yes" stroke="#42afff" />
                <Line type="monotone" dataKey="No" stroke="#348ccc" />
                <Line type="monotone" dataKey="Maybe" stroke="#808080" />
            </LineChart>
            </div>
          </div>
          <div className="div-two">
            <h5>Uses an Email Account</h5> 
            <div className="shape">
              <LineChart
                  width={400}
                  height={150}
                  data={email_accounts_count}
                  margin={{
                    top: 5,
                    right: 40,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical="" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Yes" stroke="#42afff" />
                  <Line type="monotone" dataKey="No" stroke="#348ccc" />
                  <Line type="monotone" dataKey="Maybe" stroke="#808080" />
                </LineChart>
            </div>
          </div>
          <div className="div-three">
            <h5>Average Time to Recognize Spam by Age</h5>
            <div className="shape"> 
            <BarChart
              width={350}
              height={150}
              data={recognize_spam_by_age}
              margin={{ 
                top: 5,
                right: 40,
                left: 0,
                bottom: 5,
              }}
              >
              
              <CartesianGrid strokeDasharray="3 3" vertical="" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Halfway_through" fill="#42afff" />
              <Bar dataKey="Immediately" fill="#348ccc" />
              <Bar dataKey="After_reading_all" fill="#808080" />
            </BarChart>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
