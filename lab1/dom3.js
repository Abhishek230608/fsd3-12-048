import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});
button.emit("click", "Abhijeet singh");
button.emit("click", "Abhishek");
button.emit("click", "Rani kumari");
button.emit("click");
