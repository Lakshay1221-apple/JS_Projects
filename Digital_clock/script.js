let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

let currentTime = new Date();
let currentHours = currentTime.getHours(); // Get the current hours
let currentMinutes = currentTime.getMinutes(); // Get the current minutes
let currentSeconds = currentTime.getSeconds(); // Get the current seconds

hrs.innerHTML = currentHours;
mins.innerHTML = currentMinutes;
secs.innerHTML = currentSeconds;

setInterval(() => { // Update the time every second
  let newTime = new Date();
  let newHours = newTime.getHours();
  let newMinutes = newTime.getMinutes();
  let newSeconds = newTime.getSeconds();

  hrs.innerHTML = newHours;
  mins.innerHTML = newMinutes;
  secs.innerHTML = newSeconds;
}, 1000);


