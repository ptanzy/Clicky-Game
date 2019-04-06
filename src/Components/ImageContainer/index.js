import React from "react";
import "./style.css";

  function ImageContainer(props) {
    return (
      <React.Fragment>

        <div className="container">
          <div id="image-container">
              {props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }


export default ImageContainer;