let date1 = document.querySelector(".DATE1");
let date2 = document.querySelector(".DATE2");
let color = document.querySelector(".color");
///////////////////////////////////////////////////
let DATE1 = "",
  DATE2 = "";

window.onload = function () {
  getColor();
  let time = setInterval(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    /*******************************************/
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let m, h, s, AmPm, d, M, y;
    if (minute < 10) {
      m = `0${minute}`;
    } else {
      m = minute;
    }
    if (hour < 10) {
      h = `0${hour}`;
    } else {
      h = hour;
    }
    if (hour < 10) {
      h = `0${hour}`;
    } else {
      h = hour;
    }
    if (second < 10) {
      s = `0${second}`;
    } else {
      s = second;
    }
    if (hour < 13) {
      AmPm = "AM";
    } else {
      AmPm = "PM";
    }
    /*******************************************/
    if (day < 10) {
      d = `0${day}`;
    } else {
      d = day;
    }
    if (month < 10) {
      M = `0${month}`;
    } else {
      M = month;
    }
    if (year < 10) {
      y = `0${year}`;
    } else {
      y = year;
    }
    DATE1 = `${h}:${m}:${s} ${AmPm}`;
    DATE2 = `${d}/${M}/${y}`;
    date1.textContent = DATE1;
    date2.textContent = DATE2;
  }, 1000);
};
color.onchange = function () {
  setColor(color.value);
};
let box12 = document.querySelector(".box12");
function setColor(color) {
  localStorage.setItem("colorPage", color);
  document.body.style.backgroundColor = color;
  box12.style.backgroundColor = color;
}
function getColor() {
  document.body.style.backgroundColor = localStorage.getItem("colorPage");
  box12.style.backgroundColor = localStorage.getItem("colorPage");
  color.value = localStorage.getItem("colorPage");
}
