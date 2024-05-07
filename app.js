const express=require("express");
const app=express();
// middleware
// app.use((req,res,next)=>{
//     console.log("Hi, i am 1st middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi, i am 2st middleware");
//     next();
// });

// logger to log information about req object 
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

// root route 
app.get("/",(req,res)=>{
    res.send("i am root");
})
// random route 
app.get("/random",(req,res)=>{
    res.send("this is random page");
})

// middleware for task api 
// in this way we pass multiple mw 
const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){

        next();
    }
    res.send("ACCESS DENIED!");
})
// task 
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})



app.listen(8080,()=>{
    console.log("app is listening on port 8080");
})