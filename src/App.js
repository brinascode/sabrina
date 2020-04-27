import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from "./AppContext.js"
import {Switch,Route,Router} from "react-router"
import Banner from "./components/Banner"
import Footer from "./components/Footer.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Experience from "./pages/Experience.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Blog from "./pages/Blog.jsx"
import {Grid} from "@material-ui/core"
import { render } from '@testing-library/react';

class App extends React.Component {
    constructor(){
        super()
        this.state={
            mobile:window.innerWidth > 500 ? false : true
        }
        this.handleWindowResize = this.handleWindowResize.bind(this)
    }

    handleWindowResize(){
        if(window.innerWidth > 700){
            this.setState({mobile:false})
        }else{
            this.setState({mobile:true})
        }
    }

    componentWillMount(){
        window.addEventListener("resize",this.handleWindowResize) 
    }

    componentWillUnmount(){
        window.removeEventListener("resize",this.handleWindowResize)
    }

    render(){
        return (
                <AppContext.Provider value={this.state}>
                    <Grid container>
                            <Banner/>
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                               
                                <Switch>
                                    <Route exact path="/" component={AboutMe} />
                                    <Route path="/aboutme" component={AboutMe} />
                                    <Route path="/experience" component={Experience} />
                                    <Route path="/portfolio" component={Portfolio} />
                                    <Route path="/blog" component={Blog} />
                                </Switch>
                            </Grid>
                            <Footer/>
                    </Grid>
                </AppContext.Provider>
        );
    }
  
}

export default App;


