var details1 = document.getElementById("details1");
var details2 = document.getElementById("details2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", openEmail);
btn2.addEventListener("click", openSMS);

function openEmail(){
  btn1.style.background = "#ffd60a";
  btn1.style.color = "#000";
  btn2.style.background = "#000";
  btn2.style.color = "#fff";
}
function openSMS(){
  btn1.style.background = "#000";
  btn1.style.color = "#fff";
  btn2.style.background = "#ffd60a";
  btn2.style.color = "#000";
}

google.charts.load('current', {'packages':['corechart']});
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
