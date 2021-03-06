'use strict'
// Напиши функцию countProps(obj), 
// считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.


//======================decision=================\\
const countProps = function(obj) {
    'use strict';
  // Write code under this line
  const key = Object.keys(obj);
  return key.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
//================================================\\