const express= require("express")
const bodyParser=require("body-parser")
const { config } = require("process");
const app=express();
const port=4000;
const Router=require( "./api");
const cors= require('cors');
const { json } = require("body-parser");
app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(json({limit:'1mb'}))
app.use('/',Router);


  



// con.query("show databases",function(err,result){
//     if(err) throw err;
//     console.log(result)
// });
// con.query("select * from customer",function(err,result){
//     if(err) throw err;

//     console.log(result)
// });



app.listen(port,()=>{
    console.log("app is running in port 4000")
})