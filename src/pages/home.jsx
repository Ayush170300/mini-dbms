
import "../App.css"
import Button from "@material-ui/core/Button"


import {Link} from "react-router-dom"
function  Home() {
   return  <div className="mainpage">
        <span className="mhead">Bike Rental System</span>
        <div className="homebuttons">
        <Button variant="contained" color="secondary" class="homebutton">ADD BIKE</Button>
        <Link style={{textDecoration: "none", color: "inherit"}} to="/tinfo"><Button variant="contained" color="secondary" class="homebutton">RENT A BIKE</Button></Link>
        <Link  style={{textDecoration: "none", color: "inherit"}} to="/records"><Button variant="contained" color="secondary" class="homebutton">VIEW RECORDS</Button></Link>
        </div>
        
   </div> 
   
}


export default Home;