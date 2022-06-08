import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, PieChart, Pie, Tooltip} from 'recharts';

const averageAgebyGender = [
  { name: "Female", amt: 30, Female: 22.2 },
  { name: "Male", amt: 30, Male: 21.64 },
  { name: "Queer", amt: 30, Queer: 26 },
  { name: "Prefer Not", amt: 30, Queer: 22 }
]
const educationalAttainment = [
  { name: "Working", "Junior High": 0, "Senior High": 2, College: 11 , "Degree Holder": 4, "Total": 17, amt: 40 },
  { name: "Partially Working", "Junior High": 0, "Senior High": 0, College: 4, "Degree Holder": 1, "Total": 5, amt: 40 },
  { name: "Non-Working", "Junior High": 1, "Senior High": 12, College: 61, "Degree Holder": 4,"Total": 67, amt: 40 }
]
const convOrPriv = [
  { name: "Convienience", Female: 8, Male: 10, Queer: 0, "Prefer Not": 1, Total: 19},
  { name: "Privacy", Female: 41, Male: 37, Queer: 1, "Prefer Not": 2, Total: 81}
]

const regionS = [
  { name: 'NCR', value: 64, fill: "#276999"},
  { name: 'CALABARZON', value: 18, fill: "#348ccc"},
  { name: 'Central Luzon', value: 9, fill: "#42afff"},
  { name: 'MIMAROPA', value: 2, fill: "#3b9ee6"},
  { name: 'Eastern Visayas', value: 2, fill: "#808080"},
  { name: 'Zamboanga Peninsula', value: 2, fill: "#eeeeee"}
]
const legitEmail = [
  { name: 'Rarely', value: 52, fill: "#276999"},
  { name: "Usually", value: 34, fill: "#348ccc"},
  { name: "Always", value: 7, fill: "#42afff"},
  { name: "Not at All", value: 7, fill: "#808080"}
]

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
            <h5>Average age by Gender</h5>
            <div className="shape">
            <BarChart
              width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300}
              height={150}
              data={averageAgebyGender}
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
              <Bar dataKey="Female" fill="#267999" />
              <Bar dataKey="Male" fill="#348ccc" />
              <Bar dataKey="Queer" fill="#3b9ee6" />
              <Bar dataKey="Prefer Not" fill="#eeeeee" />
            </BarChart>
            </div>
          </div>
          <div className="div-two">
            <h5>Educational Attainment and Working Status</h5>
            <div className="shape">
            <BarChart
              width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300}
              height={200}
              data={educationalAttainment}
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
              <Bar dataKey="Junior High" fill="#267999" />
              <Bar dataKey="Senior High" fill="#348ccc" />
              <Bar dataKey="College" fill="#3b9ee6" />
              <Bar dataKey="Degree Holder" fill="#42afff" />
              <Bar dataKey="Total" fill="#808080" />
            </BarChart>
            </div>
          </div>
          <div className="div-three">
            <h5>Convenience or Privacy</h5>
            <div className="shape">
            <BarChart
              width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300}
              height={200}
              data={convOrPriv}
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
              <Bar dataKey="Female" fill="#267999" />
              <Bar dataKey="Male" fill="#348ccc" />
              <Bar dataKey="Queer" fill="#42afff" />
              <Bar dataKey="Prefer Not" fill="#808080" />
              <Bar dataKey="Total" fill="#eeeeee" />
            </BarChart>
            </div>
          </div>
          <div className="div-four">
            <h5>City Region Distribution of Respondents</h5>
            <div className="shape">
            <PieChart width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={regionS}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#fff"
              />
              <Tooltip />
            </PieChart>
            </div>
          </div>
          <div className="div-five">
              <h5>Found Legitimate Email in Spam Inbox</h5>
              <div className="shape">
                <PieChart width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300} height={200}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={legitEmail}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
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
