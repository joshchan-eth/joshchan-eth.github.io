import React from "react";
import InfoSet from "./InfoSet";

function EconomicModel() {
    return(
        <section className="ecoModel">
            <InfoSet 
                sectionName={"Monetize Your Masterpieces"} 
                title={"Earn from the License Fee of the Story_" }
                subtitle={""}
                content={""}
                imgLink={require("./img/derivative-products.png")}
                imgAlt={"derivative products"}
                picWidth={"60%"}
            />
            <div style={{height:"40px"}}/>
            <InfoSet 
                sectionName={""} 
                title={"Earn Directly from the Follow Writers_" }
                subtitle={""}
                content={"Our unique profit sharing model will allow copyright owners to earn from the following writers of the stories. And this profit sharing will extended to lower two classes, which means the profit will grow expotentially. If you are not a writer, you can also purchase others copyrights from the open market to receive the revenue."}
                imgLink={require("./img/write-more-earn-more.png")}
                imgAlt={"write more to earn more"}
                picWidth={"40%"}
            />
        </section>
    );
}

export default EconomicModel;