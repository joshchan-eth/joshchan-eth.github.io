import React from "react";
import InfoSet from "./InfoSet";

function Concept() {
  return (
    <section className="concept">
        <InfoSet 
            sectionName={"Break the Barrier of Writing"} 
            title={"A New Way to Write and Read Stories_" }
            subtitle={"Who says a book has to be linear?"}
            content={"The tree-structure is designed for digital-native writing and reading experiences that allows the authors and the readers to enjoy the power of diversity. Authors can upload his/her stories, and Starnest allows others to continue writing based on any stories, in any progress, that was previously uploaded on the platform. The story could be linear, or it could be constructed like a tree with multiple branches that brings the readers to the different ends."}
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