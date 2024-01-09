//  1 # concate first and second name of user using map() in array of object

// let users = [
//     {firstName : "Ali", lastName: "Hamza"},
//     {firstName : "Saleem", lastName: "Ahmed"},
//     {firstName : "Raheel", lastName: "Ahmed"}
//   ];
  
// let fullName = users.map(function(element){
//     return `${element.firstName} ${element.lastName}`;
// })
// console.log(fullName);

// 2 # Get students mark great than 70 using filter method

// function studentMark(stdMarks){
//     return stdMarks.filter((marks) => {
//     if (marks > 70) {return (marks)} ;
   
//    })

// } 
// console.log(studentMark([70, 80, 30, 60, 70, 90 ]));

// 3 # Sort the cricket test ranking of each country array of object  

// let cricketCountryRank = [
//     {country : "Pakistan", test : 5, oneday : 2, t20 : 3},
//     {country : "India", test : 2, oneday : 3, t20 : 2},
//     {country : "Austrailia", test : 1, oneday : 4, t20 : 2},
//     {country : "England", test : 3, oneday : 1, t20 : 1}
// ]
// const testRank = cricketCountryRank.sort((a , b) => a.test - b.test)
// console.log(testRank);


// 4 # Mutltiply each number of array using Reduce()

// let arrNum = [3, 4, 5, 1, 2];

// const multipliedNum = arrNum.reduce(
//     (acc, curr) => acc * curr
//     )
// console.log(multipliedNum);


// 5 # Search and return employee id using find()
// const emp = [
//     {
//         name: "Ram",
//         empID: 101
//     },
//     {
//         name: "Sham",
//         empID: 102
//     },
//     {
//         name: "Mohan",
//         empID: 103
//     }
// ];

// const res = emp.find(el => el.empID === 102);

// console.log("res is: ", res);




// // 6 # Chain of filter() and reduce() method

// let arr = ["Pakistan", "is a", "beautiful", "country", "of", "the", "world"];

// let concatenateString = arr.filter((el) => el.includes('a')
//                               ).reduce((acc, curr) => {
//                               return acc + " " + curr + " country"} );
// console.log(concatenateString);


// 7 # Discount on differenct price based on offer using map() with callback function

// let salesProduct = [
//         {name : 'shirt', price : 8000},
//         {name : 'pent', price : 5000},
//         {name : 'Trouser', price : 3000},
//         {name : 'Frauk', price : 7000},
//         {name : 'Shoes', price : 8000}

// ]
// discountedPrice = salesProduct.map((pr) =>{
//     return pr.price > 5000
//     ? pr.price * 0.3
//     : pr.price * 0.2
// })
// console.log(discountedPrice);


// 8 # Error Handling in Find() method
// const myArray = [2, 4, 5, 8, 15];

// try {
//   const result = myArray.find(element => {
//     // Some condition that may cause an error
//     if (element === 5) {
//       throw new Error("Error: Found element 6");
//     }
//     return element > 2;
//   });

//   console.log("Result:", result);
// } catch (error) {

//   console.error("Error caught:", error.message);
// }


// 9 # Mutable operation using filter()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function isEven(number) {
//    return (number % 2 === 0);
// }
// const evenNumbers = numbers.filter(isEven);
// console.log("Previous Array which is not effect filtered operation ",numbers)
// console.log("New Array after filtered array",evenNumbers);


// 11 # Square of each values of array using map()

// let array = [3, 5, 7, 9, 22, 77];
// let SquareValue;
// SquareValue = array.map((num) =>{
//     return num * num;
// })
// console.log(SquareValue);

// 12 # Filter and map the string of array whose length less than 5
 //      and retrun each capitalize

// let stringArr = ['Pencil', 'Book', 'Country', 'Aeroplane', 'Bus'];
// let newString = stringArr.filter(
//                       (st) => !(st.length < 5)
//                       ).map((st) => st.toUpperCase());
// console.log(newString);




// 13 # Sort the object of price in decending order

// let product =[
//     {name : 'prod1', price : 20000},
//     {name : 'prod2', price : 50000},
//     {name : 'prod3', price : 40000},
//     {name : 'prod4', price : 10000},
//     {name : 'prod5', price : 30000}
// ]

// let dsPrice = product.sort((pr1 , pr2) => pr2.price - pr1.price);
// console.log(dsPrice);

// 14 # sum of all Even number of array using reduce()

// let evenNum = [10, 30, 26, 8, 6, 64,];

// let sumOfEven = evenNum.reduce((acc, curr) => acc +  curr);
// console.log("Sum of all Even number is : ", sumOfEven);


// 15 # find id property and update the status property to 'completed' of object

// let student = [
//     { id : 101, status : 'not completed' },
//     { id : 102, status : 'completed' },
//     { id : 103, status : 'not completed' },
//     { id : 104, status : 'completed' },
//     { id : 105, status : 'completed' },
// ]

// let updatedstudent = student.filter((std) => std.id === 103
//                                     ).map((std) =>{
//                                      std.status = 'completed';
//                                      return std
//                                     });
// console.log(updatedstudent);

// 16 # find average of all positive numbers of array 
//        and return to two decimal place 

// let numberArr = [2, 4, 6, 7, 21, 5, 9];

// averageNum = numberArr.reduce((acc, curr) =>{ 
//    return acc + curr;                         
// })/ numberArr.length;

// console.log(averageNum.toFixed(2));

// 17 # filter and return the array of object whose age attribute great than 18 
// let student = [
//     {name : 'akbar', age : '23'},
//     {name : 'razzak', age : '17'},
//     {name : 'aijaz', age : '19'},
//     {name : 'wahab', age : '18'},
//     {name : 'hussain', age : '16'}
// ]

// let adultsAge = student.filter((std) =>{
//         return std.age >= 18 ;
//     })
// console.log(adultsAge);


// 18 # sorted the array of strings based on string length in ascending order

// let stringArr = ['marker', 'copy', 'pencil', 'shopner', 'erasor', 'black board', 'books'];

// let asStringlength = stringArr.sort((st1, st2) => st1.length - st2.length)
// console.log(asStringlength)


// 19 # flaten the nested array of numbers and return sum of all number of that

// let nestedArray = [1, [2, 3], [4, 5, 6], 7];
// let flatArray = nestedArray.reduce((accumulator, value) => accumulator.concat(value), []);
// let sumOFNum = flatArray.reduce((acc, curr) => acc + curr)

// console.log(sumOFNum); 

// 20 # Return custome default object for error handling
//      if desired element not found usinf find();

let electronicsProduct =[
        {name : 'fridge', price : 80000},
        {name : 'AC', price : 50000},
        {name : 'TV', price : 30000},
        {name : 'Mobile', price : 10000},
        {name : 'Fan', price : 8000},
        
    ]

let elFind = electronicsProduct.find((product) =>{
  return product.price === 30000 
              ? product.price 
              : product.name = 'No scuh product' , product.price = 'No such price' ;
  })
console.log(elFind)