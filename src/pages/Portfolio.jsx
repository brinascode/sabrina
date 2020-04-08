import React, {useState,useContext,useEffect} from "react"
import AppContext from "../AppContext"
import {Card,CardContent,CardMedia,Typography,Grid} from "@material-ui/core"

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
            name:"UniNeeds",
            type:"JS Web App + mobile",
            technologies:["React","MongoDb","Docker","Heroku","Ionic React"],
            image:"/images/items/unineeds.png",
            description:"My MERN app that won my university's Tech Challenge in 2018. I'm still actively developing it and will post the link once I officially release it.",
            github:"/null",
            live:"null"
        },
        {
            name:"Afribelle",
            type:"JS Web App",
            technologies:["Angular","MongoDb","Heroku"],
            image:"/images/items/afribelle.png",
            description:"My first fullstack application using the MERN stack. A cosmetic marketplace for buyers and vendors in Abidjan, Cote d'Ivoire.",
            github:"/afribelle",
            live:"http://afribelle.herokuapp.com"
        },
        {
            name:"Afribelle's Landing Page",
            type:"Static Site",
            technologies:["Angular"],
            image:"/images/items/afribellelanding.png",
            description:"Landing page to my Afribelle web app.",
            github:"/afribelle-promo",
            live:"http://afribelle-promo.herokuapp.com"
        },
        {
            name:"My Journal",
            type:"JS web app",
            technologies:["Vanilla JS","jQuery"],
            image:"/images/items/myjournal.jpg",
            description:"Journal app that uses jQuery and local Storage to save journal entries..",
            github:"/myjournal",
            live:"https://brinascode.github.io/myjournal"
        },
        {
            name:"Adopt Me",
            type:"JS Web App",
            technologies:["React","Material UI","Webpack - no CRA"],
            image:"/images/items/adoptme.png",
            description:"A simple React app with a barebones Webpack and Babel configuration",
            github:"/adopt-me-spa",
            live:"https://brinascode.github.io/adopt-me-spa"
        },
        {
            name:"Hangman",
            type:"Game",
            technologies:["Vanilla JS","CSS","Original Digital Art"],
            image:"/images/items/hangman.jpg",
            description:"My first official game. Uses Vanilla JS. I made this when I was 13 or 14 :)",
            github:"/hangman",
            live:"https://brinascode.github.io/hangman"
        },
        {
            name:"Dressup",
            type:"Game",
            technologies:["Vanilla JS","CSS","Original Digital Art"],
            image:"/images/items/dressup.jpg",
            description:"One of my first games ever. I made this when I was 13 :) I also drew and colored the models using PaintShop and Gimp.",
            github:"/hangman",
            live:"https://brinascode.github.io/dressup"
        },
        {
            name:"This Portfolio",
            type:"Web design",
            technologies:["Vanilla JS","jQuery"],
            image:"/images/items/newtheme.png",
            description:"I added this website to my portfolio because it it still fully my work. Furthermore, it made purely from CSS using Flexbox and Media Queries, no Bootstrap :)",
            github:"brinascode.github.io"
        },
        {
            name:"Old portfolio",
            type:"Web design",
            technologies:["Vanilla JS"],
            image:"/images/items/braintheme.png",
            description:"The old look of my portfolio! Notice how I've stayed consistent with my left brain - right brain theme?",
            github:"/null"
        }
    ]
    this.setState({portfolioItems:portfolioItems})
    }

    render(){
        return(
            <div style={style}>
            <h1 style={{fontSize:"6vh"}}> Web Dev Skills </h1>
            <h1 style={{fontSize:"6vh"}}> My Work </h1>
            <Grid container>
                {this.state.portfolioItems.map((item,i)=>{
                    
                    return(
                        <Grid key={i} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <CardContent>
                                   <CardMedia
                                        image={item.image}
                                    />
                                    <Typography><strong>{item.name}</strong></Typography>
                                    <Typography>{item.description}</Typography>
                                    <Typography> <strong> Technologies Used : </strong>
                                        {item.technologies.map((item)=>{
                                                return(
                                                <span> {item} </span>
                                                    )
                                            }
                                        )}
                                    </Typography>
                                    <a href={item.github} class="fa fa-github" ></a>
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