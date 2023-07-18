const food = require("./food.json");

function one(food) {
  console.log(food);
}

function two(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Vegetable") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}
function three(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Fruit") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}
function four(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Protein") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}
function five(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Nuts") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}
function six(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Grain") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}
function seven(food) {
  let categoryObjects = food.filter((element) => {
    if (element.category == "Dairy") return true;
    return false;
  });
  console.log(categoryObjects);
  console.log("");
}

function eight(food) {
  let calorieAbove100 = food.filter((element) => {
    if (element.calorie > 100) return true;
    return false;
  });
  console.log(calorieAbove100);
  console.log("");
}

function nine(food) {
  let calorieBelow100 = food.filter((element) => {
    if (element.calorie < 100) return true;
    return false;
  });
  console.log(calorieBelow100);
  console.log("");
}

function ten(food) {
  let decreasingArray = food.sort((a, b) => {
    return b.protiens - a.protiens;
  });
  console.log(decreasingArray);
  console.log("");
}

function eleven(food) {
  let increasingArray = food.sort((a, b) => {
    return a.cab - b.cab;
  });
  console.log(increasingArray);
  console.log("");
}

one(food);
two(food);
three(food);
four(food);
five(food);
six(food);
seven(food);
eight(food);
nine(food);
ten(food);
eleven(food);