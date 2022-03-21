import React from 'react'
import { Bar, BarChart, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


const averageAgebyGender = [
    { name: "Female", amt: 30, Female: 21.62 },
    { name: "Male", amt: 30, Male: 21.33 },
    { name: "Queer", amt: 30, Queer: 26 },
    { name: "Total", amt: 30, Total: 21.53 }
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
const educationalAttainment = [
    { name: "Working", "Junior High": 0, "Senior High": 2, College: 6 , "Degree Holder": 3, amt: 40 },
    { name: "Partially Working", "Junior High": 0, "Senior High": 0, College: 3, "Degree Holder": 0, amt: 40 },
    { name: "Non-Working", "Junior High": 1, "Senior High": 7, College: 44, "Degree Holder": 0, amt: 40 }
]
const convOrPriv = [
    { name: "Convienience", Female: 5, Male: 8, Queer: 0, Total: 13},
    { name: "Privacy", Female: 24, Male: 28, Queer: 1, Total: 53}
]
const emailSpamReceived = [
    { name: "Advertisements", value: 45, fill: "#276999"},
    { name: "Unwanted Spam", value: 45, fill: "#348ccc"}, 
    { name: "Phishing", value: 42, fill: "#3b9ee6"},
    { name: "Events", value: 29, fill: "#42afff"},
    { name: "Spoofing", value: 25, fill: "#a1d7ff"},
    { name: "Tech Support", value: 15, fill: "#0E798D"},
    { name: "Malware", value: 14, fill: "#4294D0"},
    { name: "None", value: 4, fill: "#808080"}
]
const smsSpamReceived = [
    { name: "Advertisements", value: 36, fill: "#276999"},
    { name: "Unwanted Spam", value: 40, fill: "#348ccc"}, 
    { name: "Phishing", value: 35, fill: "#3b9ee6"},
    { name: "Events", value: 22, fill: "#42afff"},
    { name: "Spoofing", value: 34, fill: "#a1d7ff"},
    { name: "Tech Support", value: 9, fill: "#0E798D"},
    { name: "Malware", value: 10, fill: "#4294D0"},
    { name: "None", value: 3, fill: "#808080"}
]
const legitEmail = [
    { name: 'Rarely', value: 32, fill: "#276999"},
    { name: "Usually", value: 25, fill: "#348ccc"},
    { name: "Always", value: 4, fill: "#42afff"},
    { name: "Not at All", value: 5, fill: "#808080"}
]
const enterDataOnSusWebsites = [
    { name: "Entered", Female: 7, Male: 11, Queer: 0},
    { name: "Probably", Female: 10, Male: 9, Queer: 0},
    { name: "Not Entered", Female: 12, Male: 16, Queer: 1}
]
const sendPhoneOnSusRecip = [
    { name: "Sent", Female: 5, Male: 8, Queer: 0},
    { name: "Probably", Female: 8, Male: 8, Queer: 0},
    { name: "Not Entered", Female: 16, Male: 20, Queer: 1}
]
const effectEmailProd = [
    { name: "Always Using", "Always Affected": 1, "Usually Affected": 2, "Rarely Affected": 5, "Not Affected": 15, amt: 30},
    { name: "Usually Using", "Always Affected": 2, "Usually Affected": 4, "Rarely Affected": 12, "Not Affected": 14, amt: 30},
    { name: "Rarely Using", "Always Affected": 0, "Usually Affected": 1, "Rarely Affected": 2, "Not Affected": 2, amt: 30}
]
const effectSMSProd = [
    { name: "Always Using", "Always Affected": 2, "Usually Affected": 2, "Rarely Affected": 10, "Not Affected": 5, amt: 30},
    { name: "Usually Using", "Always Affected": 0, "Usually Affected": 6, "Rarely Affected": 7, "Not Affected": 3, amt: 30},
    { name: "Rarely Using", "Always Affected": 0, "Usually Affected": 2, "Rarely Affected": 9, "Not Affected": 18, amt: 30},
    { name: "Not Using", "Always Affected": 0, "Usually Affected": 0, "Rarely Affected": 1, "Not Affected": 1, amt: 30}
]
const addedCharts = () => {
  return (
    <div>

        <h3>Average age by Gender</h3>
        <BarChart
              width={350}
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
              <Bar dataKey="Total" fill="#808080" />
            </BarChart>

            <h3>City Region Distribution of Respondents</h3>
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={regionS}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#fff"
              />
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={cityRegion}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>

            <h3>Educational Attainment and Working Status</h3>
            <BarChart
              width={400}
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
              <Bar dataKey="Degree Holder" fill="#808080" />
            </BarChart>

            <h3>Convenience or Privacy</h3>
            <BarChart
              width={400}
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

            <h3>Ratio of Spam Emails Received</h3>
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={emailSpamReceived}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>

            <h3>Ratio of Spam SMS's Received</h3>
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={smsSpamReceived}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>

            <h3>Found Legitimate Email in Spam Inbox</h3>
            <PieChart width={600} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={legitEmail}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#fff"
                label
              />
              <Tooltip />
            </PieChart>

            <h3>Entering Data on Suspicious Websites by Gender</h3>
            <BarChart
              width={400}
              height={200}
              data={enterDataOnSusWebsites}
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
            </BarChart>

            <h3>Sending Phone Number to Suspicious Recipients by Gender</h3>
            <BarChart
              width={400}
              height={200}
              data={sendPhoneOnSusRecip}
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
            </BarChart>

            <h3>Effect of Spam on Email Usage Productivity</h3>
            <BarChart
              width={400}
              height={200}
              data={effectEmailProd}
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
              <Bar dataKey="Always Affected" fill="#267999" />
              <Bar dataKey="Usually Affected" fill="#348ccc" />
              <Bar dataKey="Rarely Affected" fill="#42afff" />
              <Bar dataKey="Not Affected" fill="#808080" />
            </BarChart>

            <h3>Effect of Spam on SMS Usage Productivity</h3>
            <BarChart
              width={400}
              height={200}
              data={effectSMSProd}
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
              <Bar dataKey="Always Affected" fill="#267999" />
              <Bar dataKey="Usually Affected" fill="#348ccc" />
              <Bar dataKey="Rarely Affected" fill="#42afff" />
              <Bar dataKey="Not Affected" fill="#42afff" />
            </BarChart>
    </div>
  )
}

export default addedCharts