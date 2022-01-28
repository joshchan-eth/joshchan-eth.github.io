import React from "react";
import InfoSet from "./InfoSet";

function ParallelStories() {
    return(
        <section className="parallelStories">
            <InfoSet 
            sectionName={"Multi-dimension Story Infrastructure"} 
            title={"Unleash people's adventurous spirits_" }
            content={"Readers can start exploring from any branch of the stories. All branches are parallel worlds and bringing different experiences to the readers."}
            imgLink={require("./img/parallel-stories.png")}
            imgAlt={"Parallel Stories"}
            picWidth={"70%"}
            />
        </section>
    );
}

export default ParallelStories;