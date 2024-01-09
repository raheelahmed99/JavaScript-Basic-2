// 1# Resverse the strings
// function strReverse(str){
//     let rStr = "";
//     for (let i = str.length-1; i >= 0; i--){
//         rStr += str[i]; 
//     }
//     return rStr;
// }
// console.log(strReverse("React JavaScript"));



// 2# Count the numbers of vowels in string
// function countVowel(strVol){
//     let count = 0;
//     for(let i = 0; i < strVol.length; i++){
//         let strLwrVol = strVol.toLowerCase();
//         if(strLwrVol[i] === "a" || strLwrVol[i] === "e" ||strLwrVol[i] === "i" || 
//         strLwrVol[i] === "o" || strLwrVol[i] === "u"){
//             count+= 1;
//         }
//     }
//     return count;
// }

// console.log(countVowel("Raheel Ahmed Frontend Developer"));

// #3 Upper case first letter of each word
// var string = "hi! I am react developer";
// var newStr = "";
// for(let i = 0; i < string.length; i++){
//     if (i === 0){
//     newStr += string[i].toUpperCase();
//     }
//     else if(string[i-1] === " " ){
//             newStr += string[i].toUpperCase();
//    }
//     else{
//     newStr += string[i];
//     }  
// }
// console.log(newStr);


// #4 check string is palindrome or not
// let strRvsFuncVar = function(str2){
//     let rvsStr = "";
//     for (let i = str2.length-1; i >= 0; i--){
//         rvsStr += str2[i]; 
//     }
//     if(rvsStr === str2){
//        console.log(str2+" String is palindrome");
//      }
//      else{
//         console.log(str2+" String is not palindrome");
//      }
// }
// strRvsFuncVar("eye");
// strRvsFuncVar("eyes");


// 5#  sum of all positive numbers in array

// let myArr = [2, 5, -6, -1, 0, 8, -9, 3];
// let sumNum = 0;
// myArr.forEach((item) => {
//     if(item > 0) sumNum += item;
// })

// console.log(sumNum);

//6# Find first index of specific element in array

// let arr1 = ['Egg', 'Bread', 'Vegetable', 'Sugar', 5, 7, 8, 'Sugar'];
// let findEl = "Sugar";

// let findInd = arr1.findIndex((index) => {
//     if (index === findEl) return index;
// });
// console.log(findInd);

// 7# Remove Duplicates values in array

//  let arr3 = [2, 5, 2, 6, 7, 9, 8, 5];
// for(let i = 0; i < arr3.length; i++){
//     for(let j = 0; j < arr3.length; j++){
//     if( !(i === j))
//      if (arr3[i] === arr3[j]){
//        arr3.splice(j,1);
//      }
//     }

// }
// console.log(arr3);

// 8# Sort Array with ascending and decending order

// let arr4 = [ 5, 3, 8,  2, 4, 6, 7];
// let assArr = [];
// let count = 0;
//  const arrLen = arr4.length;
// let storeVal;
//    for( let k = 0; k < arrLen; k++){
//     for(let i = 0; i < arr4.length; i++){
//         count = 0;
//     for(let j = 0; j < arr4.length; j++){
//         if( arr4[i] < arr4[j]){
//             count++;
//             if (count === arr4.length - 1){
//                storeVal = arr4[i];
//                assArr.push(storeVal);
//                +arr4.splice(i,1);
            
//             }
//         }
//     }
// } 

// }
// assArr.push(arr4[0]);
// console.log(assArr);

// Decending order values 
// let arr5 = [ 5, 3, 8,  2, 4, 6, 7];
// let dscArr = [];
// let storeVal2;
// for( let x = 0; x < arrLen; x++){
//     for(let y = 0; y < arr5.length; y++){
//         count = 0;
//     for(let z = 0; z < arr5.length; z++){
//         if( arr5[y] > arr5[z]){
//             count++;
//             if (count === arr5.length - 1){
//                storeVal2 = arr5[y];
//                dscArr.push(storeVal2);
//                arr5.splice(y,1);
            
//             }
//         }
//     }
// } 

// }
// dscArr.push(arr5[0]);
// console.log(dscArr);

// #9 Even number between 1 and 20

// const evenNUm = () =>{
//   let i = 1;
//   while( i < 20){
//     if(i % 2 === 0){
//     console.log(i);
//     }
//      i++;
//   }
 
// }
// evenNUm();
 
// #10 calculate factorial of given number
// let factNum = function(num){
//   let i = num - 1;
//  do{
//     num *= i;
//     i--;
//   }while(i > 0)
//   return  num;
// }
// console.log(factNum(4));


// #11 Iteration through For in loop in object
// let user = {
//     name : 'Raheel Ahmed',
//     DOB : '10/11/1998',
//     email : 'raheelahmed@gmail.com',
//     qualification : 'BS CS'
// }

// for (const values in user){
//     if(user.hasOwnProperty(values)){
//         console.log(`${values} : ${user[values]}`)
//     }
// }

    
// #12 Double the element of each item in array

// let arr5 = [2, 4, 6, 1, 6, 9, 8]
// const doubleEl = () =>{
//     for(let i = 0; i < arr5.length; i++){
//          arr5[i] *= 2;
//     }
//    return arr5;
// }
// console.log(doubleEl());

// #13 Check Given number is even or odd

// function checkNum(num){
//    if(num % 2 === 0){
//     console.log("The given number is even : "+num);
//    }
//    else{
//     console.log("The given number is odd : "+num);
//    }
// }
// checkNum(8);

// #14 Find maximium number using ternary operator

// let num1 = 8; num2 = 13; num3 = 15;
// const findMaxNum = () =>{
//    let result = num1 > num2 && num1 > num3  
//    ? "Num1 is maximium " 
//    :  num2 > num1 && num2 > num3
//    ? "Num2 is maximium"
//    : "Num3 is maximium"

//     return result;
// }
// console.log(findMaxNum());

// find Leap year
let year = 2017
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("Yes, this is leap year");
}
else{
    console.log("This is not Leap year");
}