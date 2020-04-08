import React, {useContext,useEffect,useState} from "react"
import AppContext from "../AppContext.js"
import {Grid,Card,CardContent,Typography} from "@material-ui/core"


export default function Banner(){
    var context = useContext(AppContext)
    const [style,setStyle] = useState({
        height:"47.5vw", //100vh
        width:"101vw",
        backgroundImage:"url('images/banner.png')",
        backgroundRepeat:"no-repeat",
        // backgroundPosition:"center",
        backgroundSize:"100% 100%",

    })


    useEffect(()=>{
        // if(context.mobile){
        //     setStyle({...style}) //heigth 50vh,40vw
        // // }else{
        // //      setStyle({...style,backgroundSize:"100% 90%"})
        // }
    })

  
    return(
        <Grid item lg={12} md={12} sm={12} xs={12} style={style}>
            <h1 style={{fontFamily:"Berkshire Swash",marginLeft:"2vw",marginTop:"-0.0vw",fontSize:"4vw",fontWeight:"200"}}>Sabrina Koumoin</h1>
            <div style={{marginTop:"7vw",marginRight:"4vw",display:"flex",flexFlow:"row wrap",justifyContent:"flex-end",}}>
                <Card style={{paffing:"1vw",width:"30vw",textAlign:"center"}}>
                    <CardContent>
                        <Typography>
                            <h2>About Me</h2>
                              <h2>Web Developer Portfolio</h2>
                                <h2>Tech Blog</h2>
                                  <h2>Contact</h2>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
         </Grid>
    )
}