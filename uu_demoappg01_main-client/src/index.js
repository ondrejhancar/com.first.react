import React from "react";
import ReactDOM from "react-dom";

import View1 from "./first/view1.js";

import "./index.less";

export function render(targetElementId) {
  ReactDOM.render(
    <View1 />,
    document.getElementById(targetElementId)
  );
}
