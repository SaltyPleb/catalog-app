import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import "./styles/types.css";

const types = observer(() => {
  const { device } = useContext(Context);
  const [checked, setChacked] = useState(
    new Array(device.brands.length).fill(false)
  );

  const [devicechecked, setDeviceChacked] = useState(
    new Array(device.devices.length).fill(false)
  );

    console.log(devicechecked);
  const handlerDeviceChecked = (position) => {
    const updatedDeviceCheckedState = checked.map((item, name) =>
      name === position ? !item : item
    );
    setDeviceChacked(updatedDeviceCheckedState);
  };

  const handlerChecked = (position) => {
    const updatedCheckedState = checked.map((item, id) =>
      id === position ? !item : item
    );
    setChacked(updatedCheckedState);
  };

  const fillDevice = (position) => {
    return device.devices.map(({ id, name }) =>
      position === id ? (
        <div className="brand_holder">
          <input
            className="device_checkbox"
            id={name}
            type="checkbox"
            checked={devicechecked[name]}
            onChange={() => handlerDeviceChecked(name)}
          />
          {name}
        </div>
      ) : null
    );
  };

  return (
    <div className="items">
      {device.brands.map(({ id, name }) => (
        <>
          <label className="label_holder" key={id}>
            <input
              type="checkbox"
              checked={checked[id]}
              onChange={() => handlerChecked(id)}
            />
            <span className="checkmark" />
            {name}
            <img
              className="img_holder"
              src="https://image.flaticon.com/icons/png/512/25/25623.png"
              alt=""
            />
          </label>
          <div className="brands_list">{fillDevice(id)}</div>
        </>
      ))}
    </div>
  );
});

export default types;
