// You have an object that contains items as keys and their prices as values. Your task is to write a function that returns the total price of all the items in the object.

const shoppingCart = {
  apple: 2.5,
  banana: 1.25,
  orange: 3.0,
  milk: 4.5,
  bread: 2.75,
};

const calculateTotal = () => {
  let totalCost = 0;
  for (let value in shoppingCart) {
    if (shoppingCart[value]) {
      totalCost += shoppingCart[value];
    }
  }
  return totalCost;
};

console.log(calculateTotal(shoppingCart));

// You have an object that contains employees' names as keys and the number of hours they worked as values. Write a function that returns the name of the employee who worked the most hours.

const employees = {
  Alice: 40,
  Bob: 35,
  Charlie: 45,
  Diana: 50,
  Evan: 42,
};

const getTopEmployees = () => {
  let highestHour = 0;
  let employeeName = '';
  for (let name in employees) {
    if (employees[name] > highestHour) {
      highestHour = employees[name];
      employeeName = name;
    }
  }
  return employeeName;
};

console.log(getTopEmployees(employees));

const inventory = [
  { name: 'apple', category: 'fruit', price: 1.75 },
  { name: 'banana', category: 'fruit', price: 0.5 },
  { name: 'broccoli', category: 'vegetable', price: 2.0 },
  { name: 'milk', category: 'dairy', price: 1.5 },
  { name: 'cheddar', category: 'dairy', price: 3.0 },
  { name: 'orange', category: 'fruit', price: 1.25 },
];

// Find all fruits: Write a function that returns an array of all items in the fruit category using filter().
const getFruits = () => {
  const fruits = inventory.filter((element) => element.category === 'fruit');
  return fruits;
};

// Find the first item with a price above $2: Write a function that returns the first item whose price is greater than $2 using find().
const getPriceAboveTwo = () => {
  const price = inventory.find((element) => element.price >= 2);
  return price;
};

console.log(getPriceAboveTwo(inventory));

// Create a list of item names: Write a function that returns an array of just the names of all the items using map().
const getInventoryNames = () => {
  const names = inventory.map((element) => element.name);
  return names;
};

console.log(getInventoryNames(inventory));

// Calculate the total price: Write a function that calculates the total price of all the items in the inventory using reduce().
const getTotalInventoryPrice = () => {
  const price = inventory.reduce((accumulator, currentValue) => {
    accumulator += currentValue.price;
    return accumulator;
  }, 0);
  return price;
};

console.log(getTotalInventoryPrice(inventory));
