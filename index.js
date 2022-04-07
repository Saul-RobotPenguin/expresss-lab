require("dotenv").config();

const express = require("express");
const app = express();

const fruits = require("./fruits");

//ROUTES

app.get("/", (req, res) => {
  res.send("Express Lab");
});

app.get("/ping", (req, res) => {
  res.json("pong");
});

app.get("/greet/:name", (req, res) => {
  res.send("Why Hello there " + req.params);
});

app.get("/five", (req, res) => {
  res.json((array = [1, 2, 3, 4, 5]));
});

app.get("/evens/:n", (req, res) => {
  res.send(evenNumbers(req.params.n));

  function evenNumbers(number) {
    let numbers = [];
    for (let x = 2; x <= number; x += 2) {
      numbers.push(x);
    }
    return res.json(numbers);
  }
});

app.get("/namelength/:name", (req, res) => {
  res.json(req.params.name.length);
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/:name", (req, res) => {
  let fruitMatch = fruits.find((fruit) => fruit.name === req.params.name);
  return res.json(fruitMatch);
});

//PORTS
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`up on port ${PORT}`));
