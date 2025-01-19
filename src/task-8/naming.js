function calcTotalPurchaseAmountOfValuableCustomers(arrayOfPurchases) {
  let sum = 0;
  arrayOfPurchases.forEach(i => {
    sum += i;
  });
  return sum;
}

const purchaseAmountOfValuableCustomers = [10000, 20000, 30000];
console.log(calcTotalPurchaseAmount(purchaseAmountOfValuableCustomers));