import { log } from "console";
import { appendFile } from "fs";
import { readFile } from "fs/promises";
const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("file not found sorryyy");
  } finally {
    console.log("read data finished");
  }
};
const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const appendData = async (filename, content) => {
  try {
    await appendFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
// node if a function uses await keyword then the function must be async
const data = await readData("fun1.js");

console.log(data);
