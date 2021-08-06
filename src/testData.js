import { uuid } from "uuidv4";

const testInterval = [
  {
    type: "prep",
    name: "prep",
    timeInSeconds: 20,
    timeFormatted: "0:20",
  },
  {
    type: "work",
    name: "work",
    timeInSeconds: 60,
    timeFormatted: "1:00",
  },
  {
    type: "rest",
    name: "rest",
    timeInSeconds: 30,
    timeFormatted: "0:30",
  },
  {
    type: "work",
    name: "work",
    timeInSeconds: 60,
    timeFormatted: "1:00",
  },
  {
    type: "rest",
    name: "rest",
    timeInSeconds: 30,
    timeFormatted: "0:30",
  },
  {
    type: "cool",
    name: "cool",
    timeInSeconds: 10,
    timeFormatted: "0:10",
  },
];

const testPresets = [
  {
    id: uuid(),
    user: "John",
    name: "HIIT Jumping",
    intervals: testInterval,
    totalTime: 210,
    totalTimeFormatted: "00:03:30",
  },
  {
    id: uuid(),
    user: "Mal",
    name: "HIIT Testing",
    intervals: testInterval,
    totalTime: 210,
    totalTimeFormatted: "00:03:30",
  },
  {
    id: uuid(),
    user: "Bob",
    name: "HIIT Testing",
    intervals: testInterval,
    totalTime: 210,
    totalTimeFormatted: "00:03:30",
  },
  {
    id: uuid(),
    user: "Jame",
    name: "HIIT Testing",
    intervals: testInterval,
    totalTime: 210,
    totalTimeFormatted: "00:03:30",
  },
];

export default testPresets;
