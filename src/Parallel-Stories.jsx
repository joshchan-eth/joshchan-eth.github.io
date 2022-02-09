import React from "react";
import InfoSet from "./InfoSet";

function ParallelStories() {
    return(
        <section className="parallelStories">
            <InfoSet 
            sectionName={"Multi-dimension Story Infrastructure"} 
            title={"Unleash people's adventurous spirits_" }
            content={"Readers can explore from any branch of the stories. All the branches represent a parallel universe, bringing different experiences to the readers."}
            imgLink={require("./img/parallel-stories.png")}
            imgAlt={"Parallel Stories"}
            picWidth={"70%"}
            />
        </section>
    );
}

export default ParallelStories;