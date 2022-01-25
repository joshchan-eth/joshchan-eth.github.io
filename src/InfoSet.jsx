import React from "react";

function InfoSet(props) {
    return(
        <div>
            <h2>
                {props.sectionName} 
            </h2>
            <hr />
            <h3 className="textBox">
                {props.title} 
            </h3>
            <h4>
                {props.subtitle}
            </h4>
            <p className="textBox">
                {props.content}
            </p>
            <img src={props.imgLink} alt={props.imgAlt} width={props.picWidth}/>
        </div>
    );
}

export default InfoSet;

