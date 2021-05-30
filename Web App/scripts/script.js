//tabs email or sms
var details1 = document.getElementById("details1");
var details2 = document.getElementById("details2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

function openEmail(){
    details1.style.transform= "translateX(0)";
    details2.style.transform= "translateX(115%)";
    btn1.style.background = "#ce3232";
    btn2.style.background = "#ffffff";
}
function openSMS(){
    details1.style.transform= "translateX(115%)";
    details2.style.transform= "translateX(0)";
    btn1.style.background = "#ffffff";
    btn2.style.background = "#ce3232";
}

//pie chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Email', 'No. of Emails'],
        ['Spam',     111],
        ['Ham',      202],
        ['SMS',  59],
        ['Hack', 2],
        ['Others',    7]
    ]);

    var options = {
        title: 'Email Stats'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

//bar graph
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['Types', '2010 Spam', '2000 Spam'],
        ['Email', 8175000, 8008000],
        ['SMS', 3792000, 3694000],
        ['Hack', 2695000, 2896000],
        ['MEME', 2099000, 1953000],
        ['Others', 1526000, 1517000]
      ]);

      var options = {
        title: 'No. Spam Emails',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_divbar'));
      chart.draw(data, options);
    }

//line graph
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Spam');

      data.addRows([
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
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Victims'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_divline'));

      chart.draw(data, options);
    }

//advance result
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Ham", 87],
    ["Spam", 13],
  ]);

  var options = {
    title: "Percentage",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart2")
  );

  chart.draw(data, options);
}