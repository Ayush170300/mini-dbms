
import { useEffect, useState } from 'react';
import '../App.css'
import Datarow from '../components/datarow'
import Tablehead from '../components/tablehead'
import Bill from "../components/bill"

function Records (){


  
const [bill,setbill]=useState(0);
const [data1,setdata1]=useState([[]]);
const [data2,setdata2]=useState([[]]);
const  l1=[];
const [billdata,setbilldata]=useState({});
function Setbill(data){
  setbilldata(data);
  console.log(billdata)
  setbill(1);
}
function Change(){
  setbill(0);
}
   useEffect(()=>{
      
    async function GetData1()  {
    const response =await fetch("http://localhost:4000/info");
     const rdata=await response.json();
     setdata1(rdata);
    }
    async function GetData2()  {
        const response =await fetch("http://localhost:4000/edetails");
         const rdata=await response.json();
        setdata2(rdata);
        }
    GetData1()
    GetData2()
},[]);

function Datarows(rows,s,len){
  rows.forEach((element,index) => {
  
    l1[index+len]= <Datarow setbill={Setbill} data={element} s={s} />
    

  });
}
Datarows(data1,0,0);
  
Datarows(data2,1,data1.length);
    
  return <div >
             
             { bill?<Bill change={Change}  data={billdata} />:null}
             <Tablehead />
            <div className="records" style={{overflowY:'scroll', maxHeight:'220vh'}} >
           {l1.map(element=>element)}
          </div>
        

      </div>
    
}

export default Records