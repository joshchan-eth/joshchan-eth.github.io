import React from "react";
import InfoSet from "./InfoSet";

function EconomicModel() {
    return(
        <section className="ecoModel">
            <InfoSet 
                sectionName={"Easily Monetize Your Work"} 
                title={
                <div>
                    Earn Money from <span>Licensing Your Stories </span>_
                </div> 
                }
                subtitle={""}
                content={"Being one of the story owners, people also own the rights to the story. This means when a story generates any revenue, including licensing, publishing, etc., people can get a share of the profit. The DAO(Decentralized autonomous organization) will handle the licensing and publishing on behalf of all story owners, so the only thing writers need to do is focusing more on writing great stories."}
                imgLink={require("./img/derivative-products.png")}
                imgAlt={"derivative products"}
                picWidth={"70%"}
            />
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={
                <div>
                    Earn When Your Stories <span>Continued by Other Writers</span>_
                </div> 
                }
                subtitle={""}
                content={"Our unique profit sharing model will allow copyright owners to earn directly from the following writers. And this profit sharing will extended to all the lower classes, which means the profit will grow expotentially. If you are not a writer, you can also purchase others copyrights from the open market to receive the revenue."}
                imgLink={require("./img/write-more-earn-more.png")}
                imgAlt={"write more to earn more"}
                picWidth={"80%"}
            />            
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={
                <div>
                    Earn from <span>Trading the Copyrights</span>_
                </div> 
                }
                subtitle={""}
                content={"Copyrights as provable digital assets can be traded significantly easilier than ever."}
                imgLink={require("./img/earn-from-trading.png")}
                imgAlt={"earn-from-trading"}
                picWidth={"60%"}
            />            
            <div style={{height:"20px"}}/>
            <InfoSet 
                sectionName={""} 
                title={
                <div>
                    Earn from <span>the Readers</span>_
                </div>
                    }
                subtitle={""}
                content={"The Starnest platform is subscription base, so there will be a monthly fee. The fees will be stored into a vault that belongs to the story tree, and will be transferred to all the co-authors of the story, also on a monthly basis."}
                imgLink={require("./img/earn-from-the-readers.png")}
                imgAlt={"earn-from-the-readers"}
                picWidth={"60%"}
            />
        </section>
    );
}

export default EconomicModel;