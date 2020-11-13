// function getCart (name, age, status, orders, price) {
//     console.log(arguments.length);
    
// }
// getCart('name, age, status, orders, price');

function getParams (name, age, ...rest) {
console.log(name);
console.log(age);
console.log(rest);
console.log(Array.isArray(rest));
console.log(typeof rest);
}

// getParams('Vova', 20);
// getParams('Vova', 20, 'status');
getParams('Vova', 20, 'orders', 452);
