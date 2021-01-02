import Tinfo from "./pages/tinfo"
import Tdetails from "./pages/tdetails"
import Home from "./pages/home"
import Records from "./pages/records"
import {Route,Switch} from "react-router-dom"
function App() {
    return(
        <>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/tinfo" component={Tinfo}></Route>
        <Route exact path="/records" component={Records}></Route>
        <Route exact path="/tdetails/:sid" component={Tdetails}></Route>
        </Switch>
       </> 
    )
    
}
export default App