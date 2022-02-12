import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, PieChart, Pie, Tooltip} from 'recharts';

const spam_by_city = [
  { name: 'Approximately a quarter', value: 2, fill:'#276999' },
  { name: 'None at all', value: 1, fill:'#348ccc' },
  { name: 'Total', value: 3, fill:'#808080' }
];

const convORPriv = [
  { name: "Convenience", value: 146, fill: '#348ccc'},
  { name: "Privacy", value: 93, fill: "#42afff"}
];


const amount_emails_received = [
  {
    name: 'College',
    College: 47,
    amt: 40
  },
  {
    name: 'Degree Holder',
    Degree_holder: 88,
    amt: 40
  },
  {
    name: 'Elementary',
    Elementary: 24,
    amt: 40
  },
  {
    name: 'Junior High School',
    Junior_high: 39,
    amt: 40
  },
  {
    name: 'Senior High School',
    Senior_high: 41,
    amt: 40
  }
];

const ageByGender = [
  { name: "Female", value: 31.55, fill: "#276999"},
  { name: "Male", value: 34.87 ,fill: "#348ccc"},
  { name: "Prefer not to say", value: 35.25 ,fill: "#3b9ee6"},
];

export default class Carousel2 extends Component {
  
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
      <div className="body" id="car2">
        <Slider className="slider" {...settings}>
          <div className="div-one">
            <h5>Spams Received by City Count</h5>
            <div className="shape">
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={spam_by_city}
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>
            </div>
          </div>
          <div className="div-two">
            <h5>Convenience or Privacy</h5>
            <div className="shape">
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={convORPriv}
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>
            </div>
          </div>
          <div className="div-three">
            <h5>Emails Received Monthly by Educational Attainment</h5>
            <div className="shape">
            <BarChart
              width={350}
              height={150}
              data={amount_emails_received}
              margin={{ 
                top: 5,
                right: 40,
                left: 0,
                bottom: 5,
              }}
              >
              
              <CartesianGrid strokeDasharray="3 3" vertical="" />
              <XAxis dataKey="name" tick={{fontSize: 10}}/>
              <YAxis />
              <Tooltip tick={{fontSize: 50}}/>
              <Bar dataKey="College" fill="#267999" />
              <Bar dataKey="Degree_holder" fill="#348ccc" />
              <Bar dataKey="Elementary" fill="#3b9ee6" />
              <Bar dataKey="Junior_high" fill="#42afff" />
              <Bar dataKey="Senior_high" fill="#a1d7ff" />
              <Bar dataKey="Total" fill="#808080" />
            </BarChart>
            </div>
          </div>
          <div className="div-four">
            <h5>Age By Gender</h5>
            <div className="shape">
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={ageByGender}
                cx="50%"
                cy="50%"
                outerRadius={50}
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
