

import '../App.css'
import {useState} from "react"
import Button from "@material-ui/core/Button"
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import UpdateIcon from '@material-ui/icons/Update';
function Brow(props){
    const data=props.data;
   
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
     
     const handleDelete=()=>{
      const options={
        method:'POST',
        headers:{'content-type':'Application/json'},
        body:JSON.stringify({bid:data.bid}),
      };
      fetch("http://localhost:4000/bdelete",options)
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
            Are You Sure You want to Delete the Record of from here??
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
     
      <span>{data.bname}</span>
      <span>{data.bno}</span>
      <span>{ data.stock}</span>

      
      <span> <DeleteIcon color="secondary" style={{marginLeft:"800px",boxSizing:"content-box",height:"60px",width:"50px"}}  onClick={handleClickOpen} /></span>
      <span> <UpdateIcon color="secondary" style={{boxSizing:"content-box",height:"60px",width:"50px",color:"blue"}}  onClick={handleClickOpen} /></span>
      </div></div>
     
    
}

export default Brow;