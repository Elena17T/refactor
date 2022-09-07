import { TheLargestNumber } from './index.js';

const result = TheLargestNumber(4, '4.5', '5.6');
const areEqual1 = result === "The 3rd number is largest and equal: 5.6";
console.log(areEqual1);

const result2 = TheLargestNumber(7.7, '7.7', '7.6');
const areEqual2 = result2 === "All three numbers are equal. And equal: 7.7";
console.log(areEqual2);

const result3 = TheLargestNumber('3.1', '4.1', '2.2');
const areEqual3 = result3 === "The 2nd number is largest and equal: 4.1";
console.log(areEqual3);

const result4 = TheLargestNumber(1, 1, 1);
const areEqual4 = result4 === "All three numbers are equal. And equal: 1";
console.log(areEqual4);