var customerName = 'bob';
const leastFavoriteCustomer = 'joe';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'jimmy';
}

// var bestCustomer;
// function setBestCustomer(bestCustomer){
//   var bestCustomer = 'not bob';
//   return bestCustomer;
// }
