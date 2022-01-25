import React from "react";
import InfoSet from "./InfoSet";

function Concept() {
  return (
    <section className="concept">
        <InfoSet 
            sectionName={"Multi-dimension Story Infrastructure"} 
            title={"A New Way to Write and Read Stories_" }
            subtitle={"Who said a book has to be linear?"}
            content={"The tree-structure is designed for digital-native writing and reading experiences that allows the authors and the readers to enjoy the power of diversity. The Root Story will define the Worldview of the universe, and the authors can pick the points they are interested in to continue the story. The story could be linear as usual, or it could be constructed like a tree having multiple branches and bring the readers to the different ends."}
            imgLink={require("./img/tree-structured-story.png")}
            imgAlt={"tree-structure-story"}
            picWidth={"60%"}
        />
        <div class="textBox">
            <h4>
                
            </h4>
            <p>
                
            </p>
        </div>
    </section>
  );
}

export default Concept;