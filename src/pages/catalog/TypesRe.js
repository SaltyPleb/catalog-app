import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import "./styles/types.css";
import "./styles/_types.scss";
import {
  fetchBrands,
  fetchDevices,
  fetchOneType,
  fetchTypes,
} from "../../http/deviceAPI";
import arrow from "../../images/static/arrow.png";

const TypesRe = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    // fetchOneType(device.selectedType).then((data) => device.setOneType(data));
  }, []);

  const [TypesChecked, setTypesChecked] = useState([]);
  const [BrandsChecked, setBrandsChecked] = useState([]);

  const typeCheck = (name, id) => {
    var updatedList = [...TypesChecked];
    if (!TypesChecked.includes(name)) {
      updatedList = [...TypesChecked, name];
      fetchOneType(id).then((data) => device.setDeviceCardsView(data.device));
    } else {
      updatedList.splice(TypesChecked.indexOf(name), 1);
    }
    setTypesChecked(updatedList);
  };

  const brandCheck = (event) => {
    var updatedList = [...BrandsChecked];
    if (event.target.checked) {
      updatedList = [...BrandsChecked, event.target.value];
    } else {
      updatedList.splice(BrandsChecked.indexOf(event.target.value), 1);
    }
    setBrandsChecked(updatedList);
  };

  const viewAll = () => {
    setBrandsChecked("");
    setTypesChecked("");
    fetchDevices().then(data => device.setDeviceCardsView(data.rows));
  };

  const isTypeChecked = (item) => {
    return TypesChecked.includes(item);
  };

  const isBrandChecked = (item) =>{
    return BrandsChecked.includes(item) 
  }
    // ? "checked-item" : "not-checked-item";

  const imgRotation = (item) => TypesChecked.includes(item) && "rotate";

  return (
    <div className="items">
      <div className="view-all" onClick={viewAll}>
        View all
      </div>

      {device.types.map(({ id, name }, index) => (
        <div className="items__type" key={index}>
          <div className="type-item" onClick={() =>typeCheck(name, id)}>
            <label>
              <input
                type="checkbox"
                class="default__check"
                value={name}
                // onChange={typeCheck}
                checked={isTypeChecked(name)}
                disabled
              />
              <span class="custom__check"></span>
            </label>

            <div>{name}</div>
            <img className={imgRotation(name)} src={arrow} alt="" />
          </div>
          {TypesChecked.includes(name) ? (
            <div className="items__type__brands">
              {device.brands.map(({ idI, name, dep }, index) =>
                id == dep ? (
                  <div className="brand">
                    {idI}
                    <label>
                      <input
                        type="checkbox"
                        class="default__check"
                        value={name}
                        onClick={brandCheck}
                        checked={isBrandChecked(name)}
                      />
                      <span class="custom__check"></span>
                    </label>
                    <div className="brand__name">{name}</div>
                  </div>
                ) : null
              )}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
});

export default TypesRe;
