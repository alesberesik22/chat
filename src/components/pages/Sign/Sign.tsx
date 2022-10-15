import React, { useState } from "react";
import "./Sign.scss";
import Register from "../../login/Register";
import Login from "../../login/Login";
import "../../login/Register";

const RightSide = (props: any) => {
  return (
    <div
      className={
        props.currentActive === "Register"
          ? "right_side left"
          : "right_side right"
      }
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner_container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

const Sign = () => {
  const [isLoggingActive, setIsLoggingActive] = useState(true);
  let current = isLoggingActive ? "Register" : "Login";
  const currentActive = isLoggingActive ? "Login" : "Register";

  const changeState = () => {
    setIsLoggingActive((prevState) => !prevState);
  };
  return (
    <div className="Signin">
      <div className="container">
        {isLoggingActive ? (
          <Login containerRef={(ref: any) => (current = ref)} />
        ) : (
          <Register containerRef={(ref: any) => (current = ref)} />
        )}
      </div>
      <RightSide
        current={current}
        currentActive={currentActive}
        containerRef={(ref: any) => (current = ref)}
        onClick={changeState}
      />
    </div>
  );
};

export default Sign;
