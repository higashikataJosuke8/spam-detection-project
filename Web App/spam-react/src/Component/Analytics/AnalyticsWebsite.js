import React, { useEffect, useState } from 'react'
import { Pie, PieChart, Tooltip } from "recharts";

const AnalyticsWebsite = () => {
    const [analytics, setAnalytics] = useState({});
    useEffect(() => {
        fetch("/analytics/website", {'method': 'GET', 
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => {
          if(response.status === 200){
            return response.json()
          }
        }).then(data => setAnalytics(data))
        .catch(error => console.log(error))
      }, []);
      console.log(analytics.email);
      const data = [
        {name:"Spam", value: analytics.spam, fill:"#348ccc"},
        {name:"Ham", value: analytics.ham, fill:"#42afff"}
      ]
      const data2 =[
        {name: "Email", value: analytics.email, fill: "#267999"},
        {name: "SMS", value: analytics.sms, fill: "#3b9ee6"}
      ]
  return (
    <div>
      <PieChart width={600} height={300}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#fff"
                  
                />
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data2}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#fff"
                  label
                />
                <Tooltip />
              </PieChart>
    </div>
  )
}

export default AnalyticsWebsite