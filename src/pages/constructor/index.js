import React from "react";
import ClientSystem from "./ClientSystem";
import LeftNav from "./LeftNav";

const PC_craft = () => {
  return (
    <div className="system-container">
      <LeftNav />
      <ClientSystem />
    </div>
  );
};

export default PC_craft;
