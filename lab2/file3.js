import { fstat } from "fs";
import { stat } from "fs/promises";

const stat = await stat("file1.js");
console.log("file size", fstat.size, "bytes");
console.log(`is file:${fstat.isFile()}`);
console.log(`iss folder:${fstat.isFolder()}`);
console.log(`is syslink:${fstat.isSymbolicLink()}`);
console.log(`created on: ${fstat.birthtime}`);
console.log(`lastused :${fstat.atime}`);
