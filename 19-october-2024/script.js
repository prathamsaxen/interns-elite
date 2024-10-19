// .js - extension used for javascript
// 
// console.log("File is connected Successfully");
// console.log is an syntax which is used to print anything in the browser console

// const name = "Pratham Saxena";
let name = "254";
// Whenever you are writing anything in double quotes or in single qquotes so that will be considered as string or you can say text.
console.log(name);
console.log(typeof name);

// constants are something whose value can never be changed , we can never changet he value
name = 356;
console.log(name);
// let , var // they both are different in terms of their scope.

// Loop - 
// For 
// While 
// Do While

for (var index=0;index<10;index++)
{
    console.log(index);
}
// First Parameter - tells you the initial point of your loop means from this point your loop will start
// Termination Parameter - tells you that this will be the last point of your loop after this it will not run
// Increase | Decreasing Factor of your loop.

// index = 0
// index = 1
// ...
// index = 10 
// Second Paramter - will be failing there - once the parameter fails it will terminate the loop
// Each index is called iteration.

// Conditional Statements
// if(condition)
// {
    // code to be executed
// }
// else{

// }

// == & === 
// Double Equal to = used to check the values
// Tripe Equal to === used to check values and datatypes
// Modulo Operator this gives you the remainder - %

// Alert
// Prompt
// Confirm
// index = index + 1 === index++

let value = parseInt(prompt("Enter the value till you want to print the numbers?"));


for(var index=1;index<=value;index++)
{
    if(index%2===0)
    {
        console.log("Even Number = ",index);
    }
    else
    {
        console.log("Odd Number = ",index);
    }
}

// if(value%2 === 0)
// {
//     alert("Even Number");
// }
// else
// {
//     alert("Odd Number");
// }