const express=require("express");
const app=express()
const port=4000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

function testApprove(req,res,next) {
    console.log("this is middleware");
    next()
}

app.get('/home',testApprove,(req,res)=>{
    res.status(200).json({
        message:"this is json responce"
    })
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.status(201).json({message:"success",user:req.body})
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
