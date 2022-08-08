const todayDateAndTime = "2016-05-18T11:27:00";
const todayDate = todayDateAndTime.slice(0, 10);
const currentTime = todayDateAndTime.slice(11, 16);

console.log(currentTime);

const checkSlotAvailability = (time, jobLength, availability) => {
  travelBeforeBuffer = time - 1;
  travelAfterBuffer = time + jobLength + 1;
  if (availability.includes(time)) {
    checkAvailable(travelBeforeBuffer, travelAfterBuffer, availability);
    checkUnavailable(time, travelBeforeBuffer, travelAfterBuffer, availability);
  } else {
    return "FULL";
  }
};

const checkAvailable = (buffer1, buffer2, availability) => {
  const timeBuffers = [buffer1, buffer2];
  if (buffer1 === 8 && buffer2 !== 17) {
    timeBuffers.shift();
  } else if (buffer2 === 18 && buffer1 !== 8) {
    timeBuffers.pop();
  }
  const timeSlotAvailable = timeBuffers.every((value) => {
    return availability.includes(value);
  });
  if (timeSlotAvailable) {
    return "AVAILABLE";
  }
};

const checkUnavailable = (time, buffer1, buffer2, availability) => {
  if (
    (availability.includes(time) && !availability.includes(buffer1)) ||
    !availability.includes(buffer2)
  ) {
    return "UNAVAILABLE";
  }
};

console.log(checkSlotAvailability(15, 1, [9, 10, 14, 15, 16, 17]));

const presentDay = (time, jobLength, availability) => {
  for (let i = 0; i < availability.length; i++) {}
};
