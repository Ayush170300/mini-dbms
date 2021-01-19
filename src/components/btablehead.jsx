import "../App.css"
function Btablehead(){
    const sty={fontWeight:"bolder",fontSize:"37px", color:"blue"}
    return <div className="datarow" style={{backgroundColor:"pink"}} >
    
      <span style={sty}>BIKE NAME </span>
      <span  style={sty}>BIKE NO.</span>
      <span  style={sty}>STOCK</span>
      <span  style={sty}></span>
      <span  style={sty}></span>
      
      </div>
}

export default Btablehead