'use strict'
// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:
// значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = 'happy';
user.hobby = 'skydiving';
user.premium = false
console.log(user);
const keys = Object.keys(user)
console.log(keys);
for (const key of keys) {
    console.log('Value: ', user[key]);
  }



  let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false 
user['full time'] = true;
 
const keys = Object.keys(user);
// Write code under this line
 console.log(user);
for (const key of keys) {
    message += `${key} + ${user[key]}\n`
  }
 
console.log(message); 