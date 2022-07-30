import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import {
  fetchBrands,
  fetchDevices,
  fetchOneType,
  fetchTypes,
} from "../../http/deviceAPI";
import arrow from "../../images/static/arrow.png";

const Filter = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    // fetchOneType(device.selectedType).then((data) => device.setOneType(data));
  }, []);

  const [TypesChecked, setTypesChecked] = useState([]);
  const [BrandsChecked, setBrandsChecked] = useState([]);

  const brandCheck = (event) => {
    var updatedList = [...BrandsChecked];
    if (event.target.checked) {
      updatedList = [...BrandsChecked, event.target.value];
    } else {
      updatedList.splice(BrandsChecked.indexOf(event.target.value), 1);
    }
    setBrandsChecked(updatedList);
  };

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

  const isBrandChecked = (item) => {
    return BrandsChecked.includes(item);
  };

  const isTypeChecked = (item) => {
    return TypesChecked.includes(item);
  };

  const imgRotation = (item) => (TypesChecked.includes(item) ? null : "rotate");

  const getTypesCount = (id) =>
    device.brands.filter((brand) => brand.dep == id).length;

  const viewAll = () => {
    setBrandsChecked("");
    setTypesChecked("");
    fetchDevices().then((data) => device.setDeviceCardsView(data.rows));
  };

  return (
    <>
      <div className="filter-name">Components by category</div>
      <div className="filter-category">
        {device.types.map(({ id, name }) => (
          <div className="items__type" key={id}>
            <div className="type-item">
              <div
                className="item-header c-btn"
                onClick={() => typeCheck(name, id)}
              >
                <img className={imgRotation(name)} src={arrow} alt="None" />
                <div
                  className={`type-name ${
                    isTypeChecked(name) ? "selected" : "disabled"
                  }`}
                >
                  {name} ({getTypesCount(id)})
                </div>
              </div>
              {TypesChecked.includes(name) ? (
                <div className="brands">
                  {device.brands.map(({ idI, name, dep }) =>
                    id == dep ? (
                      <div className="brand c-btn" key={name}>
                        {idI}
                        <label>
                          <input
                            type="checkbox"
                            className="default__check"
                            value={name}
                            onClick={brandCheck}
                            checked={isBrandChecked(name)}
                            readOnly
                          />
                          <span className="custom__check"></span>
                        </label>
                        <div className="brand__name">{name}</div>
                      </div>
                    ) : null
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="filter-view" onClick={() => viewAll()}>
        <div className="c-btn">View all components</div>
      </div>
    </>
  );
});

export default Filter;
