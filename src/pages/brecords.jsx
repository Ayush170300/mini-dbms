
import { useEffect, useState } from 'react';
import '../App.css'
import Brow from '../components/brow'
import Btablehead from '../components/btablehead'


function Brecords (){


  

const [data1,setdata1]=useState([[]]);

const  l1=[];


   useEffect(()=>{
      
    async function GetData1()  {
    const response =await fetch("http://localhost:4000/bdetails");
     const rdata=await response.json();
     setdata1(rdata);
    }
    
    GetData1()
    
},[]);

function Datarows(rows){
  rows.forEach((element,index) => {
  
    l1[index]= <Brow  data={element}  />
    

  });
}
Datarows(data1);
  

    
  return <div >
             
            
             <Btablehead />
            <div className="records" style={{overflowY:'scroll', maxHeight:'220vh'}} >
           {l1.map(element=>element)}
          </div>
        

      </div>
    
}

export default Brecords;