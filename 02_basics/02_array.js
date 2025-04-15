//
let arr=[1,2,3,4,5]
let arr2=[6,7,8,9]
arr.push(arr2)
console.log(arr);

//concate
let arr3=[10,11,12,13]
let newArr=arr2.concat(arr3)//purana tarika
console.log(newArr);

//spread operator
let newArr2=[...arr2,...arr3]
console.log(newArr2);

//flat method [1,2,3,[4,5,6]]
let ans=arr.flat(Infinity)
console.log(ans);

// USING VARIABLES CREATING A ARRAY
let A=100
let B=200
let C=300
console.log(Array.of(A,B,C));


console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));//intresting





