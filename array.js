//always starts with zero
//array
//let values = [24,22,28];
//console.log(values);

//length of values
//let values = [24, 22, 28];
//console.log(values.length);

//push method in arrray(adding values at the last)
//let values = [];
//values.push(20,22);
//console.log(values);

// pop method in array(removing last element in array)
//let data = [11,12,1,3];
//console.log(data.pop());
//console.log(data);

// shift method in array(removing begining element in array)
//let data = [11,12,1,3];
// console.log(data.shift());
//console.log(data);

// unshift method in array(adding begining element in array)
//let data = [11,12,1,3];
// console.log(data.unshift());
//console.log(data);

// splice method in array(removing elements with respective 
//index value to no.of values you want to remove & after adding elements)
//let data = [1,2,4,3,6];
//console.log(data.splice(1,2,15,16));
//(here 1 is the index value where we removing the elements , 
//  2 is the how many values you want to remove & 15,16 is adding elements)
//console.log(data);

//fetching a particular object(selecting an object)
//let values = [24,22,28];
//console.log(values[0]);

// for loop in array (two types of loops[ for of loop & for in loop])
// for of loop is specified for values(mostly used)
// for in loop is specified for keys

//example(for of loop)(its shows the values of 4 & 55)
//let nums = [];

//nums[0] = 4;
//nums[4] = 55;

//for(let n in nums){
//console.log(n);
//}
//example(for in loop)(its shows the keys in 0 & 4)
//let nums = [];

//nums[0] = 4;
//nums[4] = 55;

//for(let key in nums){
// console.log(key);
//}
// [if you want the nums value in for in loop method use below solution ]
// console.log(nums[key]);

// array destructuring (swap the values)
//let a = 10;
//let b = 15;
//[a,b] = [b,a]
//console.log(a,b);

//  split method in array(specifies the particular object)
// let words = "my laptop is a gaming one".split("");
// let [a,b,c,d,e,f] = words;
// //let [a,b,,  ...d] = words;
// console.log(d);

// forEach ( method is used to calls the function for every element, but not return anything.)
//  let nums = [21,22,23,24]
//  nums.forEach((n,i,nums) => {
//       console.log(n,i,nums);
//  }
//  )
// here n represents the numbers in order
// i represents yhe index value (always starts with zero)
// nums represents the values

//Filter method in array is used to filter the elements like postive,negative values.
// let nums = [21,22,23,24];
// console.log(nums.filter(n => n%2 ===0));

// map method in array (calling function for every element ,
//if same elements are there next element [it means last element was executed]  )

// let map = new Map();
// map.set("bajaj", "nakedsport");
// map.set("enfield", "interceptor");
// map.set("yamaha", "fazer");
// map.set("ktm", "duke");
// map.set("bajaj", "Racesport");

// for(let [k,v] of map){
//       console.log(k, ":", v);
// }

// map.forEach((v,k) => {
//       console.log(k, ":", v);
// });


// filtering odd numbers method
//const odds = arr.filter(number => {
//     return number % 2 !== 0;
// });

// array sort highest to lowest order
// let numbers = [0.54,0.27,0.88,0.598,1.25,2.22];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// array sort lowest to  highest order
// let numbers = [0.54,0.27,0.88,0.598,1.25,2.22];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// reverses an array method
// let numbers = [10,15,20,25,30,35]
// numbers.reverse();
// console.log("Reversed array: ");
// console.log(numbers);

// filters out negative numbers
// let numbers = [-10,10,12,-22,-24,30];
// let negativenumbers = numbers.filter(n => n <0);
// console.log(negativenumbers);

// filters out  Positivenumbers
// let numbers = [-10,10,12,-22,-24,30];
// let positivenumbers = numbers.filter(n => n >0);
// console.log(positivenumbers);

// Remove the spaces found in a string 
// var laptop = "asus tuf array methods/array.jsgaming";
// console.log(laptop.replace(/\s/g,''));(where s is string and g is get compound style)

// Return the number of vowels in a string(it will find out how many vowels inside a 
//string and represnts the count in integars)
// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
// console.log(countVowels("janardhan"));

// boolean method divisible with any number (true or false)
//  function booleanNum(num) {
//     return num % 10 === 0 ? true : false;
//  }
//  console.log(booleanNum(10));

// sum of numbers in an array
// function sumOfArray(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// const numArray = [1,4,-6,12,-20];
// console.log(sumOfArray(numArray));

