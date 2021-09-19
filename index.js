// 1.
//short day of the week
const dayWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dayWeekContainer = document.querySelector(".day");
const day = new Date();
dayWeekContainer.innerText = dayWeekNames[day.getDay()];

// day of the month
const dateContainer = document.querySelector(".date");
const date = new Date();
dateContainer.innerText = date.getDate();

//short month of the year
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthContainer = document.querySelector(".month");
const d = new Date();
monthContainer.innerText = monthNames[d.getMonth()];

//clock
setInterval(updateclock, 1000);
function updateclock() {
  const clockContainer = document.querySelector(".clock");
  clockContainer.innerText = new Date().toLocaleTimeString();
}

// 2.
let backImage = [
  "images/bg0.jpg",
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpg",
  "images/bg6.jpg",
  "images/bg7.jpg",
  "images/bg8.jpg",
  "images/bg9.jpg",
];

function changeBGImage(whichImage) {
  if (document.body) {
    document.body.style.backgroundImage = "url(" + backImage[whichImage] + ")";
  }
}