//write a function to take any digit(0-9) and return it in word
function digitToWord(digit) {
  switch (digit) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid Digit";
  }
}
console.log(digitToWord(7));
console.log(digitToWord(9));
console.log(digitToWord(3));

// frontend = React , Flask , Vew.js , Angular ,Bootstrap , Tailwin.
// Backend = Node.js , Springboot , FastAPI, Django , PHP.
