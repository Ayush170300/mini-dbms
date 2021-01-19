import Labinp from "../components/labinp"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import Header from "../components/header"
import {useState} from "react";
import "../App.css"
import img from "../images/bike_theme2.jpg";
import Selectinp from "../components/selectinp";
import {useParams} from "react-router-dom" ;
function Tdetails(){
  const {sid}= useParams();
  console.log(sid);

    const [open,setOpen]=useState(false);
     let dist=0,ttype="Round Trip";
     let d,m,y,h,min;
     var curDate=new Date();
     d=curDate.getDate();
      m=curDate.getMonth();
      y=curDate.getFullYear();
      h=curDate.getHours();
      min=curDate.getMinutes();
       var time= curDate.getHours()+":"+curDate.getMinutes();
       var date=curDate.getDate()+"/"+(m+1)+"/"+curDate.getFullYear();
    
       const handleClick =() => {
        const data={distance:dist,triptype:ttype,d:d,m:(m+1),y:y,h:h,min:min,sid:sid};
        setOpen(true);
        const options={
          method:'POST',
          headers:{'content-type':'Application/json'},
          body:JSON.stringify(data),
        };
        fetch("http://localhost:4000/details",options)
        .then(res=>{console.log(res.json())})
        .catch(err=>{console.error(err)})
        
      }
    
      const handleClose = () => {
        setOpen(false);
      }
      function Onchange(event){
        if(event.target.name==="km"){
          dist=event.target.value;
         
        }

        if(event.target.name==="triptype"){
          ttype=event.target.value;
          
        }
      }
       

     return <div style={{backgroundImage: "url("+img+")",width:"100%",height:"100%",position:"absolute",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <Header h="TRAVEL DETAILS" />
     <div className="Pbox"  >
      <form method="post" autoComplete="off">
         <Selectinp label="Trip Type" name="triptype" change={Onchange} />
        <Labinp label="Distance(Km)" name="km" change={Onchange}/>
        <Labinp label="End Time" name="time" value={time} change={Onchange}/>
        <Labinp label= "End Date" name="date" value={date} change={Onchange}/>
        <Button variant="contained" color="secondary" class="Buttonform" onClick={handleClick}>End Trip</Button>
        <Button variant="contained" color="secondary" class="Buttonform">View Records</Button>
        </form>
        <Snackbar style={{zoom:"200%"}} class="Snackbar" open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Trip Ended!
        </Alert>
      </Snackbar>
      
        
      </div>
        </div>
}

export default Tdetails;