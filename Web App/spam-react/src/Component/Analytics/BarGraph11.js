import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarGraph11 = () => {
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
      const data3 = [
        {name: "Spam", "email": analytics.spamemail, "sms": analytics.spamsms, amt:30},
        {name: "Ham", "email": analytics.email-analytics.spamemail, "sms": analytics.sms-analytics.spamsms, amt:30}
      ]
  return (
    <div>
      <BarChart
              width={(window.innerWidth>=1024)?400:(window.innerWidth>=920)?350:300}
              height={200}
              data={data3}
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
              <Bar dataKey="email" fill="#267999" />
              <Bar dataKey="sms" fill="#348ccc" />
              <Legend />
        </BarChart>
    </div>
  )
}

export default BarGraph11