import React from "react";
import InfoSet from "./InfoSet";

function About() {
    return(
        <section className="about">
            <InfoSet 
                sectionName={"What is Starnest?"} 
                title={"A Co-create Story Publisher, in the Web3.0 Ecosystem."}
                subtitle={""}
                content={""}
                imgLink={require("./img/about.png")}
                imgAlt={"about starnest"}
                picWidth={"100%"}
            />
            <p className="textBox">
            Tens of thousand of writers are creating stories everyday. However, few of them having time and abilities to finish these masterpieces. Most of them are not been seen by the public, let alone published as physical books, or used to make animations, movies or drawings.<br/>
            Starnest is a co-writing project, helping these authors to co-create a metaverse and mint their own paragraphs' copyrights into NFTs, empower these digital assets to become tradable and can share the profit when the universe grows.<br/>
            The copyright(NFT) owners can enjoy the full right including all the derivative profit from the story during the period owning the NFTs.
            </p>
            <h4 className="textBox">WIth Starnest,<br/>
            "To trade and to share the profit of the copyright can become easier than ever before."
            </h4>
            
        </section>
    );
}

export default About;