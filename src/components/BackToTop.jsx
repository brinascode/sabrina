import React from "react"
import {HashLink} from "react-router-hash-link"

export default function backToTop(props){
    return(
        <HashLink smooth to={props.destination}>
            <div style={{backgroundColor:"white",boxShadow:"3px 3px 5px #ff5757",position:"fixed",bottom:"10px",right:"10px"}} className="fa fa-arrow-up fa-1x">
            </div>
        </HashLink>

    )
}