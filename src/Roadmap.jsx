import React from "react";
import InfoSet from "./InfoSet";
import RoadmapBg from "./img/roadmap-bg.png";

function Roadmap(){
    return(
        <section className="roadmap" style={{ backgroundImage: `url(${RoadmapBg})`, backgroundSize:`100%`, backgroundRepeat:`no-repeat`}}>
            <InfoSet 
                sectionName={"Roadmap"} 
                title={"We are Building A Door for the Writers to Join the World of the Metaverse_" }
            />
            <div className="roadmapCard">
                <h6>
                    2022 Q1
                </h6>
                <ul className="roadmapUl">
                    <li>Writers are welcome to join our whitelist to claim free character NFTs.</li>
                    <li>Reveal the Root Story of the universe.</li>
                    <li>10K characters NFTs will be released to the market.</li>
                </ul>
                <h6>
                    2022 Q2
                </h6>
                <ul className="roadmapUl">
                    <li>Writers are welcome to join our whitelist to claim free character NFTs.</li>
                    <li>Reveal the Root Story of the universe.</li>
                    <li>10K characters NFTs will be released to the market.</li>
                </ul>
                <h6>
                    2022 Q3
                </h6>
                <ul className="roadmapUl">
                    <li>Adding the selection algorithm to the story web. </li>
                    <li>Publish the first multiple-dimension book in the metaverse.</li>
                    <li>Reveal the second wave of the characters.</li>
                </ul>
                <h6>
                    2022 Q4
                </h6>
                <ul className="roadmapUl">
                    <li>Release derivative products/illustrations based on the story.</li>
                    <li>Reveal the second Root Story.</li>
                </ul>
            </div>

        </section>
    );
}

export default Roadmap;