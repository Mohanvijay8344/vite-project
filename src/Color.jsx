import { useState } from "react";

// RAM  => REPEAT AUTOFIT MINMAX
export function Color() {
  const [ColorList,setColorList] = useState(["green","red","pink","yellow"])
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
    margin: "5px "
  };
  
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setColor(event.target.value)}
        value={color} />
      <button onClick={()=> setColorList([...ColorList, color])}>Add Color</button>
        {ColorList.map((cl)=> (
          <ColorBox color={cl} />))}
    </div>
  )
}

function ColorBox({color}){
  const styles = {
    height: "20px",
    width: "250px",
    background: color,
    margin: "5px 0px",
  }
  return (
    <div style={styles}></div>
  )
}