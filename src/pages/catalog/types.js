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

  const [deviceDisplay, setdeviceDispaly] = useState(
    new Array(device.devices.length).fill(false)
  );

  const handlerDeviceChecked = (position) => {
    const updatedDeviceCheckedState = checked.map((item, name) =>
      name === position ? !item : item
    );
    setDeviceChacked(updatedDeviceCheckedState);
  };

  const handlerDeviceDisplay = (position) => {
    const updatedDeviceCheckedState = checked.map((item, name) =>
      name === position ? !item : item
    );
    setdeviceDispaly(updatedDeviceCheckedState);
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
        <div key={name} className={deviceDisplay[id] ? "" : "brand__hidden"}>
          <div className="brand_holder ">
            <input
              className="device_checkbox"
              id={name}
              type="checkbox"
              checked={devicechecked[name]}
              onChange={() => handlerDeviceChecked(name)}
            />
            {name}
          </div>
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
              onClick={() => handlerDeviceDisplay(id)}
            />
            <span className="checkmark" />
            {name}
            <img
              className= {deviceDisplay[id] ? "img_holder img__ratation" : "img_holder"}
              src="https://image.flaticon.com/icons/png/512/25/25623.png"
              alt=""
            />
          </label>
          <div className="brands_list ">{fillDevice(id)}</div>
        </>
      ))}
    </div>
  );
});

export default types;
