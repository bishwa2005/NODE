// config file banana thoda imp ho jata hai kyuki apn mysql ke saare connection info ek hi jagah store karke bar bar use kar sakte hai 

const mysql=require("mysql2");
const con=mysql.createConnection({
    host:"localhost",
    password:"Bi@180905",
    database:"test",
    user:"root"
});

con.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("connected");
    }
});

module.exports = con;
