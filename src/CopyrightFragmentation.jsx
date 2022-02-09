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
                title={"Reliable Profit Sharing for Multiple Authors"}
                content={"Smart Contract technology solves the problem of profit sharing for co-owned copyright content. Every penny will be splitted fair and square."}
            />
            <DesCard
                title={"Exponential Growth of the Copyright's Market Liquidity"}
                content={"The barrier of trading copyrights is always extremely high. However, turning the copyrights into NFTs will empower them be directly bought and sold online. Turning copyrights into NFTs bypasses all difficulties and barriers created by the copyright itself. Thus, allowing trading for copyrights to happen directly online."}
            />
        </section>
    );
}

export default CopyrightFragmentation;