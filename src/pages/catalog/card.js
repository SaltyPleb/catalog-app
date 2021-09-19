import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const Card = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      {device.types.map((type) => (
        <div className="card" key={type.id}>
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
      ))}
    </>
  );
});

export default Card;
