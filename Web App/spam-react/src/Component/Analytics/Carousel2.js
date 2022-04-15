import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, PieChart, Pie, Tooltip} from 'recharts';

const averageAgebyGender = [
  { name: "Female", amt: 30, Female: 21.62 },
  { name: "Male", amt: 30, Male: 21.33 },
  { name: "Queer", amt: 30, Queer: 26 }
]
const educationalAttainment = [
  { name: "Working", "Junior High": 0, "Senior High": 2, College: 6 , "Degree Holder": 3, "Total": 11, amt: 40 },
  { name: "Partially Working", "Junior High": 0, "Senior High": 0, College: 3, "Degree Holder": 0, "Total": 3, amt: 40 },
  { name: "Non-Working", "Junior High": 1, "Senior High": 7, College: 44, "Degree Holder": 0,"Total": 52, amt: 40 }
]
const convOrPriv = [
  { name: "Convienience", Female: 5, Male: 8, Queer: 0, Total: 13},
  { name: "Privacy", Female: 24, Male: 28, Queer: 1, Total: 53}
]

const regionS = [
  { name: 'NCR', value: 44, fill: "#276999"},
  { name: 'Region IV-A', value: 12, fill: "#348ccc"},
  { name: 'Central Luzon', value: 7, fill: "#42afff"},
  { name: 'MIMAROPA', value: 1, fill: "#808080"}
]
const cityRegion = [
    { name: "Manila", value: 29, fill: "#276999" },
    { name: "Quezon City", value: 4, fill: "#276999" },
    { name: "Caloocan", value: 2, fill: "#276999" },
    { name: "Pasig", value: 2, fill: "#276999" },
    { name: "Makati", value: 2, fill: "#276999" },
    { name: "Malabon", value: 2, fill: "#276999"},
    { name: "Mandaluyong", value: 1, fill: "#276999"},
    { name: "Marikina", value: 1, fill: "#276999"}, 
    { name: "Las Pinas", value: 1, fill: "#276999"},
    { name: "Rizal", value: 6, fill: "#348ccc"}, 
    { name: "Cavite", value: 5, fill: "#348ccc"},
    { name: "Batangas", value: 1, fill: "#348ccc"},
    { name: "Bulacan", value: 5, fill: "#42afff"},
    { name: "Pampanga", value: 2, fill: "#42afff"},
    { name: "Marinduque", value: 1, fill: "#808080"}
]
const legitEmail = [
  { name: 'Rarely', value: 32, fill: "#276999"},
  { name: "Usually", value: 25, fill: "#348ccc"},
  { name: "Always", value: 4, fill: "#42afff"},
  { name: "Not at All", value: 5, fill: "#808080"}
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
              <Bar dataKey="Total" fill="#808080" />
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
                outerRadius={50}
                fill="#fff"
              />
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={cityRegion}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#fff"
                label
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
