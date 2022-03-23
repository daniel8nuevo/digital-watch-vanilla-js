import "./styles.css";

const showTime = () => {
  let d = new Date(),
    dayTime = d.getHours() >= 12 ? " PM" : " AM";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDay = d.getDate(),
    currentMonth = months[d.getMonth()],
    currentYear = d.getFullYear();

  document.getElementById("time").innerHTML =
    d.toLocaleTimeString("RU-ru") + dayTime;
  document.getElementById(
    "date"
  ).innerHTML = `${currentDay} ${currentMonth} ${currentYear}`;
};

setInterval(showTime, 1000);
