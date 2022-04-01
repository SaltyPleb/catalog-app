import React from "react";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <div
      className="card"
      key={device.id}
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <div className="header">
        <img
          className="header-img skeleton"
          src={"http://localhost:5000/" + device.img}
          alt=""
        />
        <div className="title" data-title>
          {device.name ? (
            device.name
          ) : (
            <>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </>
          )}
        </div>
      </div>
      {device.desc ? (
        <div className="description" data-body>{device.desc}</div>
      ) : (
        <div data-body>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      )}
    </div>
  );
};

export default DeviceItem;
