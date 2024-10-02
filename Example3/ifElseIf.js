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
// let product = {
//   productName: "Chocolate",
//   quantityInStock: 100,
//   unit_price: 5
// };

// // Adjust price based on stock quantity
// if (product.quantityInStock < 20) {
//   console.log(`${product.productName} is low on stock, price remains at $${product.unit_price}.`);
// } else if (product.quantityInStock >= 20 && product.quantityInStock <= 50) {
//           console.log(`${product.productName} has adequate stock, price remains at $${product.unit_price}.`);
//         } else {
//                 // Assume stock is too high, reduce price to encourage sales
//                 let new_price = product.unit_price * 0.9;  // 10% discount
//                 console.log(`${product.productName} is overstocked, price reduced to $${new_price}.`);
//                 }
