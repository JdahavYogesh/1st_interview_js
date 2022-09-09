//1) What is the difference between "==" and "===" operators.
//--"=="
    //its checked only the value of variable its doesnt check the data type of the variable.
let a=10;
let b="10";
console.log(a==b);

//--"==="
    //its checked both the value of variable and the data type of the variable.

    console.log(a===b);

//2)What is the spred operators.
// ----this opertors allow us to quackly copy all or part of an existing array or object into another array or object.

const oneNumber = [1,3,4,7];
const twoNumber = [2,5,8,5];
const combineNumber = [...oneNumber,...twoNumber];
console.log(combineNumber);


const numbers =[1,3,5,5,6,3,3];
      [a, b, c, ...rest]=numbers;
console.log(c);
console.log(a);
console.log(b);
console.log(rest);
console.log(...numbers);


const myVehicle = {
    brand :'ford',
    model :'mustang',
    color : 'red'
}
const updateMyVehicle ={
    type : 'car',
    year : '2022',
    color : 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log( myUpdatedVehicle);

//3) What is the difference between let,var,const

//all are the keywords

//let :--
// In let variable we can declare and initialize the variable in one line or in another line.
//two variable with the same number aren't possible.
//we can update and assign the value which has been initialized already.
//let not supporting the Hoisting
//let is block scoped 

//const :--
//In const we have to declared and initialized variable in one line itself.
//two varible with the same aren't possible.
//we can't update and assign the value of variable which has been alredy initialized.
//const not support Hoisting
//const is block scoped

//var :--
// In var variable we can declare and initialize the variable in one line or in another line.
//two variable with the same number aren possible.
//we can update and assign the value which has been initialized already.
//let supporting the Hoisting
//let is global scoped.


//4) what is excution code:- there are two componant of the execution code one is memmory location (creation phase ) and another onne is the code execution (execution phase) we have explain oraly

//5) What is closure.

  // the combination of a function bundle toghethr with reference to its surrounding state .

  ///closure give the accsess to an outer function scope from to an inner functions.


const myTicketBooking = function () {

    let passengerCount = 0;

    return function (){
        passengerCount++;
        console.log(`passengers count ${passengerCount}` );
    }
} 

const bookie =myTicketBooking();

bookie()
bookie()
bookie()
bookie()







