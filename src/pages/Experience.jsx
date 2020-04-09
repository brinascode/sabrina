import React, {useState,useContext,useEffect} from "react"
export default function Experience(){
    const [style,setStyle] = useState({
        textAlign:"center",
        padding:"2vw"
        
    })

    // useEffect(()=>{
    //     window.location.hash = window.decodeURIComponent(window.location.hash);
    //     const scrollToAnchor = () => {
    //         const hashParts = window.location.hash.split('#');
    //         if (hashParts.length > 2) {
    //         const hash = hashParts.slice(-1)[0];
    //         document.querySelector(`#${hash}`).scrollIntoView();
    //         }
    //     };
    //     scrollToAnchor();
    //     window.onhashchange = scrollToAnchor;
    // })

    return(
        <div style={style}>
            <a name="top" id="about-me-top-anchor"></a><h1 style={{fontSize:"6vh"}}> Work Experience and Education</h1>
           
                
        </div>
    )
 
    
}
