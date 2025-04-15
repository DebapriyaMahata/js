//Stack memory for 'premitive' datatypes,here the copied values are given not original value;

let num=20
let newNum=num
newNum=10

console.log(num);//num not changed because here copid value givenn to newnum

//heap memory for non-premitive data types,here original value (refrence)will change 

let obj={
    name:"debu",
    id:22
}
let obj2=obj;
obj2.name="anu"
console.log(obj.name)

