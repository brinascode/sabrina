import React, {useState,useContext,useEffect} from "react"
import {HashLink} from "react-router-hash-link"
import myPic from "../images/using/computer-look.png"
import myPic2 from "../images/banner.png"
import {Grid,Card,CardContent,Typography,AppBar,Toolbar} from "@material-ui/core"
export default function AboutMe(){
    const [style,setStyle] = useState({
        textAlign:"center",
        padding:"0vw"
        
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
           
            <h1  className="baloo-title"> About me  <a id="about-me-top-anchor"></a></h1>
           
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{textAlign:"left",paddingLeft:"2vw"}}>
                        {/* <h2>How it started</h2> */}
                        <p className="regular-text">

                        <h2>Left Brain, Right Brain</h2>

                        <blockquote style={{fontFamily:"Baloo Tamma 2"}} >
                                "Study the science of art; Study the art of science. Learn how to see. Realize that everything connects to everything else."
                                <br></br>
                                - Leonarda da Vinci
                            </blockquote>
                            
                        I started coding when I was 11 years old and I've been passionate by technology ever since.   
                        As daughter to an engineer father and a fashion designer mother, I grew up equally influenced by the world of science, math and logic as by the realm of creativity and design.
                        I am a perfect blend of both, and consider myself 100% left-brained and 100% right-brained.  
                        I see science in art and art in science. 
                        What I like most about working in the tech field is that technical abilities and artistic capiblities are symbiotic, which allows me to explore the full breadth of my interests and personality without compromise.
                        To read more about my education and skillset, visit my <HashLink to="/experience#experience-top-anchor"><span style={{textDecoration:"underline"}}>Experience and Skills</span></HashLink> page.
                        </p>

                     
                        <p className="regular-text">
                            <h2>My favorite pieces of advice</h2>

                            1. Be your WHOLE you: Don’t shred aspects of your fun/amazing personality to fit the mold of what you believe a techie should be like. <br></br><br></br>
                            2. Focus on learning concepts first: My dad always tells me that if you learn how to read a map, even if the cities change, you can still find your way. Learn concepts so that you can easily pick up new technologies. <br></br><br></br>
                            3. Don’t quit when it gets challenging: Eventually in your tech journey things WILL get hard. That’s the time you need to double down on your skills and focus instead quitting. Because you will improve and things will make sense soon enough <br></br>
                        </p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} >
                        <img src={myPic} alt="picture"  width="80%" style={{margin:"5vw",borderRadius:"8px",boxShadow:"3px 3px 10px lightgray"}}/>
                        <img src={myPic2} alt="picture"  width="80%" style={{margin:"2vw",borderRadius:"8px",boxShadow:"3px 3px 10px lightgray"}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      
                    </Grid>
                
            </Grid>
    
        </div>
    )
 
    
}
