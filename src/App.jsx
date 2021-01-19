import Tinfo from "./pages/tinfo"
import Tdetails from "./pages/tdetails"
import Home from "./pages/home"
import Records from "./pages/records"
import Bdetails from "./pages/bike"
import {Route,Switch} from "react-router-dom"
import Brecords from "./pages/brecords"
function App() {
    return(
        <>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/tinfo" component={Tinfo}></Route>
        <Route exact path="/records" component={Records}></Route>
        <Route exact path="/tdetails/:sid" component={Tdetails}></Route>
        <Route exact path="/bdetails" component={Bdetails}></Route>
        <Route exact path="/brecords" component={Brecords}></Route>
        </Switch>
       </> 
    )
    
}
export default App