import React from 'react'
import Chart from 'react-google-charts'

const StatGraphs = () => {
    return (
        <div className='stats'>
			<div className="graphs">
				<div className="Graph">
					<div className="chart" style={{order: 1}}>
						<div id="piechart" className="reps">
                            <Chart 
                                chartType = 'PieChart'
                                data= {[
                                    ['Email', 'No. of Emails'],
                                    ['Spam',     111],
                                    ['Ham',      202],
                                    ['SMS',  59],
                                    ['Hack', 2],
                                    ['Others',    7]
                                ]}
                                options = {{
                                    title: 'Email Stats', 
                                    backgroundColor: '#fff',
                                    slices: {
                                      0: {color: '#1A4666'},
                                      1: {color: '#276999'},
                                      2: {color: '#348ccc'},
                                      3: {color: '#3B9EE6'},
                                      4: {color: '#42afff'},
                                      5: {color: "#A1D7FF"}
                                    }
                                }}
                            />
                        </div>
					</div>
					<div className="infoChart" style={{order: 2}}>
						<h3>Pie Chart</h3>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
							Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
							hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
					</div>
				</div>
				<div className="Graph">
					<div className="chart" style={{order: 2}}>
						<div id="chart_divbar" className="reps">
                            <Chart 
                                data = {[
                                    ['Types', '2010 Spam', '2000 Spam'],
                                    ['Email', 8175000, 8008000],
                                    ['SMS', 3792000, 3694000],
                                    ['Hack', 2695000, 2896000],
                                    ['MEME', 2099000, 1953000],
                                    ['Others', 1526000, 1517000]
                                  ]}
                                chartType = 'BarChart'
                                options ={{
                                    title: 'No. Spam Emails',
                                    chartArea: {width: '50%'},
                                    hAxis: {
                                      title: 'Total Population',
                                      minValue: 0
                                    },
                                    vAxis: {
                                      title: 'City'
                                    }, 
                                    backgroundColor: '#fff',
                                    colors: ['#348ccc', '#42afff']
                                  }}
                            />
                        </div>
					</div>
					<div className="infoChart" style={{order: 1}}>
						<h3>Bar Graph</h3>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
							Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
							hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
					</div>
				</div>
				<div className="Graph">
					<div className="chart" style={{order: 1}}>
						<div id="chart_divline" className="reps">
                            <Chart 
                                data = {[[
                                    {type: 'number', label: 'X' },
                                    {type: 'number', label: 'Spam' }
                                  ],
                                    [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
                                    [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
                                    [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
                                    [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
                                    [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
                                    [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
                                    [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
                                    [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
                                    [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
                                    [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
                                    [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
                                    [66, 70], [67, 72], [68, 75], [69, 80]
                                ]}
                                chartType = 'LineChart'
                                options = {{
                                    hAxis: {
                                      title: 'Time'
                                    },
                                    vAxis: {
                                      title: 'Victims'
                                    }, 
                                    backgroundColor: '#fff',
                                    colors: ['#348ccc'],
                                    legend: { position: 'bottom' }
                                  }}
                            />
                        </div>
					</div>
					<div className="infoChart" style={{order: 2}}>
						<h3>Line Graph</h3>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
							Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
							hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
					</div>
				</div>
				<div className="Graph" id="chart1">
					<div className="chart" style={{order: 2}}>
						<i className="fa fa-envelope-open fa-5x" id="imageEmail"></i>
					</div>
					<div className="infoChart" style={{order: 1}}>
						<h3>Spam Email</h3>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
							Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
							hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
					</div>
				</div>
			</div>
        </div>
    )
}

export default StatGraphs
