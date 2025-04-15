let num=100
console.log(num);//100

let numm=new Number(100)
console.log(numm);//[Number:100]

console.log(num.toFixed(2));//100.00
//Precision:
let cost=123.687
console.log(num.toPrecision(4));//100.0
console.log(cost.toPrecision(3));//124
console.log(cost.toPrecision(4))//123.7

//tolocal string
let rent=100000000;
console.log(rent.toLocaleString());//us dollar types:
console.log(rent.toLocaleString('en-IN'));//INR types:10,00,00,000

//+++++++++++++++++++++ MATH ++++++++++++++++++++++++++++
let min=Number.MIN_VALUE;
let max=Number.MAX_VALUE;

console.log(Math.abs(-12));//12
console.log(Math.round(4.5));//5
console.log(Math.round(4.12));//4
console.log(Math.floor(4.1));//4
console.log(Math.ceil(4.99));//5
console.log(Math.min(4,2,1,1,0));//0

//Random:
console.log(Math.random());//range: 0 to 1
console.log(Math.floor(Math.random()*10)+1);

let minn=10
let maxx=20
console.log(Math.floor(Math.random()*(maxx-minn+1))+minn);
















