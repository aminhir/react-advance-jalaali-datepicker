import React from "react";

export default ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        top: "0",
        left: "0"
      }}
      className="JDBackground"
      onClick={() => {
        onClick();
      }}
    />
  );
};
