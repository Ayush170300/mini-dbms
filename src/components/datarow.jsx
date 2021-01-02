import {Link} from "react-router-dom";

import '../App.css'
import {useState} from "react"
import Button from "@material-ui/core/Button"
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Wanted to Delete the Record of {data.fname +" "+data.lname} from here??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    <div className="datarow" >
     
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
      <span> <DeleteIcon color="secondary" style={{boxSizing:"content-box",height:"60px",width:"50px"}}  onClick={handleClickOpen} /></span>
      </div></div>
     
    
}

export default Datarow;