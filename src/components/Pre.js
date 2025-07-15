import React from "react";
function Dots(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Dots;
