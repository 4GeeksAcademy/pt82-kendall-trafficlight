import React, { useState } from "react";

const TrafficLight = () => {

  let [color, setColor] = useState("red");

  let lightStyle = lightColor => {
    return {
      width: "75px",
      height: "75px",
      borderRadius: "50%",
      margin: "7px 6px",
      backgroundColor: lightColor,
      boxShadow:
        color == lightColor ? "0 0 18px 9px lightyellow" : "none",
    };
  };

  return (
    <div style = {{ textAlign: "center", marginTop: "50px" }}>
      <div style = {{
            width: "125px",
            backgroundColor: "black",
            padding: "20px",
            borderRadius: "20px",
            margin: "20px auto",
        }}
      >
        <div style = {lightStyle("red")} onClick = {() => {
          setColor("red");
          console.log("Red light!");
        }}>
        </div>
        
        <div style = {lightStyle("yellow")} onClick = {() => {
          setColor("yellow");
          console.log("Yellow light!");
        }}>
        </div>
        
        <div style = {lightStyle("green")} onClick ={() => {
          setColor("green");
          console.log("Green light!")
        }}>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;