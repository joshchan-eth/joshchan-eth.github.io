import React from "react";
import SocialBg from "./img/social-media-bg.png";
import SocialBundle from "./Social-Bundle.jsx";

function Social(){
    return(
        <section className="social" style={{ backgroundImage: `url(${SocialBg})`, width:"100%"}}>
            <h5>
                Stay Tuned on Our Telegram and Discord Group!
            </h5>
            <SocialBundle />
        </section>
    );
}

export default Social;