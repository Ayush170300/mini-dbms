import Labinp from "../components/labinp"
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import Header from "../components/header"
import {useState} from "react";
import "../App.css"
import img from "../images/t1.jpg";
import {useParams} from "react-router-dom" ;
import {Link} from "react-router-dom"
function Bdetails(){
  
  const {sid}= useParams();
  console.log(sid);

    const [open,setOpen]=useState(false);
     let bno,bname,stock;
      
    
       const handleClick =() => {
        const data={bname:bname,bno:bno,stock:stock};
        setOpen(true);
        const options={
          method:'POST',
          headers:{'content-type':'Application/json'},
          body:JSON.stringify(data),
        };
        fetch("http://localhost:4000/Bdetails",options)
        .then(res=>{console.log(res.json())})
        .catch(err=>{console.error(err)})
          
         setTimeout(()=>{
             window.location.reload(true);
         },400);
      }
    
      const handleClose = () => {
        setOpen(false);
      }
      function Onchange(event){
        if(event.target.name==="bname"){
        bname=(event.target.value)
         
        }

        if(event.target.name==="bno"){
            bno=(event.target.value)
          
        }
        if(event.target.name==="stock"){
            stock=(event.target.value)
            
          }
      }
       

     return <div style={{backgroundImage: "url("+img+")",width:"100%",height:"100%",position:"absolute",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <Header h= "BIKE DETAILS" />
     <div className="Pbox"  >
      <form method="post" autoComplete="off">
      <Labinp label="Bike Name." value={bname} name="bname" change={Onchange}/>
        <Labinp label="Bike No."  name="bno" change={Onchange}/>
        <Labinp label="Stock" name="stock" change={Onchange}/>
        <Button variant="contained" color="secondary" class="Buttonform" onClick={handleClick}>Add Bike</Button>
        <Link  style={{textDecoration: "none", color: "inherit"}} to="/brecords"><Button variant="contained" color="secondary" class="Buttonform">View Bikes</Button></Link>
        </form>
        <Snackbar style={{zoom:"200%"}}  class="Snackbar" open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Bike Added
        </Alert>
      </Snackbar>

      </div>
        </div>
}

export default Bdetails;