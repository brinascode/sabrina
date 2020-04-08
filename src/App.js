import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router"
import Banner from "./components/Banner"
import AboutMe from "./pages/AboutMe.jsx"

function App() {
  return (
    <div className="App">
     <Switch>
         <Banner />
         <Route exact path="/" component={AboutMe} />
         <Route path="/" component={AboutMe} />
     </Switch>
    </div>
  );
}

export default App;
