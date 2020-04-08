import React, {useContext,useEffect,useState} from "react"
import AppContext from "../AppContext.js"
import {Grid,Card,CardContent,Typography} from "@material-ui/core"



export default function Banner(){
    var context = useContext(AppContext)
    const [picStyle,setStyle] = useState({
        backgroundImage:"url('images/main.png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% auto",
        height:"100vh",
    })


    useEffect(()=>{
        if(context.mobile){
            setStyle({...picStyle,height:"50vh",backgroundPosition:"top"}) 
        }else{
             setStyle({...picStyle,height:"100vh",backgroundPosition:"center"})
        }
    })

  
    return(
        <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} style={picStyle}>
                
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} style={{textAlign:"center"}}>
               
                <h1 style={{fontFamily:"Berkshire Swash",fontSize:"10vh",fontWeight:"200"}}>Sabrina Koumoin</h1>
                     <blockquote style={{fontFamily:"1vw"}}> 
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </blockquote>
                                <h2 style={{fontSize:"5vh",fontWeight:"200"}}>More About Me</h2>
                                <h2 style={{fontSize:"5vh",fontWeight:"200"}}>Web Developer Portfolio</h2>
                                <h2 style={{fontSize:"5vh",fontWeight:"200"}}><a href="https://brinascode.github.io">Brinascode Tech Blog</a></h2>
                         
            
            </Grid>
         </Grid>
    )
}