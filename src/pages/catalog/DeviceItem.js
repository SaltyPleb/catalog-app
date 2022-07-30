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
        {!process.env.REACT_APP_API_VERSION_URL + device.img ? (
          <img
            className="header-img"
            src={process.env.REACT_APP_API_VERSION_URL + device.img}
            alt="none"
          />
        ) : (
          <div className="header-img skeleton" />
        )}

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
        <div className="description" data-body>
          {device.desc}
        </div>
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
