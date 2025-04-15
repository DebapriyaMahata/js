//Premitive(7types):string,number,null,undefined,symbol,BigInt,boolean

const num=10
const isMarried=false
let name="debu"
let id=Symbol(123)
let id2=Symbol(123)
console.log(id===id2)
console.log()
let age=22

//NonPremitive:Array,Object(refrences)
let arr=[1,2,3,4,5]
let arr2=[1,2,"debu",false]

let obj={
    name:"debu",
    roll:22
}
console.log(obj.name);
let newObj=obj
newObj.name="anu"
console.log(obj.name);//anu



 
