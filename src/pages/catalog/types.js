import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import "./styles/types.css";
import { fetchBrands, fetchTypes } from "../../http/deviceAPI";

const types = observer(() => {

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const { device } = useContext(Context);
  const [checked, setChacked] = useState(
    new Array(device.brands.length).fill(false)
  );

  const [devicechecked, setDeviceChacked] = useState(
    new Array(device.types.length).fill(false)
  );

  const [deviceDisplay, setdeviceDispaly] = useState(
    new Array(device.types.length).fill(false)
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
    device.setSelectedType(position)
    setdeviceDispaly(updatedDeviceCheckedState);
    // console.log(deviceDisplay);
    // console.log(position)
  };

  const handlerChecked = (position) => {
    const updatedCheckedState = checked.map((item, id) =>
      id === position ? !item : item
    );
    setChacked(updatedCheckedState);
  };

  const fillDevice = (position) => {
    return device.brands.map(({ id, name, dep }) =>
      Number(position) === Number(dep) ? (
        <div key={name} className={deviceDisplay[dep] ? "" : "brand__hidden"}> 
        {/* <div key={name} className={deviceDisplay[id] ? "" : "brand__hidden"}> */}
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
      {device.types.map(type => (
        <>
          <label className="label_holder" key={type}>
            <input
              // active={id === device.setSelectedType(name)}
              type="checkbox"
              checked={deviceDisplay[type.id]}
              onChange={() => handlerChecked(type.id)}
              onClick={() => handlerDeviceDisplay(type.id)}
            />
            <span className="checkmark" />
            {type.name}
            <img
              className= {deviceDisplay[type.id] ? "img_holder img__ratation" : "img_holder"}
              src="https://image.flaticon.com/icons/png/512/25/25623.png"
              alt=""
            />
          </label>
          <div className="brands_list ">{fillDevice(type.id)}</div>
        </>
      ))}
    </div>
  );
});

export default types;
