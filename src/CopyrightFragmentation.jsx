import React from "react";
import InfoSet from "./InfoSet";
import DesCard from "./DesCard";
import CopyrightFragImg from "./img/ownership-frangmentation.png";


function CopyrightFragmentation() {
    return(
        <section className="copyrightFragmentation" style={{ backgroundImage: `url(${CopyrightFragImg})`, backgroundPosition:`bottom`, backgroundSize:`100%`, backgroundRepeat:`no-repeat`}}>
            <InfoSet 
                sectionName={"Copyright Powered by Smart Contract"} 
                title={"Smart Contract Technology Arouses the Possibility of the Copyright Fragmentation_" }
                subtitle={""}
                content={""}
                imgLink={""}
                imgAlt={""}
                picWidth={""}
            />
            <DesCard
                title={"The Most Reliable Profit Sharing of Ownership Split"}
                content={"Smart Contract technology solves the problem of the profit sharing of any co-owned copyright. It makes multi-ownership of copyright become more reliable than ever."}
            />
            <DesCard
                title={"Exponentially Growth of the Market Liquidity"}
                content={"The barrier of trading copyrights is always extremely high. Minted Copyrights (NFTs) will empower the owners directly buy and sell their copyrights through any NFT open market."}
            />
        </section>
    );
}

export default CopyrightFragmentation;