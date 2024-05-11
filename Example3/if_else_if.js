// //Example
// let num = 10;

// if (num > 0) {
//   console.log("Number is positive.");
// } else if (num < 0) {
//   console.log("Number is negative.");
// } else {
//   console.log("Number is zero.");
// }


// //example2: if else if
// const password = 'pas$word12345';

// if(password.length >= 12){
//   console.log ('password is very strong so WELCOME!!!');
// } else if(password.length >= 8){
//   console.log ('WELCOME!!!');
// } else{
//   console.log('SORRY!!! the password is too short');
// }


//---------------------------------------------------Inventory---------------------------------------//
let product = {
  product_name: "Chocolate",
  quantity_in_stock: 100,
  unit_price: 5
};

// Adjust price based on stock quantity
if (product.quantity_in_stock < 20) {
  console.log(`${product.product_name} is low on stock, price remains at $${product.unit_price}.`);
} else if (product.quantity_in_stock >= 20 && product.quantity_in_stock <= 50) {
  console.log(`${product.product_name} has adequate stock, price remains at $${product.unit_price}.`);
} else {
  // Assume stock is too high, reduce price to encourage sales
  let new_price = product.unit_price * 0.1;  // 10% discount
  console.log(`${product.product_name} is overstocked, price reduced to $${new_price}.`);
}
