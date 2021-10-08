import React from "react";
import Rightnav from "../catalog/rightnav";

const Constructor = () => {
  return (
    <>
    <Rightnav/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>Constructor</h1>
      </div>
    </>
  );
};

export default Constructor;
