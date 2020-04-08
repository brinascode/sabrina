import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContext from "./AppContext.js"
import {Switch,Route,Router} from "react-router"
import Banner from "./components/Banner"
import AboutMe from "./pages/AboutMe.jsx"
import Portfolio from "./pages/Portfolio.jsx"
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
                                    <Route path="/portfolio" component={Portfolio} />
                                </Switch>
                            </Grid>
                    </Grid>
                </AppContext.Provider>
        );
    }
  
}

export default App;
