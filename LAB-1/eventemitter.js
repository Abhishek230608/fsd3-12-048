import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("System starts");
};

const working = (name) => {
  console.log(`${name} Add item to cart`);
};

const checkout = (name) => {
  console.log(`${name} Logged out`);
};
// const shutdown =(name)=>{
//     console.log(`${name} System shutdown`);
// };

const task = new EventEmitter();
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);
task.once("exit", () => {
  console.log("System shutting down");
});

task.emit("greet", "Abhijeet Singh");
task.emit("greet", "Aman lohani");
task.off("greet", working);
task.emit("greet", "Abhishek Panday");
task.emit("greet", "Manager");
