import React, {useContext,useEffect,useState} from "react"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import AppContext from "../AppContext.js"
import {Grid,Card,CardContent,Typography,AppBar,Toolbar} from "@material-ui/core"
import mainBannerPic from "../images/second-me.png"
import BackToTop from "./BackToTop"

export default function Banner(){
    var context = useContext(AppContext)

    const [picStyle,setStyle] = useState({
        backgroundImage:`url(${mainBannerPic})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"127% auto",
        backgroundColor:"#ff5757",
        height:"90vh", //120
        backgroundPosition:"top",
        borderRadius:"0px 800px 800px 0px", // borderRadius:"0px 00px 600px 600px",
        boxShadow:"3px 3px 30px pink",
       
    })

    const [menuStyle,setMenuStyle] = useState({
        border:"none"
    })


    useEffect(()=>{ 
        if(context.mobile){
            setStyle({...picStyle,height:"50vh",width:"100vw",backgroundPosition:"top",borderRadius:"0px 0px 0px 0px"}) 
            setMenuStyle({borderRadius:"0px 0px 0px 0px",margin:"1px",boxShadow:"3px 3px 30px pink"})

        }else{
             setStyle({...picStyle,height:"100vh",backgroundPosition:"bottom center", borderRadius:"0px 800px 800px 0px"}) //"-45px 22px 0px -0px "
             setMenuStyle({border:"none"})
        }
    },[context.mobile])

    return(
        <Grid container >
            
                <a id="banner-top"></a>
                <Grid item lg={6} md={6} sm={12} xs={12} style={picStyle}>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{textAlign:"center"}}>
                        <br></br><br></br>  
                            <h1 style={{fontSize:"8vh",fontWeight:"700",fontFamily:"Berkshire Swash"}}>Sabrina Koumoin</h1>
                                <blockquote style={{fontFamily:"2.5vw"}}> 
                                Fullstack Web Developer | JS Bootcamp Assistant Instructor |  CS Student
                                </blockquote>   
                                <a href="https://linkedin.com/in/sabrina-k-00629a120" className="fa fa-linkedin fa-3x siteColor"></a>
                                            <a href="https://github.com/brinascode" className="fa fa-github "></a>
                                            <a href="https://instagram.com/brinascode" className="fa fa-instagram fa-3x siteColor"></a>
                                            <a href="https://twitter.com/@brinascode" className="fa fa-twitter fa-3x "></a>
                                            <a href="mailto:sabrina.koumoin2@gmail.com" className="fa fa-envelope fa-3x siteColor"></a>        

                
                                        <div style={menuStyle}>
                                        <HashLink smooth to="/aboutme#about-me-top-anchor" > 
                                                <h2 style={{fontSize:"5vh",fontWeight:"200"}}>
                                                    About Me!
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
                                        
                                        <HashLink smooth to="/blog#blog-top-anchor" > 
                                          <h2 style={{fontSize:"5vh",fontWeight:"200"}}>My Tech Blog</h2>
                                        </HashLink> 
                                          
                                        </div> 
                                        <BackToTop destination="/#banner-top"/>
                </Grid>
                {/* <AppBar style={{position:"sticky",top:"0px",backgroundColor:"white",color:"black",boxShadow:"3px 3px 30px pink"}}>
                                            <div style={{display:"flex",flextFlow:"row wrap",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"flex-start",alignItems:"stretch"}}>
                                                        <h1 style={{fontFamily:"Berkshire Swash",fontSize:"2vw",fontWeight:"1000",marginLeft:"1vw"}}>Sabrina Koumoin</h1>
                                                    </div>
                                                    <div style={{flexGrow:"1",display:"flex",flexFlow:"row wrap",justifyContent:"flex-end",fontSize:"3.5vh"}}>
                                                                        <HashLink smooth to="/aboutme#about-me-top-anchor" style={{padding:"1vw"}}> 
                                                                            <span className="balooFont">  About </span>
                                                                        </HashLink>
                                                                        <HashLink smooth to="/experience#experience-top-anchor"style={{padding:"1vw"}} > 
                                                                            <span className="balooFont"> Skills </span>
                                                                        </HashLink>
                                                                        <HashLink smooth to="/portfolio#portfolio-top-anchor" style={{padding:"1vw"}}> 
                                                                                <span className="balooFont">  Portfolio </span>
                                                                        </HashLink>
                                                    </div>
                                            </div>
                </AppBar> */}
        </Grid>
    )
}