import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";
import Icon from "../../utils/Icon";
import arrow from "../../images/static/arrow.png";
import ComponentCards from "./ComponentCards";
import { useLocation, useParams } from "react-router-dom";
import DiscardSystem from "../../components/modals/DiscardSystem";

const ClientSystem = observer(() => {
  const [components, setComponents] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [system, setSystem] = useState({
    title: "New Test System 2",
    components: {
      GPU: "GPU",
      CPU: "CPU",
      PowerSupply: "PowerSupply",
      MotherBoard: "MotherBoard",
      Case: "Case",
      HDD: "HDD",
      SSD: "SSD",
    },
    init_params: {
      mailHost: "mail1",
      "config:installationAt": "Philadelphia, PA",
      "config:adminEmail": "ksm@pobox.com",
      "config:poweredBy": "Cofax",
      "config:poweredByIcon": "/images/cofax.gif",
      "config:staticPath": "/content/static",
    },
    system_params: {
      creatorName: "Yauheni Bulyha",
      creatorPrefix: "YB",
      mailUser: "mail1",
      systemName: "NewTestSystem",
      creationDate: "2022-08-27",
      systemStarts: "140",
      id: "14",
    },
  });
  const { id } = useParams();
  const { device, constructor } = useContext(Context);
  const [selectedType, setSelectedType] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
    setComponents(constructor.currentComponents);
    console.log(components);
  }, [constructor.currentComponents]);

  const checkMark = (componentName) => {
    return componentName ? (
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

  const getLocation = () => {
    const locationPath = location.pathname;
    return <h3>{locationPath.split("/")[3]}</h3>;
  };

  return (
    <>
      {/* TODO: convert to all posable modal windows */}
      {isOpen && <DiscardSystem setIsOpen={setIsOpen} />}
      <div className="navigation">
        <div className="navigation__url">
          <h3>Client System /</h3>
          {getLocation()}
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
          <div className="c-btn" onClick={() => setIsOpen(true)}>
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
                <>
                  <div
                    // onClick={() => setChecked(!checked)}
                    onClick={() => getSelected(id)}
                    key={index}
                    className={`type ${selectedType == id ? "selected" : null}`}
                  >
                    <div className="status">{checkMark(components[id])}</div>
                    <div className="type-name">{name}</div>
                  </div>
                  {components[id]}
                </>
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

          <div
            className="c-reset"
            onClick={() => constructor.setCurrentComponents("none", "clear")}
          >
            <Icon name="reset" color="#8f9092" size={20} />
            <div className="reset-text">Reset Components</div>
          </div>
        </div>
        <div className="construct__main">
          <ComponentCards selectedType={selectedType} />
        </div>
      </div>
    </>
  );
});

export default ClientSystem;
