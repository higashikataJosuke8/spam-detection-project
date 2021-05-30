var details1 = document.getElementById("details1");
var details2 = document.getElementById("details2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", openEmail);
btn2.addEventListener("click", openSMS);

function openEmail(){
    details1.style.transform= "translateX(0)";
    details2.style.transform= "translateX(100%)";
    btn1.style.background = "#ce3232";
    btn2.style.background = "#ffffff";
}
function openSMS(){
    details1.style.transform= "translateX(100%)";
    details2.style.transform= "translateX(0)";
    btn1.style.background = "#ffffff";
    btn2.style.background = "#ce3232";
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
