import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};
const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addTocart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`Product added with id ${product.id} into cart`);
};

const ShowCart = async () => {
  const myCart = await getCart();
  console.table(myCart);
  let total = 0;
  total = myCart.reduce((t, item) => t + item.qty * item.price, 0);
  console.log("you have to pay Rs:", total);
};

const removeFromCart = async (pid) => {
  const data = await getCart();

  let count = data.length;
  const newdata = data.filter((item) => item.id !== id);
  const newCount = newdata.length;
  if (count == newCount) {
    console.log(`product with id ${pid} not found`);
  } else {
    await saveCart(newdata);
    console.log(`product with id${pid}delete successfully`);
  }
};
const updatecart = async (pid, value) => {
  const data = await getCart();
  const isFound = data.find((item) => item.id === pid);
  if (isFound) {
    isFound.qty += value;
    await saveCart(data);
    console.log("product quantity updated successfully");
  } else {
    console.log("product id not found");
  }
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart 🛒🤷‍♂️😁");
    console.log("1.................Show Cart");
    console.log("2.................Add to Product");
    console.log("3.................Remove Product");
    console.log("4.................Update Quantity");
    console.log("5.................Checkout");
    choice = await cin.question("Enter your choice: ");
    switch (Number(choice)) {
      case 1:
        await ShowCart();
        break;
      case 2:
        let data = await cin.question("enter id, name,price,qty:");
        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };
        await addTocart(product);

        break;
      case 3:
        let pid = await cin.question("enter product id to remove:");
        await removeFromCart(Number(pid));

        break;
      case 4:
        let pid2 = await cin.question("enter product id to update: ");
        let value = await cin.question("+1 increase , -1 decrease");
        await updatecart(Number(pid), Number(value));
        break;
      case 5:
        console.log("See you later");
        break;
      default:
        console.log("Invalid choice! try again😒");
        break;
    }
  } while (choice != 5);
  cin.close();
};

main();
