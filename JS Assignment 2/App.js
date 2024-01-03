// ///Program #1 Condition using ternary operator
// const resultFun = (marks) =>{
//     let result = marks >= 80
//     ? "Student passed"
//     : "Student failed"
//     return result
// }
// console.log(resultFun(70));

// // Program #2 Optional chaining
// const student = {
// 	Address: {
// 		PostCode : '123'
// 	}
	
// }
// console.log(student?.Address?.PostCode );
 
// const studentwork = {
// 	homework(){
//         console.log("Homework is done")
//     }
// }
// return studentwork.homework?.();


// Progrm #3 For in and For of loop

// const shark = {
// 	species: "great white",
// 	color: "white",
// 	numberOfTeeth: Infinity
// }
// for (attribute in shark) {
// 	console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
// }

// For of loop
// let sharks = [ "great white", "tiger", "hammerhead" ];

// // Print out each type of shark
// for (let shark of sharks) {
// 	console.log(shark);
// }
// for (let [index, shark] of sharks.entries()) {
// 	console.log(index, shark);
// }
// Program # 4 Calculate Average of numbers of array 

// function calculateAverage(arrNum){
//     let avgNum = 0;
//      arrNum.forEach((num) => {
//        avgNum += num / arrNum.length;
//      });
//      return avgNum;
// }
// console.log(calculateAverage([10, 6]));



// program # 5  closure Example
// function numberGenrator(){
// 	var num = 1;
// 	function numberChecker(){
		
// 			for( let i = 0; i < 4; i++){
// 				console.log(num);
// 				num++;
// 			}
				
// 	}
	
// 	return numberChecker;
//  }

// let number = numberGenrator();
// number();



// Program # 6 Calculate the average of student object property grades

// const student = {
//    id01 : { name : 'Raheel Ahmed', age : 25 , grade : 1},
//    id02 : { name : 'Uzair'       , age : 23,  grade : 4},
//    id03 : { name : 'Rehman'      , age : 27,  grade : 2},
//    id04 : { name : 'Shafique'     , age : 24,  grade :3},
//    id05 : { name : 'Tayyab'      , age : 22,  grade : 5}   
// }
// let avgGrade = 0;
// for(const property in student){
//     avgGrade += student[property].grade/ Object.keys(student).length;
// }
// console.log(avgGrade);



// Program #7 Shallow copy and deep copy


// shalow copy
// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
 
// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
 
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// Deep Copy
// let employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000
// }
// console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// Program # 8 log the message of array values which one of them even 
//and which of odd using ternary operator

// let arrNum = [3, 7, 8, 35, 101, 90, 112];
// let newArr =  arrNum.forEach(num => {
// 	num % 2 === 0
// 	? console.log(num ," : is even number")
// 	: console.log(num ," : is odd number")
// });
// console.log(newArr);

// program # 9 For, while and Do while Loop

// For Loop
// for(count=1; count < 10; count++) { 
// 	console.log(count); 
//  } 

// While Loop
// let count = 0;
// while(count < 10) { 
// 	console.log(count); 
// 	 count++;
//  } 

// Do While
// let i = 1; 
// do { 
//   console.log(i); 
//   i++; 
// } while (i <= 5); 

// program #10 Optional chianing in loop to access a missing property of object

// let students = {
// 	id: 10,
// 	name : "Ajmal",
// 	course : ['Math', 'Englis', 'Science']
// }
// for(let student in students){
//    console.log(`${student} : ${students[student]}`)
   
// } console.log('email is '+students?.email) // Given an undefined instead of getting error



// program #11 log each property and values iiterating through loop
// let university = {
// 	name : 'Abc',
// 	type : 'IT',
// 	Faculty : 14,
// 	old_10yrs : false, 

// }
// console.log("University Property with values")
// for (attribute in university){
// 	console.log(`${attribute} : ${university[attribute]}`)
// }
//Program # 12 Break and continue in loop

// Break at iteration of 5
// let limit = 5;
// for(let i = 1; i <= 10; i++){
    
// 	if(limit === i){
// 	console.log("Limitation reached so loop is break at : ",limit);
// 	break;
// 	}

// 	console.log("number", i);
// }

// Continue at Even number

// for(let j = 1; j <= 10; j++){
    
// 	if(j % 2 !== 0){
// 	console.log("loop break and continue next iteration > ");
// 	continue;
// 	}

// 	console.log("number", j);
// }

// Program # 13 Calculate and return the tax amount on given income

// let amount = [100, 1500, 400, 800, 1200, 2000];

// const calculateTax = (tax1, tax2) =>

//      amount.filter((amount) => {
//                 amount > 1000
// 			?   console.log( amount * tax1)
// 			:   console.log( amount * tax2);
			  
			
// 	})
// calculateTax(0.5, 0.3);

// Program # 14 Car Object with function and properties

// let car = {
// 	make : 'BMW',
// 	model : 2022,
// 	startEngine(){
// 		console.log(`Car name is ${this.make}\n model of  ${this.model}`);
// 	}
// }
// console.log(car);
// car.startEngine();



//program # 15 Arrow and Regular Function 

// Arrow Function don't work on this keyword
//  const numbers = [1, 2, 3, 4, 5]; 
// const squared = numbers.map(num => num > 2 ? num * num : num); 
//  console.log(squared)

// const person = { 
//     name: "Alice", 
//     greet: () => { 
//         console.log(`Hello from ${this.name}`); // 'this' will not be what you expect 
//     }, 
// }; 
// person.greet();

//Constructor can use in Regular Function 

function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make);