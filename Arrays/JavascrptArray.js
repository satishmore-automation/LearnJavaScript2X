//print array
// let arr=["orange","apple","grapes","banana"];
// console.log(arr);


//print single element of array
//let arr=["orange","apple","grapes","banana"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

//find length of array
//console.log(arr.length);

//print last element of array
//console.log(arr[arr.length-1]);

//print all elements of array
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length;++i){
//     console.log(arr[i]);

// }

// for(value in arr){
//     console.log(arr[value]);
// }

//itterate array using for in loop with index and value
//  for(let index in arr){
//      console.log(index,arr[index]);
//  }

//  for(let index in arr){
//     console.log(index,arr[index]);
//  }

//sum of all elements in array
//  let arr=[1,2,3,4,5];
//     let sum=0;  
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     console.log(sum);

//find maximum element in array
// let arr=[1,2,3,4,5];
// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

//remove duplicate from array
// let arr=[1,2,3,4,5,1,2,3];
// let uniqueArr=[...new Set(arr)];
// console.log(uniqueArr);

//explain above code sentence by sentence split sentence by sentence:

// let arr=[1,2,3,4,5,1,2,3]; // This line initializes an array called 'arr' with some duplicate values (1, 2, and 3).

// let uniqueArr=[...new Set(arr)]; // This line creates a new array called 'uniqueArr' by using the Set object to remove duplicates from 'arr'. The spread operator (...) is used to convert the Set back into an array.

//dont give me code first let me write it and then explain it to me.

// let arr=[1,2,3,4];
// let doubledArr=arr.map(num=>num*2);
// console.log(doubledArr);

//map() more practical example
// let arr=[1,2,3,4];
// let squaredArr=arr.map(num=>num*num);
// console.log(squaredArr);     

//filter() example
// let arr=[1,2,3,4,5,6];
// let evenArr=arr.filter(num=>num%2===0);
// console.log(evenArr);

//reduce() example
// let arr=[1,2,3,4,5];
// let sum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log(sum);        

//find maximum element in array using reduce()
// let arr=[1,2,3,4,5];
// let max=arr.reduce((accumulator,currentValue)=>Math.max(accumulator,currentValue));
// console.log(max);    

//find minimum element in array using reduce()
// let arr=[1,2,3,4,5];
// let min=arr.reduce((accumulator,currentValue)=>Math.min(accumulator,currentValue));
// console.log(min);

//sort array in ascending order
// let arr=[5,2,3,1,4];
// arr.sort((a,b)=>a-b);
// console.log(arr);

//sort array in descending order
// let arr=[5,2,3,1,4];
// arr.sort((a,b)=>b-a);
// console.log(arr);

//find index of element in array
// let arr=[1,2,3,4,5];
// let index=arr.indexOf(3);
// console.log(index);

//find last index of element in array
// let arr=[1,2,3,4,5,3];
// let lastIndex=arr.lastIndexOf(3);
// console.log(lastIndex);

//check if element exists in array
// let arr=[1,2,3,4,5];
// let exists=arr.includes(3);
// console.log(exists); 

//check if element does not exist in array
// let arr=[1,2,3,4,5];
// let notExists=!arr.includes(6);
// console.log(notExists);

//concat two arrays
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let concatenatedArr=arr1.concat(arr2);
// console.log(concatenatedArr);

//join array elements into a string
// let arr=[1,2,3,4,5];
// let joinedString=arr.join(",");
// console.log(joinedString);

//split string into array
// let str="1,2,3,4,5";
// let splitArr=str.split(",");
// console.log(splitArr);

//reverse array
// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr);

//slice array
// let arr=[1,2,3,4,5];
// let slicedArr=arr.slice(1,4);
// console.log(slicedArr);

//splice array
// let arr=[1,2,3,4,5];
// arr.splice(2,1); // removes 1 element at index 2
// console.log(arr);

//fill array with a value
// let arr=new Array(5).fill(0);
// console.log(arr);

//find unique elements in array
// let arr=[1,2,3,4,5,1,2,3];
// let uniqueArr=arr.filter((a,b,c)=>c.indexOf(a)===b);
// console.log(uniqueArr);

//find duplicate elements in array
// let arr=[1,2,3,4,5,1,2,3];
// let duplicateArr=arr.filter((value,index,self)=>self.indexOf(value)!==index);
// console.log(duplicateArr);

//flatten array
// let arr=[[1,2],[3,4],[5,6]];
// let flattenedArr=arr.flat();
// console.log(flattenedArr);   

//flatten nested array
// let arr=[1,[2,[3,[4,5]]]];
// let flattenedArr=arr.flat(Infinity);
// console.log(flattenedArr);

//find intersection of two arrays
// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7,8];
// let intersectionArr=arr1.filter(value=>arr2.includes(value));
// console.log(intersectionArr);

//find union of two arrays
// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7,8];
// let unionArr=[...new Set([...arr1,...arr2])];
// console.log(unionArr);       

//find difference of two arrays
// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7,8];
// let differenceArr=arr1.filter(value=>!arr2.includes(value));
// console.log(differenceArr);

//find symmetric difference of two arrays
// let arr1=[1,2,3,4,5];
// let arr2=[4,5,6,7,8];
// let symmetricDifferenceArr=[...new Set([...arr1.filter(value=>!arr2.includes(value)),...arr2.filter(value=>!arr1.includes(value))])];
// console.log(symmetricDifferenceArr);

//find subset of array
// let arr1=[1,2,3];
// let arr2=[1,2,3,4,5];
// let isSubset=arr1.every(value=>arr2.includes(value));
// console.log(isSubset);

//find superset of array
// let arr1=[1,2,3,4,5];
// let arr2=[1,2,3];
// let isSuperset=arr1.every(value=>arr2.includes(value));
// console.log(isSuperset);

//find power set of array
// let arr=[1,2,3];
// let powerSet=[[]];   

//interview imp questions
//find all pairs in array that sum to a target
// let arr=[1,2,3,4,5];
// let target=5;    

//give me some important questions on array in javascript for interview and also give me answer of those questions.

//1. How do you find the length of an array in JavaScript?
//Answer: You can find the length of an array using the 'length' property. For example, 'arr.length' will return the number of elements in the array 'arr'. 
//2. How do you access the last element of an array in JavaScript?
//Answer: You can access the last element of an array using the index 'arr.length - 1'. For example, 'arr[arr.length - 1]' will return the last element of the array 'arr'.
//3. How do you iterate over an array in JavaScript?

//Answer: You can iterate over an array using various methods such as a 'for' loop, 'for...of' loop, 'for...in' loop, or array methods like 'forEach', 'map', 'filter', etc. For example, using a 'for' loop:
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
//4. How do you find the maximum element in an array in JavaScript?
//Answer: You can find the maximum element in an array using the 'Math.max' function along with the spread operator. For example, 'Math.max(...arr)' will return the maximum element in the array 'arr'.
//5. How do you remove duplicates from an array in JavaScript?
//Answer: You can remove duplicates from an array using a 'Set' which only stores unique values. For example, 'let uniqueArr = [...new Set(arr)]' will create a new array 'uniqueArr' that contains only the unique elements from the original array 'arr'.