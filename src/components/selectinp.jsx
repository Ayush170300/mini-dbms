import "../App.css"
function Selectinp(props){
    
    
    return <div className="labinp">
    <label for={props.name} className="label">{props.label}</label>
    <select className="Textfield" name={props.name} onChange={props.change}>
    <option value="Round Trip"> Round Trip</option>
    <option value="One Way"> One Way</option>
    </select>
    </div>
}

export default Selectinp;