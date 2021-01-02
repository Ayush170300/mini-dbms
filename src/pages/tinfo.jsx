import Labinp from "../components/labinp"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import {useState} from "react";
import img from "../images/bike_theme3.jpg";
import Header from "../components/header"
import "../App.css"
function Tinfo(){
    const [open,setOpen]=useState(false);
    let fname,lname,mobile,dl,email,d,m,y,h,min ;
    const handleClick = () => {
      document.getElementsByClassName('labinp').value='';
        setOpen(true);
        const data={fname:fname,lname:lname,mobile:mobile,dl:dl,email:email,d1:d,m1:(m+1),y1:y,h1:h,min1:min};
        const options={
          method:'POST',
          headers:{'content-type':'Application/json'},
          body:JSON.stringify(data),
        };
        fetch("http://localhost:4000/info",options)
        .then(res=>{console.log(res.json())})
        .catch(err=>{console.error(err)})
      }
    
      const handleClose = () => {
        setOpen(false);
      }
      function Onchange(event){
        if(event.target.name==="fname"){
          fname=event.target.value;
        }
        if(event.target.name==="lname"){
          lname=event.target.value;
        }
        if(event.target.name==="mobile"){
          mobile=event.target.value;
        }
        if(event.target.name==="email"){
          email=event.target.value;
        }
        if(event.target.name==="dl"){
          dl=event.target.value;
        }

        
      }
    
      var curDate=new Date();
      d=curDate.getDate();
      m=curDate.getMonth();
      y=curDate.getFullYear();
      h=curDate.getHours();
      min=curDate.getMinutes();
       const time= curDate.getHours()+":"+curDate.getMinutes();
       const date=curDate.getDate()+"/"+ (m+1)+"/"+curDate.getFullYear();
return <div style={{backgroundImage: "url("+img+")",width:"100vb",height:"100vh"}}>
          <Header h="CUSTOMER INFO" />
         <div className="Pbox" >
         <Labinp label="First Name" name="fname" change={Onchange}/>
        <Labinp label="Last Name" name="lname" change={Onchange}/>
        <Labinp label="Mobile No." name="mobile" change={Onchange}/>
        <Labinp label="DL No." name="dl" change={Onchange}/>
        <Labinp label="Email Id" name="email" change={Onchange}/>
        <Labinp label="Start Time" name="time" value={time} change={Onchange} />
        <Labinp label= "Start Date" name="date" value={date} change={Onchange}/>
        <Button variant="contained" color="secondary" class="Buttonform" onClick={handleClick}>Start Trip</Button>
       
       
        <Snackbar class="Snackbar" open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Trip Started!
        </Alert>
      </Snackbar>
      
        
        </div>
        </div>
}

export default Tinfo;