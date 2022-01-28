import React from "react";
import InfoSet from "./InfoSet";
import AdoptionBG from "./img/benefits.png"

function Adoption(){
    return(
        <section className="cosmocitizenz" style={{ backgroundImage: `url(${AdoptionBG})`, backgroundSize:`100%`, backgroundPosition:`bottom`, backgroundRepeat:`no-repeat`}}>
            <InfoSet 
            sectionName={"CosmoCitizenz - The Origin Citizens of STARNEST"} 
            title={"Being a CosmoCitizenz Enjoys the Following Benefits_" }
            subtitle={
            <ul style={{color:"#579683", width:"50%", fontSize:"100%"}}>
                <div style={{height:"30px"}} />
                <li>Getting airdropped of free Manuscripts.</li>
                <li>Staking to share 20% of the net profit of the vault.</li>
                <li>Joining an exclusive writers community.</li>
            </ul>
            }
            content={""}
            imgLink={""}
            imgAlt={""}
            picWidth={""}
            />
            <div className="announcementCard">
                <h5>
                    More Information Will Be Released Soon_
                </h5>
            </div>
            <div style={{height:"30px"}} />
            
        </section>
    );
}

export default Adoption;