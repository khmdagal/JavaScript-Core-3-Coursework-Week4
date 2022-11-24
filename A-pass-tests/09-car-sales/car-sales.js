
const sales = (cars) => cars.reduce((acc, carrenValue) => {
    let make = carrenValue.make;
    let price = carrenValue.price
  //console.log(make);
  if (acc[make]) {
    acc[make] = acc[make] + price;
  } else {
    acc[make] = price;
  }
  //console.log(acc);
  return acc;
}, {});

//console.log(sales(carsSold))






module.exports = sales;
