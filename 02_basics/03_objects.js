//Objects declares in two ways:1.using literals 2.using constractor(singleton)


// Object Literals
let obj={
    name:"debu",
    roll:10,
    "sec":"B"


}
console.log(obj.name);//accesing using dot operators
console.log(obj["roll"]);//traditional style to accesss object propertis
console.log(obj["sec"]);

//how to use symbol in object
let symb=Symbol("123")
let newObj={
    [symb]:"1234"
}
console.log(newObj[symb]);

//how to freez an object

Object.freeze(obj);//after that ,I cant change anything in object
obj.name="debuuuuuu"
console.log(obj.name);//no change






