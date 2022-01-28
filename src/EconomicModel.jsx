import React from "react";
import InfoSet from "./InfoSet";

function EconomicModel() {
    return(
        <section className="ecoModel">
            <InfoSet 
                sectionName={"We Make it Easier to Monetize Your Works"} 
                title={"Earn the License Fee of the Whole Story_" }
                subtitle={""}
                content={"When being one of the story owners, people also own the rights to the story. This means that when a story generates any revenue, including licensing, publishing, etc., people can get a share of it. The DAO(Decentralized autonomous organization) will handle the licensing and publishing collaborations on behalf of all story owners, so the only thing writers need to do is focusing more on writing great stories."}
                imgLink={require("./img/derivative-products.png")}
                imgAlt={"derivative products"}
                picWidth={"70%"}
            />
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={"Earn When Your Stories Continued by Other Writers_" }
                subtitle={""}
                content={"Our unique profit sharing model will allow copyright owners to earn directly from the following writers. And this profit sharing will extended to all the lower classes, which means the profit will grow expotentially. If you are not a writer, you can also purchase others copyrights from the open market to receive the revenue."}
                imgLink={require("./img/write-more-earn-more.png")}
                imgAlt={"write more to earn more"}
                picWidth={"80%"}
            />            
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={"Earn from Trading the Copyrights_" }
                subtitle={""}
                content={"Since the copyrights have become the provable digital assets, owners can trade them easier than ever."}
                imgLink={require("./img/earn-from-trading.png")}
                imgAlt={"earn-from-trading"}
                picWidth={"60%"}
            />            
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={"Earn from the Readers_" }
                subtitle={""}
                content={"The platfrom will charge our readers for the subscription reading fees. These fees will be stored into a vault belongs to the story tree, and will be transfered to all the co-authors of the story."}
                imgLink={require("./img/earn-from-the-readers.png")}
                imgAlt={"earn-from-the-readers"}
                picWidth={"60%"}
            />
        </section>
    );
}

export default EconomicModel;