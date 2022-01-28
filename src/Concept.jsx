import React from "react";
import InfoSet from "./InfoSet";

function Concept() {
  return (
    <section className="concept">
        <InfoSet 
            sectionName={"Lower the Barrier of Writing"} 
            title={"A New Way to Write and Read Stories_" }
            subtitle={"Who said a book has to be linear?"}
            content={"The tree-structure is designed for digital-native writing and reading experiences that allows the authors and the readers to enjoy the power of diversity. Every writer can upload their story in progress to starnest, allowing other authors to continue the rest. The story could be linear as usual, or it could be constructed like a tree having multiple branches and bring the readers to the different ends."}
            imgLink={require("./img/tree-structured-story.png")}
            imgAlt={"tree-structure-story"}
            picWidth={"70%"}
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