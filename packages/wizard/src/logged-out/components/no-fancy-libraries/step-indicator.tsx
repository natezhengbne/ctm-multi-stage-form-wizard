import React from "react";

import CSS from "csstype";

const indicator: CSS.Properties = {
  display: "inline-block",
  width: "100%",
  backgroundColor: "#e6e6e6",
};

type Props = {
  value: number;
};

export default function StepIndicator(props: Props) {
  return (
    <>
      <div id="stepIndicator" className="indicator">
        <progress max="100" value={props.value} style={indicator}></progress>
      </div>
    </>
  );
}
