import React from "react";
import "./Header.css";

export default function Header(){
    return(
        <header className="header">
            <div className="left-block header-item">
                <h1>Colorizer</h1>
            </div>
            <div className="right-block header-item">
                <h1>See colors your favourite brands are using</h1>
            </div>
        </header>
    )
}
