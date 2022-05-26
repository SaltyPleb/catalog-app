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

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);

  const checkMark = (check) => {
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
    // (
    //   <svg
    //     className="checkmark"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 52 52"
    //   >
    //     <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
    //     <path
    //       className="checkmark__check"
    //       fill="none"
    //       d="M16 16 36 36 M36 16 16 36"
    //     />
    //   </svg>
    // );
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
              <div onClick={() => setChecked(!checked)} className="type">
                <div className="status">{checkMark()}</div>
                <div className="type-name">CPU</div>
              </div>
              <div className="type selected">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">GPU</div>
              </div>
              <div className="type">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">Mother</div>
              </div>
              <div className="type">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">Memory</div>
              </div>
              <div className="type">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">Hard</div>
              </div>
              <div className="type">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">Power</div>
              </div>
              <div className="type">
                <div className="status">{checkMark(true)}</div>
                <div className="type-name">Case</div>
              </div>
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
            <ComponentCards />
        </div>
      </div>
    </div>
  );
});

export default ClientSystem;
