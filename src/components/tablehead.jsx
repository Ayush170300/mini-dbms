import "../App.css"
function Tablehead(){
    const sty={fontWeight:"bolder",fontSize:"37px", color:"blue"}
    return <div className="datarow"  >
    
      <span style={sty}>FULL NAME</span>
      <span  style={sty}>MOBILE NO.</span>
      <span  style={sty}>DL NO.</span>
      <span  style={sty}>EMAIL ID</span>
      <span   style={sty}>START TIME</span>
      <span   style={sty}>START DATE</span>
      <span   style={sty}>DISTANCE</span>
      <span   style={sty}>END TIME</span>
      <span   style={sty}>END DATE</span>
      <span  style={sty}>BILL AMOUNT</span>
      <span  style={sty}>STATUS</span>
      <span  style={sty}></span>
      </div>
}

export default Tablehead