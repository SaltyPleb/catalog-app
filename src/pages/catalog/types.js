import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import "./styles/types.css";

const types = observer(() => {
  const { device } = useContext(Context)
  const [checked, setChacked] = useState(new Array(device.brands.length).fill(false));
  console.log(device.brands.length)
  const handlerChecked = (position) =>{
    const updatedCheckedState = checked.map((item, id) => id === position ? !item : item)
    setChacked(updatedCheckedState)
  }

  return (
    <div>
      {device.brands.map(({id, name}) => (
        <label className="label_holder" key={id}>
            <input type="checkbox" checked={checked[id]} onChange={() => handlerChecked(id)}/>
            <span className="checkmark"/>
            {name}
            <img className="img_holder" src="https://image.flaticon.com/icons/png/512/25/25623.png" alt="" />
        </label>
      ))}
    </div>
  );
});

export default types;
