// node js ek asynchronus programming language jo ki function ka wait nai karta pura execute hone mein balki apne aap next execute kar deta hai tab tak

console.log("first");
console.log("second");
console.log("third");

console.log("---------------------------------------------------")

console.log("first");
setTimeout(()=>{ // yaha janbhuj kar late karwa rhe
    console.log("second");
},2000)
console.log("third");