import users from './users.js';
const calculateTotalBalance = users => users.reduce((balance, user) => balance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
