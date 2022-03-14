const num = '266219';
let mas = 1;

num.toString().split('').forEach(elem => mas *= elem);
console.log('получилось' + " " + mas);

const ms = mas ** 3;
console.log(ms)
console.log(ms.toString().substr(0,2))