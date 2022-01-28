import React from "react";
import SocialBg from "./img/social-media-bg.png";
import SocialBundle from "./Social-Bundle.jsx";

function Social(){
    return(
        <section className="social" style={{ backgroundImage: `url(${SocialBg})`, backgroundSize:`100%`, backgroundRepeat:`no-repeat`}}>
            <h5>
                Stay Tuned by Following Our Twitter!
            </h5>
            <SocialBundle />
        </section>
    );
}

export default Social;