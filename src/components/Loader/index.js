import React from "react";

import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
