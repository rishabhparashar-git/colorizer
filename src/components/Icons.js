import React from "react";
import "./Footer.css";
import Linkedin from "./icons/ln.png";
import Whatsapp from "./icons/wa.png";
import Instagram from "./icons/ig.png";
import Gmail from "./icons/mail.png";
import Call from "./icons/call.png";
import Github from "./icons/git.png";

export default function Icons(){
    return(
        <div>
            <div className="images">
                <a href=""><img alt="Whatsapp" src={Whatsapp}></img></a>
                <a href=""><img alt="instagram" src={Instagram}></img></a>
                <a href=""><img alt="call" src={Call}></img></a>
                <a href=""><img alt="gmail" src={Gmail}></img></a>
                <a href=""><img alt="github" src={Github}></img></a>
                <a href=""><img alt="linkedin" src={Linkedin}></img></a>
            </div>
            <div className="name"></div>
        </div>
    )
}