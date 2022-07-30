import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";
import Icon from "../../utils/Icon";
import arrow from "../../images/static/arrow.png";
import ComponentCards from "./ComponentCards";

const ClientSystem = observer(() => {
  const { device, user } = useContext(Context);
  const [checked, setChecked] = useState(false);
  const [selectedType, setSelectedType] = useState(1);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);

  const checkMark = () => {
    return checked ? (
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    ) : (
      <Icon name="c-plus" color="#8f9092" size={24} />
    );
  };

  const getSelected = (id) => {
    selectedType == id ? setSelectedType(id) : setSelectedType(id);
  };

  return (
    <div className="client-system">
      <div className="navigation">
        <div className="navigation__url">
          <h3>Client System /</h3>
          <h3>My New System</h3>
        </div>
        <div className="navigation__btns">
          <div className="c-btn">
            <Icon name="save" color="#8f9092" size={20} />
            <div className="c-text">Save System</div>
          </div>
          <div className="c-btn">
            <Icon name="save-a-copy" color="#8f9092" size={20} />
            <div className="c-text">Save a copy</div>
          </div>
          <div className="c-btn">
            <Icon name="discard" color="#8f9092" size={20} />
            <div className="c-text">Discard System</div>
          </div>
        </div>
      </div>
      <div className="construct">
        <div className="construct__left">
          <div className="t-container">
            <div className="types">
              {device.types.map(({ id, name }, index) => (
                <div
                  // onClick={() => setChecked(!checked)}
                  onClick={() => getSelected(id)}
                  key={index}
                  className={`type ${selectedType == id ? "selected" : null}`}
                >
                  <div className="status">{checkMark()}</div>
                  <div className="type-name">{name}</div>
                </div>
              ))}
            </div>

            <div className="notes">
              <div className="n-wrapper">
                <div className="count">12 Notes</div>
                <div className="i-box">
                  <img className="icon " src={arrow} />
                </div>
              </div>
              <div className="n-container"></div>
            </div>
          </div>

          <div className="c-reset">
            <Icon name="reset" color="#8f9092" size={20} />
            <div className="reset-text">Reset Components</div>
          </div>
        </div>
        <div className="construct__main">
          <ComponentCards selectedType={selectedType} />
        </div>
      </div>
    </div>
  );
});

export default ClientSystem;
