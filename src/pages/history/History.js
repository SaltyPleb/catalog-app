import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchHistoryByUserId } from "../../http/historyAPI";
import arrow from "../../images/static/arrow.png";
import Icon from "../../utils/Icon";
import Unauthorized from "../403/unauthorized";

const History = observer(() => {
  const [historyInfo, setHistoryInfo] = useState([]);

  const { user } = useContext(Context);

  useEffect(() => {
    fetchHistoryByUserId(user.userInfo.id).then((data) => setHistoryInfo(data));
  }, []);

  return (
    <div className="history">
      {user.isAuth ? (
        <>
          {/* TODO: Insert this code to new component */}
          <div className="history__header">
            <div className="h-name">History page</div>
            <div className="h-info">
              Here will be displayed al your visited pages.
            </div>
          </div>
          <div className="history__items">
            <div className="item">
              <input type="checkbox" />
              <div className="item__top">
                <div className="date">Today - Tuesday, April 09, 2022</div>
                <div className="i-box">
                  <img className="icon " src={arrow} />
                </div>
              </div>
              <div className="item__gap" />
              <div className="item__rows">
                {historyInfo.map(
                  ({ id, link, device, favorite, updatedAt }) => (
                    <div className="row">
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
                  )
                )}
              </div>
            </div>

            <div className="item">
              <input type="checkbox" />
              <div className="item__top">
                <div className="date">Today - Tuesday, April 09, 2022</div>
                <div className="i-box">
                  <img className="icon " src={arrow} />
                </div>
              </div>
              <div className="item__gap" />
              <div className="item__rows">
                {historyInfo.map(
                  ({ id, link, device, favorite, updatedAt }) => (
                    <div className="row">
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
                  )
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Unauthorized />
      )}
    </div>
  );
});

export default History;
