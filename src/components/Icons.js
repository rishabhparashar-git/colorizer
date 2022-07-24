import React from "react";
import "./Footer.css";
import Linkedin from "./icons/ln.png";
import Gmail from "./icons/mail.png";
import Call from "./icons/call.png";
import Github from "./icons/git.png";

export default function Icons(){
    return(
        <div>
            <div className="images">
                <a href="tel:+919911706610"><img alt="call" src={Call}></img></a>
                <a href="mailto:parasahr040601@gmail.com"><img alt="gmail" src={Gmail}></img></a>
                <a href="https://github.com/rishabhparashar-git"><img alt="github" src={Github}></img></a>
                <a href="https://www.linkedin.com/in/rishabh-parashar-/"><img alt="linkedin" src={Linkedin}></img></a>
            </div>
            <div className="name"></div>
        </div>
    )
}