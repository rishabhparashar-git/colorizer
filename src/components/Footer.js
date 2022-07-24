import React from "react";
import Icons from "./Icons.js"
import "./Footer.css";

export default function Footer(){
    return(
        <footer className="Footer">
            <Icons />
            <div className="thanks">
               <p>Special thanks to <a target="_blank" href="https://www.colorfyit.com/">Colorfy It</a> for <a target="_blank" href="https://www.colorfyit.com/api/">API</a> 🤍</p> 
            </div>
        </footer>
    )
}