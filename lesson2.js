//functions
function sum(a,b){
    return a+b;
}

console.log(sum(22,44));
 function greet(name){
    return "hello "+name;
 }
 console.log(greet("emmanuel"));
// arrow functions
const sub = (a,b)=>{
    return a-b;
}
console.log(sub(55,11));

//conditional statements
let a = 10;
if (a > 5) {
    console.log("a is greater than 5"); 
} else {
    console.log("a is less than 5");
}
let b = 10;
if (b <= 5) {
    console.log("b is greater than 5");
} else {
    console.log("b is less than 5");
}