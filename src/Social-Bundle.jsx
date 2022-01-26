import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

function SocialBundle(){
    return(
        <div className="socialSet">
                <a href="https://twitter.com/Cosmocitizenz" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={require("./img/logos_twitter.png") } alt="twitter" /></a>
                <img className="socialIcon" src={require("./img/fa-brands_discord.png")} alt="discord" />
                <img className="socialIcon" src={require("./img/bi_medium.png")} alt="medium" />
                <a href="https://www.instagram.com/cosmocitizenz/" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={require("./img/cib_instagram.png")} alt="instagram" /></a>
        </div>
    );
}

export default SocialBundle;
