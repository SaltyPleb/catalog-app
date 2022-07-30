import React from "react";
import arrow from "../../images/static/arrow.png";
import Icon from "../../utils/Icon";

const HistoryItem = (item) => {   
  return (
    <div className="item" key={item.date}>
      <input type="checkbox" />
      <div className="item__top">
        <div className="date">{item.date}</div>
        <div className="i-box">
          <img className="icon " src={arrow} alt="None"/>
        </div>
      </div>
      <div className="item__gap" />
      <div className={`item__rows length-${item.values.length}`}>
        {item.values.map(({ id, link, device, favorite, updatedAt }) => (
          <div className="row" key={id}>
            <div className="row__time">
              {updatedAt
                .split("T")[1]
                .split(".")[0]
                .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
            </div>
            <div className="row__info">
              <div className="info-wrap">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="info-wrap__name"
                >
                  {device}
                </a>
                <div className="info-wrap__link">www.nvidea.com</div>
              </div>
            </div>
            <div className="icons-wrap">
              {favorite ? (
                <div className="i-box">
                  <Icon name="icon-heart-o" color="pink" size={20} />
                </div>
              ) : null}
              <div className="i-box">
                <Icon name="menu" color="gray" size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryItem;
