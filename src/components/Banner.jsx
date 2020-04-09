import React, {useContext,useEffect,useState} from "react"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import AppContext from "../AppContext.js"
import {Grid,Card,CardContent,Typography} from "@material-ui/core"


export default function Banner(){
    var context = useContext(AppContext)
    const [picStyle,setStyle] = useState({
        backgroundImage:"url('images/edited.png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% auto",
        height:"100vh", //120
        backgroundPosition:"top"
    })

    const [menuStyle,setMenuStyle] = useState({
        border:"none"
    })

    useEffect(()=>{ 
        if(context.mobile){
            setStyle({...picStyle,height:"50vh",backgroundPosition:"top"}) 
            setMenuStyle({border:"solid black",borderRadius:"5px",margin:"1px"})

        }else{
             setStyle({...picStyle,height:"110vh",backgroundPosition:"top"})
             setMenuStyle({border:"none"})
        }
    },[context.mobile])

    return(
        <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} style={picStyle}>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} style={{textAlign:"center"}}>
                <h1 style={{fontFamily:"Berkshire Swash",fontSize:"10vh",fontWeight:"200"}}>Sabrina Koumoin</h1>
                    <blockquote style={{fontFamily:"1vw"}}> 
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </blockquote>

                            <div style={menuStyle}>
                               <HashLink smooth to="/aboutme#about-me-top-anchor" > 
                                    <h2 style={{fontSize:"5vh",fontWeight:"200"}}>
                                        About Me
                                    </h2>
                               </HashLink>

                                <HashLink smooth to="/experience#experience-top-anchor" > 
                                    <h2 style={{fontSize:"5vh",fontWeight:"200"}}>
                                         Experience and Skills
                                    </h2>
                               </HashLink>
                               
                               
                               <HashLink smooth to="/portfolio#portfolio-top-anchor" > 
                                    <h2 style={{fontSize:"5vh",fontWeight:"200"}}> Web Developer Portfolio</h2>
                               </HashLink>
                            
                                <h2 style={{fontSize:"5vh",fontWeight:"200"}}><a href="https://brinascode.github.io">My Tech Blog - Brina's Code</a></h2>
                               <a href="https://linkedin.com/in/sabrina-k-00629a120" className="fa fa-linkedin fa-3x"></a>
                                <a href="https://github.com/brinascode" className="fa fa-github"></a>
                                <a href="https://instagram.com/brinascode" className="fa fa-instagram fa-3x"></a>
                                <a href="https://twitter.com/@brinascode" className="fa fa-twitter fa-3x"></a>
                                 <a href="https://medium.com/@sabrinakoumoin" className="fa fa-medium fa-3x"></a>   

                            </div>          
            </Grid>
        </Grid>
    )
}