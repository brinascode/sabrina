import React, {useState,useContext,useEffect} from "react"
import AppContext from "../AppContext"
import {Card,CardContent,CardActionArea,CardActions,CardMedia,Typography,Grid} from "@material-ui/core"

//Images
import adoptmePic from "../images/items/adoptme.png"
import afribellePic from "../images/items/afribelle.png"
import afribellelandingPic from "../images/items/afribellelanding.png"
import brainthemePic from "../images/items/braintheme.png"
import dressupPic from "../images/items/dressup.jpg"
import hangmanPic from "../images/items/hangman.jpg"
import myjournalPic from "../images/items/myjournal.jpg"
import brinascodePic from "../images/items/newtheme.png"
import unineedsPic from "../images/items/unineeds.png"
import currentSitePic from "../images/items/current-website.png"

var style = {
    textAlign:"center",
    padding:"2vw"
}

class Portfolio extends React.Component{
    constructor(props,context){
      super(props,context)
      this.state = {
        portfolioItems:[]
      }
        
    }

    componentWillMount(){
            var portfolioItems = [
                {
            name:"Brina's Code",
            type:"Web design",
            technologies:["React","sass"],
            image:brinascodePic,
            description:"My tech blog where I share web development tips to both new and seasoned developers.", 
            github:"null",
            live:"https://brinascode.github.io"
        },
        {
            name:"UniNeeds - Student Marketplace",
            type:"JS Web App + mobile",
            technologies:["React","MongoDb","Docker","Heroku","Ionic React"],
            image:unineedsPic,
            description:"My MERN app that won my university's Tech Challenge in 2018. I'm still actively developing it and will post the link once I officially release it.",
            github:"/null",
            live:"null",
            position:"left center"
        },
        {
            name:"Afribelle - Cosmetic Marketplace",
            type:"JS Web App",
            technologies:["Angular","MongoDb","Heroku"],
            image:afribellePic,
            description:"My first fullstack application using the MERN stack. A cosmetic marketplace for buyers and vendors in Abidjan, Cote d'Ivoire.",
            github:"/afribelle",
            live:"http://afribelle.herokuapp.com",
              position:"50% 50%"
        },
        {
            name:"Afribelle - Landing Page",
            type:"Static Site",
            technologies:["Angular"],
            image:afribellelandingPic,
            description:"Landing page to my Afribelle web app.",
            github:"/afribelle-promo",
            live:"http://afribelle-promo.herokuapp.com",
              position:"center center"
        },
        {
            name:"My Journal - Web App",
            type:"JS web app",
            technologies:["Vanilla JS","jQuery"],
            image:myjournalPic,
            description:"Journal app that uses jQuery and local Storage to save journal entries..",
            github:"/myjournal",
            live:"https://brinascode.github.io/myjournal",
              position:"left 10%"
        },
        {
            name:"Adopt Me - Web App",
            type:"JS Web App",
            technologies:["React","Material UI","Webpack - no CRA"],
            image:adoptmePic,
            description:"A simple React app with a barebones Webpack and Babel configuration",
            github:"/adopt-me-spa-react",
            live:"https://brinascode.github.io/adopt-me-spa",
            position:"left 10%",
            icon:"fa fa-paw fa-2x",
            iconStyle:{
                color:"mustard",
                fontSize:"10vw"
            }
        },
        {
            name:"Hangman - Browser Game",
            type:"Game",
            technologies:["Vanilla JS","CSS","Original Digital Art"],
            image:hangmanPic,
            description:"My first official game. Uses Vanilla JS. I made this when I was 13 or 14 :)",
            github:"/hangman",
            live:"https://brinascode.github.io/hangman"
        },
        {
            name:"Dressup - Browser Game",
            type:"Game",
            technologies:["Vanilla JS","CSS","Original Digital Art"],
            image:dressupPic,
            description:"One of my first games ever. I made this when I was 13 :) I also drew and colored the models using PaintShop and Gimp.",
            github:"/hangman",
            live:"https://brinascode.github.io/dressup"
        },
        
        {
            name:"Portfolio - CSS design",
            type:"Web design",
            technologies:["Vanilla JS"],
            image:brainthemePic,
            description:"The old look of my portfolio! Notice how I've stayed consistent with my left brain - right brain theme?",
            github:"/null"
        },
        {
            name:"This Website Design - CSS",
            type:"Web design",
            technologies:["React","Material UI","Vanilla JS"],
            image:currentSitePic,
            description:"The website you are on right now!",
            github:"/null",
            live:"https://sabrinakoumoin.tech"
        }
    ]
    this.setState({portfolioItems:portfolioItems})
    }

    render(){
        return(
            <div style={style}>
           
            <h1 className="baloo-title" id="portfolio-top-anchor"> My Portfolio </h1>
            <Grid container spacing={10}>
                {this.state.portfolioItems.map((item,i)=>{
                    return(
                        <Grid item key={i} lg={6} md={6} sm={12} xs={12}>
                            <Card >
                                <CardMedia
                                        style={{height:"15vh",backgroundPosition:item.position,backgroundSize:"100% auto"}}
                                        image={item.image}
                                        title={item.name}
                                    />

                                    {/* <i class={item.icon} style={item.iconStyle} ></i> */}
                                
                                <CardContent>
                                    <Typography><strong><h2 style={{fontFamily:"Arial"}}>{item.name}</h2></strong></Typography>
                                    <Typography>{item.description}</Typography>
                                    <Typography> <strong> Technologies Used : </strong>
                                        {item.technologies.map((item)=>{
                                                return(
                                                <span style={{fontFamily:"Courier"}}> {item} </span>
                                                    )
                                            }
                                        )}
                                    </Typography>
                                    <a href={"https://github.com/brinascode"+item.github} class="fa fa-github" ></a>
                                    <a href={item.live} class="fa fa-external-link" ></a>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            
        </div>
            )
    }
    
    
}
Portfolio.contextType = AppContext
export default Portfolio