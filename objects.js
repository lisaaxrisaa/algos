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
