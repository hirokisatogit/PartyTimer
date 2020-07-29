var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function () {
  // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
  for (var activated = 0; activated < activeElements.length; activated++) {
    activeElements[activated].classList.toggle("active");
  }
});

var sunrise = 4;
var wakeuptime = 7;
var noon = 12;
var partytime;
var dawn = 17;
var evening = 19;

// Getting it to show the current time on the page
var showCurrentTime = function () {
  // display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime =
    meridian +
    " " +
    " " +
    " " +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    "!";

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
  var time = new Date().getHours();
  var messageText;
  var image =
    "https://lh4.googleusercontent.com/proxy/oZ-bLFPBtolvJiL2yOFZmrZcjhDYv9QqnQ1v4BJEP8BqEU2msT9orfeKJVLjM_r2Xxna76uvF4XL00YR-1QWvQ6SThYFvoifglBYZ89dkU7y=w3840-h2160-p-k-no-nd-mv";

  // var timeEventJS = document.getElementById("timeEvent");
  // var lolcatImageJS = document.getElementById('lolcatImage');

  if (time == partytime) {
    image =
      "https://www.rakukon.com/howto/wp/wp-content/uploads/2019/07/rakukon-salon_prepare-35.jpg";
  } else if (time == sunrise) {
    image =
      "https://lh4.googleusercontent.com/proxy/5XnYbqRJinWWyCOY_KzjDUrS_5GN42qM8vdWvWiHG5Md-JEcG4zqDI8SyfCQpZeCtuvyc9QvUjqcguXgoS-EZefn7zle0HbGwzHhBnbqL53r=w3840-h2160-p-k-no-nd-mv";
  } else if (time == wakeuptime) {
    image =
      "https://lh4.googleusercontent.com/proxy/kFIJNnm2DMbS3B5LXaIdm2JKI6twGWwmzQbcJCfqTfuaH_ULD50v1Z3BGPEF32xTPRvgGLx492zcy_kcatCde2wmz-9ZYFqifbJRMl2DzyE=w3840-h2160-p-k-no-nd-mv";
  } else if (time >= evening) {
    image =
      "https://lh3.googleusercontent.com/proxy/nRp2cJiwpB2kBkl09FaLZ250FNt5OH10cA5Bn6EmExC6LE5RssGoVGnifWkqWRg031jLNGmG2UtlOefpb8ppf40MdfKYs2V3REq7Plj-6BMa=w3840-h2160-p-k-no-nd-mv";
  } else if (dawn <= time && time < evening) {
    image =
      "https://lh5.googleusercontent.com/proxy/oxUbE3Qn-c1CLtnPTEtvTl6ccUFz1pPakdmOuojrH53_8cWEYGoyaUIMT5IBCr8j0IZQUqb49gXHd4bDA7wdhsWDw8_MNOeOqCcSWJfcbfR6=w3840-h2160-p-k-no-nd-mv";
  } else if (time < noon) {
    image =
      "https://lh6.googleusercontent.com/proxy/MdXBfxi4vCF0ZKalCD1XFNnrumrgr3DoIIwdqaPlZG9Q0K4hUVQQUGfBnqzm3-jY1EJEREorVqCj7TUKyEqhPiz32FyE051g9G8sMKhGdyM=w3840-h2160-p-k-no-nd-mv";
  } else if (time >= noon) {
    image =
      "https://lh6.googleusercontent.com/proxy/g3MNRR4S0VBk1KWmTem8W_eoNZkjk4v5AKsQ4tUYpp4_ISwDFXdLwYQVPklvs0FjC6gGCbi1TqTgB3YNS6qSV80X3LozHJYmmHImtTqinxPl=w3840-h2160-p-k-no-nd-mv";
  } else {
    image =
      "https://lh4.googleusercontent.com/proxy/oZ-bLFPBtolvJiL2yOFZmrZcjhDYv9QqnQ1v4BJEP8BqEU2msT9orfeKJVLjM_r2Xxna76uvF4XL00YR-1QWvQ6SThYFvoifglBYZ89dkU7y=w3840-h2160-p-k-no-nd-mv";
  }

  // console.log(messageText);
  // timeEventJS.innerText = messageText;
  // backgroundImage.src = image;
  document.getElementById("mainImage").style.backgroundImage =
    "url(" + image + ")";

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    partytime = -1;
    partyTimeButton.innerText = "Party!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Nap-Time selector
// var napTimeSelector = document.getElementById("napTimeSelector");

// var napEvent = function () {
//   naptime = napTimeSelector.value;
// };

// napTimeSelector.addEventListener("change", napEvent);
