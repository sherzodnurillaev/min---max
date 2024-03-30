// Задание найти мин и макс с массива 
let arr = [6, 22, 32, 56, 45, 3, 25, 7, 9, 12 ]

let max = []
let min = []

max.push(Math.max(...arr)) 
min.push(Math.min(...arr)) 

console.log('max - ' + max);
console.log('min - ' + min);
