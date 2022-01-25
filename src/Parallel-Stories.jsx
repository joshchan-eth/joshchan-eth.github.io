import React from "react";
import InfoSet from "./InfoSet";

function ParallelStories() {
    return(
        <section className="parallelStories">
            <InfoSet 
            sectionName={"Same World, Different Stories"} 
            title={"Unleash people's adventurous spirit_" }
            content={"Readers can start exploring from any branch at anytime, anywhere in this meatverse. All branches are parallel worlds and will never go to the end."}
            imgLink={require("./img/parallel-stories.png")}
            imgAlt={"Parallel Stories"}
            picWidth={"100%"}
            />
        </section>
    );
}

export default ParallelStories;