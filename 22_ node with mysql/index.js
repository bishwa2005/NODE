// npm i mysql

const mysql = require("mysql2");
const con = mysql.createConnection({
    host : 'localhost',
    user:"root",
    password:"Bi@180905",
    database:"test"  

});


con.connect((err)=>{
    if(err){
        console.log("error",err.message);
    }
    else{
        console.log("connected");
    }
})

con.query("select * from users",(err,result)=>{
    console.log("result:",result);
});