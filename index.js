(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const availablityData = require("./availabilityDates.json");

const todayDateAndTime = document.getElementById("todayDate").innerHTML;
const availabilityBtns = document.querySelectorAll(".btn");
const jobLength = document.getElementById("myRange").value;
const todayDate = todayDateAndTime.slice(0, 10);

const dates = document.querySelectorAll(".date");
console.log(dates);
const availabilityHoursArr = [];

for (let i = 0; i < availablityData.length; i++) {
  availabilityHoursArr.push(availablityData[i].HoursAvailable);
}

const buttonSelector = () => {
  for (let i = 0; i < availabilityBtns.length; i++) {
    availabilityBtns[i].addEventListener("click", () => {
      if (availabilityBtns[i].innerHTML === "Available") {
        console.log("true");
        availabilityBtns[i].innerHTML = "Selected";
      }
    });
  }
};

buttonSelector();

const currentTime = () => {
  slicedTime = todayDateAndTime.slice(11, 16);
  if (slicedTime[3] == 0 && slicedTime[4] == 0) {
    return parseInt(slicedTime.slice(0, 2));
  } else {
    return parseInt(slicedTime.slice(0, 2)) + 1;
  }
};

const checkSlotAvailability = (time, jobLength, date, availability) => {
  if (date === todayDate) {
    return presentDay(time, jobLength, availability);
  }
  return checkAvailabilityStatus(time, jobLength, availability);
};

const checkAvailabilityStatus = (time, jobLength, availability) => {
  travelBeforeBuffer = time - 1;
  travelAfterBuffer = time + jobLength + 1;
  if (availability.includes(time)) {
    if (time === 17 || time === 9) {
      if (time === 17) {
        if (jobLength === 1 && availability.includes(travelBeforeBuffer)) {
          return "AVAILABLE";
        } else {
          return "UNAVAILABLE";
        }
      } else if (time === 9 && availability.includes(travelAfterBuffer)) {
        return "AVAILABLE";
      }
    } else if (
      availability.includes(travelBeforeBuffer) &&
      availability.includes(travelAfterBuffer)
    ) {
      return "AVAILABLE";
    } else if (
      !availability.includes(travelBeforeBuffer) ||
      !availability.includes(travelAfterBuffer)
    ) {
      return "UNAVAILABLE";
    }
  } else {
    return "FULL";
  }
};

const presentDay = (time, jobLength, availability) => {
  travelBeforeBuffer = time - 2;
  travelAfterBuffer = time + jobLength + 1;
  if (time <= currentTime()) {
    return "UNAVAILABLE";
  } else {
    return checkAvailabilityStatus(time, jobLength, availability);
  }
};

// console.log(
//   checkSlotAvailability(1, 1, "2016-05-18", [9, 10, 11, 12, 13, 14, 17])
// );

},{"./availabilityDates.json":2}],2:[function(require,module,exports){
module.exports=[
  {
    "Date": "2016-05-18",
    "HoursAvailable": [9, 10, 11, 12, 13, 14, 17]
  },
  {
    "Date": "2016-05-19",
    "HoursAvailable": [9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    "Date": "2016-05-20",
    "HoursAvailable": [9, 10, 14, 15, 16, 17]
  },
  {
    "Date": "2016-05-21",
    "HoursAvailable": [9, 10, 11, 12, 13]
  },
  {
    "Date": "2016-05-23",
    "HoursAvailable": [13, 14, 15, 16]
  },
  {
    "Date": "2016-05-24",
    "HoursAvailable": [11, 12, 15, 16, 17]
  }
]

},{}]},{},[1]);
