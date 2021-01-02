import "../App.css"

function Labinp(props){

    function Change(event){
      props.change(event);
    }
 
    
    return <div className="labinp">
    <label for={props.name} className="label">{props.label}</label>
    
    {(props.name==="time"||props.name==="date")?(<input type="text" className="Textfield" name={props.name} value={props.value} onChange={Change} ></input>): (<input type="text" className="Textfield" name={props.name} onChange={Change} ></input>)}
    </div>
}

export default Labinp;