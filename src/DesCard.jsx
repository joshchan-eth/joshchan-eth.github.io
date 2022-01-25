import React from "react";

function DesCard(props) {
    return(
        <div className="subCard">
            <h4>
                {props.title}
            </h4>
            <p>
                {props.content}
            </p>
      </div>
    );
}

export default DesCard;