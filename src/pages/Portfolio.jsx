import React, {useState,useContext,useEffect} from "react"
export default function Portfolio(){
    const [style,setStyle] = useState({
        
        backgroundColor:"purple",
        
    })

    return(
        <div style={style}>
            Portfolio
        </div>
    )
 
    
}
