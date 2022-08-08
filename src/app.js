const todayDateAndTime = "2016-05-18T11:27:00";
const todayDate = todayDateAndTime.slice(0, 10);

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

console.log(
  checkSlotAvailability(1, 1, "2016-05-18", [9, 10, 11, 12, 13, 14, 17])
);
