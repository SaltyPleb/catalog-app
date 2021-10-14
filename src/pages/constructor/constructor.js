import React from "react";
import Rightnav from "../catalog/rightnav";
import "./constructor.css";

const Constructor = () => {
  return (
    <>
      <div className="constructor_main">
        <Rightnav />
        <div className="main">
          <div className="component_bloks">
            <div className="plus_block">
              <div className="big_plus" />
            </div>
            <div className="plus_block">
              2
              <div className="big_plus" />
            </div>
            <div className="plus_block">
              3
              <div className="big_plus" />
            </div>
            <div className="plus_block">
              4
              <div className="big_plus" />
            </div>
            <div className="plus_block">
              5
              <div className="big_plus" />
            </div>
            <div className="plus_block">
              6
              <div className="big_plus" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constructor;
