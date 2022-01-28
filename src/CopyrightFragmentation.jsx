import React from "react";
import InfoSet from "./InfoSet";
import DesCard from "./DesCard";
import CopyrightFragImg from "./img/ownership-frangmentation.png";


function CopyrightFragmentation() {
    return(
        <section className="copyrightFragmentation" style={{ backgroundImage: `url(${CopyrightFragImg})`, backgroundPosition:`top`, backgroundSize:`100%`, backgroundRepeat:`no-repeat`}}>
            <InfoSet 
                sectionName={"Powered by Smart Contract"} 
                title={"Smart Contract Technology Makes the Copyright Become More Flexible_" }
                subtitle={""}
                content={""}
                imgLink={""}
                imgAlt={""}
                picWidth={""}
            />
            <DesCard
                title={"Profit Sharing for Multi-authors Becomes Reliable "}
                content={"Smart Contract technology solves the problem of the profit sharing of any co-owned copyright. Every penny will be splited fairly than ever."}
            />
            <DesCard
                title={"Exponentially Growth of the Copyright's Market Liquidity"}
                content={"The barrier of trading copyrights is always extremely high. However, turning the copyrights into NFTs will empower them be directly bought and sold online."}
            />
        </section>
    );
}

export default CopyrightFragmentation;