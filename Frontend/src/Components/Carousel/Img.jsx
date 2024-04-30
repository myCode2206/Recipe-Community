import React from "react";

const Img = ({ text, img }) => {
  return (
    <div style={{ maxWidth: "100%", maxHeight: "300px" }}>
      <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Img;
