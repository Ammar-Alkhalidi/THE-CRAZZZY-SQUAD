import { link } from "framer-motion/client";
import React from "react";
link

function Drums() {
  return (
    <div>
      <h2>Drums</h2>
      <p>The drummer keeps the beat alive with incredible energy and rhythm.</p>
      <img
        src="https://i.pinimg.com/564x/7a/a0/9e/7aa09e70b34161508f09275b13895abe.jpg"
        alt="Drummer"
        style={{ width: "300px", borderRadius: "10px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Drums;
