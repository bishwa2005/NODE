module.exports = reqFilter=(req,res,next)=>{
    // apn yaha ek aisa middleware design kar rhe hai
    // for eg : localhost:4000/users?age=10

    if(!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        console.log(req.query.age);
        res.send("you can't access this page")
    }
    else next(); 
}