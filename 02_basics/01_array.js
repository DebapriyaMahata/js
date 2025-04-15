//Creating an array

const arr=[1,2,3,4,5];
const arr2=["ram","sam","arjun"]
console.log(arr2[1]);

//array methods
arr.push(6)// adding values in the arr
arr.push(7)
arr.pop()//deleting values from the back

arr.unshift(9)//adding the value 9 in the front of the arr and shifting all the values in one place
arr.shift()//delete 0th idx val ,
console.log(arr);

console.log(arr.indexOf(3));
console.log(arr.includes(3));

const newArr=arr.join()

console.log(typeof newArr);//string for join()


//Slice:
let a=[2,3,4,5,6,7]

console.log(`original arr:${a}`);
console.log(a.slice(0,3));
console.log(`after slice arr: ${a}`);

//splice:
console.log(`original arr:${a}`);
console.log(a.splice(0,2));
console.log(`after splice arr: ${a}`);









