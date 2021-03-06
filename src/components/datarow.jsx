import {Link} from "react-router-dom";

import '../App.css'
import {useState} from "react"
import Button from "@material-ui/core/Button"
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import UpdateIcon from '@material-ui/icons/Update';
function Datarow(props){
    const data=props.data;
    const s= props.s;
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
     const link="tdetails/"+ data.sid;
     const handleDelete=()=>{
      const options={
        method:'POST',
        headers:{'content-type':'Application/json'},
        body:JSON.stringify({sid:data.sid}),
      };
      fetch("http://localhost:4000/delete",options)
      .then(res=>{console.log(res.json())})
      .catch(err=>{console.error(err)})

      window.location.reload(true)
     }
    
   
    return<div>  
    
    <Dialog
    
       fullWidth={true}
       maxWidth = {'md'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        contentStyle={{width: "100%", maxWidth: "none",fontSize:"40px"}}
        aut
      >
        <DialogContent style={{zoom:"250%"}} >
          <DialogContentText id="alert-dialog-description" style={{color:"black"}}  >
            Are You Sure You want to Delete the Record of {data.fname +" "+data.lname} from here??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style={{fontSize:"30px"}}>
            Disagree
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus style={{fontSize:"30px"}}>
            agree
          </Button>
        </DialogActions>
      </Dialog>
    <div className="datarow"  >
     
      <span>{data.fname +" "+data.lname}</span>
      <span>{data.mobile}</span>
      <span>{data.dl}</span>
      <span>{data.email}</span>
      <span>{data.h1+":"+data.min1}</span>
      <span>{data.d1+"/"+data.m1+"/"+data.y1}</span>
      <span>{s?data.distance:"Trip not Completed"}</span>
      <span>{s?data.h+":"+data.min:"Trip not Completed"}</span>
      <span>{s?data.d+"/"+data.m+"/"+data.y:"Trip not Completed"}</span>
      <span >{s?data.BillAmt+" Rs.":"Trip not Completed"}</span>
      <span>{s?<Button style={{backgroundColor:"green"}} variant="contained" color="secondary" class="Buttonform" onClick={()=>props.setbill(data)}>View Bill</Button>:<Link to={link}><Button variant="contained" color="secondary" class="Buttonform">End Trip</Button></Link>}</span>
      <span> <DeleteIcon color="secondary" style={{marginLeft:"200px",boxSizing:"content-box",height:"60px",width:"50px"}}  onClick={handleClickOpen} /></span>
      <span> <UpdateIcon color="secondary" style={{boxSizing:"content-box",height:"60px",width:"50px",color:"blue"}}  onClick={handleClickOpen} /></span>
      </div></div>
     
    
}

export default Datarow;