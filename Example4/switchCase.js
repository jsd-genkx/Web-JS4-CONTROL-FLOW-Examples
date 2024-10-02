// //switch statment. it compare using === behind the sence, if you declare a grade "50" in the case have to be "50" because it check the type aswell
// const score = 85;

// switch (true) {
// 	// If score is 90 or greater
// 	case score >= 90:
// 		console.log(" You are grad is A");
// 		break;
// 	// If score is 80 or greater
// 	case score >= 80:
// 		console.log("You are grad is B");
// 		break;
// 	// If score is 70 or greater
// 	case score >= 70:
// 		console.log("You are grad is C");
// 		break;
// 	// If score is 60 or greater
// 	case score >= 60:
// 		console.log("You are grad is D");
// 		break;
// 	// Anything 59 or below is failing
// 	default:
// 		console.log("You are grad is F");
// }


// const score = 85;

// switch (score) { //if you use the score for switch it will compare from the first case  = F
//   case score >= 90:
//     console.log("Your grade is A");
//     break;
//   case score >= 80:
//     console.log("Your grade is B");
//     break;
//   case score >= 70:
//     console.log("Your grade is C");
//     break;
//   case score >= 60:
//     console.log("Your grade is D");
//     break;
//   default:
//     console.log("Your grade is F"); 
// }



// let score = 75;
// let grade;

// switch (true) {
//   case score >= 90:
//     grade = "A";
//     break;
//   case score >= 80:
//     grade = "B";
//     break;
//   case score >= 70:
//     grade = "C";
//     break;
//   case score >= 60:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(`Your grade is ${grade}.`);



//-------------------------------------Use Case for swith Case----------------------
//menu options
// Define inventory categories
// const categories = ["Groceries", "Toiletries", "Stationery", "Household Cleaning Supplies", "Snacks and Beverages"];

// // Prompt the user to select a category
// let userChoice = parseInt(prompt("Enter the number of the category:\n1. Groceries\n2. Toiletries\n3. Stationery\n4. Household Cleaning Supplies\n5. Snacks and Beverages"));

// // Process the user's choice
// switch (userChoice) {
//     case 1:
//         console.log("You've selected the Groceries category.");
//         break;
//     case 2:
//         console.log("You've selected the Toiletries category.");
//         break;
//     case 3:
//         console.log("You've selected the Stationery category.");
//         break;
//     case 4:
//         console.log("You've selected the Household Cleaning Supplies category.");
//         break;
//     case 5:
//         console.log("You've selected the Snacks and Beverages category.");
//         break;
//     default:
//         console.log("Invalid choice. Please select a valid category number.");
// }


//menu options
// Prompt the user to select an option
// let choice = parseInt(prompt("Enter your choice (1-4):\n1. Pizza\n2. Burger\n3. Salad\n4. Pasta"));

// // Process the user's choice
// switch (choice) {
//     case 1:
//         console.log("You've selected Pizza. Enjoy your meal!");
//         break;
//     case 2:
//         console.log("You've selected Burger. Enjoy your meal!");
//         break;
//     case 3:
//         console.log("You've selected Salad. Enjoy your meal!");
//         break;
//     case 4:
//         console.log("You've selected Pasta. Enjoy your meal!");
//         break;
//     default:
//         console.log("Invalid choice. Please select a valid option.");
// }



//State Status
// // Define possible status values for products
// const statusValues = ["In Stock", "Low Stock", "Out of Stock", "Overstocked"];

// // Simulate the status of a product
// let productStatus = "Low Stock";

// // Process the product's status
// switch (productStatus) {
//     case "In Stock":
//         console.log("Product is currently in stock.");
//         break;
//     case "Low Stock":
//         console.log("Product is currently low in stock. Consider reordering soon.");
//         break;
//     case "Out of Stock":
//         console.log("Product is currently out of stock. An urgent reorder is needed.");
//         break;
//     case "Overstocked":
//         console.log("Product is currently overstocked. Consider putting it on sale.");
//         break;
//     default:
//         console.log("Unknown product status.");
// }


// //User Status
// // Define possible states
// const states = ["Active", "Inactive", "Pending", "Blocked"];

// // Simulate a user's current state
// let userState = "Active";

// // Process the user's state
// switch (userState) {
//     case "Active":
//         console.log("User is currently active.");
//         break;
//     case "Inactive":
//         console.log("User is currently inactive.");
//         break;
//     case "Pending":
//         console.log("User account is pending approval.");
//         break;
//     case "Blocked":
//         console.log("User account is blocked.");
//         break;
//     default:
//         console.log("Unknown user state.");
// }

//Category or Type Switching
// Define product categories
// const categories = ["Groceries", "Toiletries", "Stationery", "Household Cleaning Supplies", "Snacks and Beverages"];

// // Simulate the product number's category
// let productCategoriesNumber = 3; // Assume the product number belongs to category 3 (Stationery)

// // Process the product's category
// switch (productCategoriesNumber) {
//     case 1:
//         console.log("Product belongs to the Groceries category.");
//         break;
//     case 2:
//         console.log("Product belongs to the Toiletries category.");
//         break;
//     case 3:
//         console.log("Product belongs to the Stationery category.");
//         break;
//     case 4:
//         console.log("Product belongs to the Household Cleaning Supplies category.");
//         break;
//     case 5:
//         console.log("Product belongs to the Snacks and Beverages category.");
//         break;
//     default:
//         console.log("Unknown product category.");
// }


//------------------------------------------------Inventory----------------------------------------------//

let products = {
  productName: "Chocolate",
  quantityInStock: 7,
  unit_price: 5
};


switch (true) {
  case products.quantityInStock === 0:
      console.log(`${products.productName} is out of stock. An urgent reorder is needed.`);
      break;
  case products.quantityInStock > 0 && products.quantityInStock <= 10:
      console.log(`${products.productName} has low stock. Consider reordering soon.`);
      break;
  case products.quantityInStock > 10 && products.quantityInStock <= 50:
      console.log(`${products.productName} is in stock. All is well.`);
      break;
  case products.quantityInStock > 50:
      console.log(`${products.productName} is overstocked. Consider putting it on sale.`);
      break;
  default:
      console.log(`Unknown stock status for ${products.productName}.`);
      break;
}


//if else and switch make more sense
// let products = {
//   productName: "Chocolate",
//   quantityInStock: 7
// };

// // Pre-determine the category
// let stockCategory;
// if (products.quantityInStock === 0) {
//   stockCategory = "outOfStock";
// } else if (products.quantityInStock > 0 && products.quantityInStock <= 10) {
//   stockCategory = "lowStock";
// } else if (products.quantityInStock > 10 && products.quantityInStock <= 50) {
//   stockCategory = "normalStock";
// } else {
//   stockCategory = "overstock";
// }

// // Now use switch to perform actions based on stock category
// switch (stockCategory) {
//   case "outOfStock":
//       console.log(`${products.productName} is out of stock. An urgent reorder is needed.`);
//       break;
//   case "lowStock":
//       console.log(`${products.productName} has low stock. Consider reordering soon.`);
//       break;
//   case "normalStock":
//       console.log(`${products.productName} is in stock. All is well.`);
//       break;
//   case "overstock":
//       console.log(`${products.productName} is overstocked. Consider putting it on sale.`);
//       break;
//   default:
//       console.log(`Unknown stock status for ${products.productName}.`);
//       break;
// }











