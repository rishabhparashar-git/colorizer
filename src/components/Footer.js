import React from "react";
import Icons from "./Icons.js"
import "./Footer.css";

export default function Footer(){
    return(
        <footer className="Footer">
            <Icons />
            <div className="thanks">
               <p>Special thanks to <a target="_blank" href="http://colormind.io/">Colormind</a> for <a target="_blank" href="http://colormind.io/api-access/">API</a> 🤍</p> 
            </div>
        </footer>
    )
}