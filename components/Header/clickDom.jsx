import React, { useState } from "react";

export default function clickDom() {
  const [buttonTitle, setButtonTitle] = useState("on");
  return (
    <button
      className="button"
      onClick={() => {
        setButtonTitle("off");
      }}
    >
      {buttonTitle}
    </button>
  );
}
