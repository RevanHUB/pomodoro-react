import buttons from "./nav";
import "../css/header.css";
import React from "react";

export const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>
      <div
        className="pomodoreControls"
        style={
          props.theme === "dark"
            ? {
                // black theme
                backgroundColor: "#151932",
                color: "white",
              }
            : {
                // white theme
                backgroundColor: "#e1e1e1",
                color: "black",
              }
        }
      >
        {buttons.map((button) => (
          <button
            id={button.buttonName}
            key={button.buttonName}
            onClick={() => {
              buttons.forEach((element) =>
                document
                  .getElementById(element.buttonName)
                  .classList.remove("active")
              );

              if (button.buttonName === "keep going!") {
                if (props.countdown === true) {
                  props.setSeconds(0);
                  props.setMin(0);
                }
                document.getElementById("keep going!").classList.add("active");
                props.setStart(true);
                props.setCountdown(false);
              }
              if (button.buttonName === "need to stop") {
                document.getElementById("need to stop").classList.add("active");
                props.setStart(false);
                props.setCountdown(false);
                props.setSeconds(0);
                props.setMin(0);
              }
              if (button.buttonName === "wait time") {
                document.getElementById("wait time").classList.add("active");
                props.setCountdown(false);
                props.setStart(false);
              }
              if (button.buttonName === "take a break") {
                document.getElementById("take a break").classList.add("active");
                props.setSeconds(0);
                props.setMin(5);
                props.setStart(false);
                props.setCountdown(true);
              }
              document
                .getElementById(button.buttonName)
                .classList.add("active");
            }}
            style={
              props.theme === "dark" ? { color: "#484C65" } : { color: "black" }
            }
          >
            {button.buttonName}
          </button>
        ))}
      </div>
      <button onClick={() => props.theme === "dark" ? props.setTheme("light") : props.setTheme("dark")} >
        { /* icons style */ props.theme === "dark" ? <p>🌑</p> : <p>🔆</p>}
      </button>
    </header>
  );
};
export default Header;
