function sortHighToLow(num) {
  return num.sort((a, b) => b.price - a.price)
}

console.log(sortHighToLow([{id: 1, price: 100}, {id: 2, price: 20}, {id: 3, price: 30}]));
