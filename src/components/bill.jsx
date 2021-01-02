import "../App.css"
function Bill(props){
    const data=props.data;
    return <div className="outerbox" onClick={props.change}>
    <div className="insidebox">
     <div className="amt">
     <span className="dark" style={{fontSize:"65px"}}> &#8377;{data.BillAmt}</span>
     <span className="light" style={{display:"block"}}>{data.h+":"+data.min + " "+data.d+"/"+data.m+"/"+data.y}</span>
     <span className="light" style={{display:"block"}}>Round trip</span>

     </div>
     <span className="dark" style={{fontSize:"40px",display:"block",marginBottom:"30px"}}>Fare Details</span>
     <div style={{display:"flex",justifyContent:"space-between"}}>
     <span className="light">Base Fare</span>
     <span className="dark" > &#8377;10</span>
     </div>
     <div style={{display:"flex",justifyContent:"space-between"}}>
     <span className="light">Time Fare</span>
     <span className="dark" > &#8377;{data.Timef}</span>
     </div>
     <div style={{display:"flex",justifyContent:"space-between"}}>
     <span className="light">Distance Fare(km)</span>
     <span className="dark"> &#8377;{data.Distf}</span>
   </div>

   <hr></hr>
   <span className="dark" style={{fontSize:"40px",display:"block",marginBottom:"30px"}}>Paid By</span>
   
   <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
     <span className="light">Customer Name</span>
     <span className="dark" style={{fontSize:"40px"}}>{data.fname+" "+data.lname}</span>
   </div>
   <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
     <span className="light">Contact</span>
     <span className="dark" style={{fontSize:"40px"}}>{data.mobile}</span>
 </div>
 <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
    <span className="light">email</span>
     <span className="dark" style={{fontSize:"40px2"}}>{data.email}</span>
     </div>
    </div>
   </div>
 
}

export default Bill