import React, {useState,useContext,useEffect} from "react"
import AppContext from "../AppContext"
import brinasCodePic from "../images/items/newtheme.png"
import techTwoPicture from "../images/using/techtwox.png"
import {Grid,Card,CardContent,Typography,AppBar,Toolbar} from "@material-ui/core"


var style = {
    // textAlign:"center",
    padding:"2vw",
    overflowX:"hidden"
}

class Blog extends React.Component{
    constructor(props,context){
      super(props,context)
     
        
    }


    render(){
        return(
            <div style={style}>
                <h1 className="baloo-title" id="blog-top-anchor"> Tech Blog and Media Features </h1>

                <Grid container lg={12} md={12} sm={12} xs={12}>
                            <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:"left"}}>
                                <h1>Brina's Code - <a href="https://brinascode.github.io" style={{textDecoration:"underline",color:"#ff5757"}}><strong>Go to Blog</strong></a></h1>
                                <p className="regular-text">Brina's Code is my web development and tech blog on which I share web development and productivity tips for programmers.</p>
                                <br></br>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <a href="https://brinascode.github.io" style={{textDecoration:"underline",color:"#ff5757"}}> 
                                    <img src={brinasCodePic} alt="brinascode" width="70%" />
                                </a>
                            </Grid>
                            
                            <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:"left"}}>
                                <h1 >TechTwoX Interview - <a href="https://techtwox.com/an-interview-with-sabrina/" style={{textDecoration:"underline",color:"#ff5757"}}>Go to Article</a></h1>
                                <p className="regular-text">
                                  I am honored to have been featured in TechTwoX, a blog that shares the stories of women in technology. 
                                  
                                </p>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <a href="https://techtwox.com/an-interview-with-sabrina/" >
                                    <img src={techTwoPicture} alt="interview-picture" width="70%"/>
                                </a>
                            </Grid>
                </Grid>
            
        </div>
            )
    }
    
    
}
Blog.contextType = AppContext
export default Blog