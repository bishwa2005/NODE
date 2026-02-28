// problem in node js

let a=10;
let b=20;

setTimeout(()=>{
    b+=20;
},2000)

console.log(a+b); // since b is updated bit late but printed early


// how to hande it
// the solution is promise

let e=10;
let f=20;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000)
})
// promise kya karta hai ki wo function ko run karta hai then ek variable mein daal deta hai 
// isime jo "resolve" hai wai function sara kaam karta hai


// console wala function tab tak nai chalega jab tak promise wala function se val return nai hota
// jo hum hum waha resolve mein value dale the wo yaha "data" variable se accept kar rhe hai 
waitingData.then((data)=>{
    f+=data;
    console.log(e+f)
})