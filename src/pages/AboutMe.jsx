import React, {useState,useContext,useEffect} from "react"
export default function AboutMe(){
    const [style,setStyle] = useState({
        
        backgroundColor:"purple",
        
    })

    return(
        <div style={style}>
            ABout me
        </div>
    )
 
    
}
