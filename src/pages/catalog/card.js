import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";

const Card = observer(({device}) => {
  
  const history = useHistory();
  return (
    <>
      {/* {device.devices.map((type) => ( */}
        <div className="card" key={device.id} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
          <div className="header">
            <img className="header-img skeleton" alt=""/>
            <div className="title" data-title>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
          </div>
          <div data-body>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      {/* ))} */}
    </>
  );
});

export default Card;
