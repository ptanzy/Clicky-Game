import React from "react";

function Image(props) {
  return (

        <div className={`card-panel ${props.image.color}`}>
          <img className="responsive-img"
            src={props.image.image}
            alt={`flower ${props.image.id}`}
            onClick={() => props.flowerClicked(props.image.id)}
          />
        </div>

  );
}

export default Image;