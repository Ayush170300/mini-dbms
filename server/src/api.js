const express= require("express")
var mysql= require("mysql");
const bodyParser=require("body-parser")
const { config } = require("process");
const router=express.Router();

var con=mysql.createConnection(
      {
          host:"localhost",
          user:"root",
          port:"3306",
          password:"ayush",
          database:"minidb"
      }  
      
    )
    con.connect(function(err) {
        if (err) throw err;
        console.log("mysql Connected!");
      });

      module.exports= router;

      router.get('/info',(req,res)=>{
            const query=`select s.* from sinfo s where s.sid not in (select sid from edetails)`;
            con.query(query,function(err,result){
                  if(err) throw err;
                  res.json(result);
            })
      })

      router.get('/edetails',(req,res)=>{
            const query=`select i.*, d.BillAmt,d.distance ,d.d,d.m,d.y,d.h,d.min,d.triptype,d.Timef,d.Distf from edetails d ,sinfo i where d.sid = i.sid`;
            con.query(query,function(err,result){
                  if(err) throw err;
                  res.json(result);
            })
      })

router.post('/info',(req,res)=>{
      const data=req.body;
      const {
    fname,
    lname,
    mobile,
    dl,
    email,
    d1,
    m1,
    y1,
    h1,
    min1
      }=data;
      console.log(data);
      console.log(fname,lname,mobile,dl,email,d1,m1,y1,h1,min1);
      const query=`insert into sinfo(fname,lname,mobile,dl,email,d1,m1,y1,h1,min1) values('${fname}','${lname}',${parseInt(mobile)},${parseInt(dl)},'${email}',${d1},${m1},${y1},${h1},${min1})`;
      con.query(query,function(err,result){
            if (err) throw err;
            console.log(result);
      })
})

router.post('/details',(req,res)=>{
      const data=req.body;
      const {
    distance,
    triptype,
    d,
    m,
    y,
    h,
    min,
    sid
      }=data;
      console.log(distance,triptype);
      console.log(data);
      
      let d1,m1,y1,h1,min1;
      const q1=`select d1,m1,y1,h1,min1 from sinfo where sid=${sid} `;
      con.query(q1,function(err,obj){
            if (err) throw err;
            d1=obj[0].d1;m1=obj[0].m1;y1=obj[0].y1;h1=obj[0].h1;min1=obj[0].min1;
     
     
      const timef=((y-y1)*525600 + (m-m1)*43800 + (d-d1)*1440 + (h-h1)*60 + (min-min1))*0.10;
      const distf= distance*3;
      const bill=timef + distf +10;

      
      const query=`insert into edetails(distance,triptype,d,m,y,h,min,BillAmt,Timef,Distf,sid) values(${parseInt(distance)},'${triptype}',${d},${m},${y},${h},${min},${bill},${timef},${distf},${sid})`;
      con.query(query,function(errr,result){
            if (errr) throw err;
            console.log(result);
      })
})
}) ;