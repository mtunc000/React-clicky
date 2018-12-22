import React from "react";
import "./Nav.css";

const Nav = props => (

<nav   className="nav">{props.children} 
    <ul>
        <li>{props.title}</li>
        <li>{props.score}</li>
        <li>{props.topScore}</li>
        <li>{props.win}</li>
        <li>{props.loss}</li>



    </ul>



</nav>

);
export default Nav;