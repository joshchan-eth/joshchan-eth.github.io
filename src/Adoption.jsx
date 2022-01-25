import React from "react";
import InfoSet from "./InfoSet";
import AdoptionBG from "./img/benefits.png"

function Adoption(){
    return(
        <section className="adoption" style={{ backgroundImage: `url(${AdoptionBG})`, width:"100%"}}>
            <InfoSet 
            sectionName={"Adopt a CosmoCitizenz to Join the Community"} 
            title={"Here are CosmoCitizenz’ owner benefits_" }
            subtitle={
            <ul style={{color:"#579683", width:"60%", fontSize:"100%"}}>
                <li>Will airdrop free Manuscripts to the CosmoCitizenz’ owners.</li>
                <li>Stacking to share 20% of the net profit of the vault.</li>
                <li>Can vote for the new root stories.</li>
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
            
        </section>
    );
}

export default Adoption;