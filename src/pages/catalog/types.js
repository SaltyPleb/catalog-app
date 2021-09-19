import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const types = observer(() => {
  const { device } = useContext(Context)
  return (
    <div>
      {device.types.map((type) => (
        <div className="" key={type.id}>
          {type.name}
        </div>
      ))}
    </div>
  );
});

export default types;
