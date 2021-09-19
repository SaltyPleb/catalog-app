import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const types = observer(() => {
  const { device } = useContext(Context)
  return (
    <div>
      {device.brands.map((brands) => (
        <div className="" key={brands.id}>
          {brands.name}
        </div>
      ))}
    </div>
  );
});

export default types;
