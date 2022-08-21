import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import arrow from "../../images/static/arrow.png";
import {
  MAIN_CONSTRUCTOR,
  CONSTRUCTOR_DASHBOARD_ROUTE,
  CONSTRUCTOR_LIBRARY_ROUTE,
  CONSTRUCTOR_SETTINGS_ROUTE,
  CONSTRUCTOR_SYSTEMS_ROUTE,
} from "../../utils/consts";
import Icon from "../../utils/Icon";

const LeftNav = observer(() => {
  return (
    <div className="left-nav">
      <div className="left-nav__top-info">
        <div className="name">PC Craft</div>
        <div className="i-box">
          <img className="icon " src={arrow} />
        </div>
      </div>
      <div className="left-nav main-wrapper">
        <div className="main-wrapper__top ">
          <div className="top__items">
            <Link to={CONSTRUCTOR_DASHBOARD_ROUTE} className="item">
              <Icon name="home" color="#605593" size={20} />
              <div className="item__name">Dashboard</div>
            </Link>
            <Link to={CONSTRUCTOR_SYSTEMS_ROUTE} className="item selected">
              <Icon name="system" color="#605593" size={20} />
              <div className="item__name">Client Systems</div>
            </Link>
            <Link to={CONSTRUCTOR_LIBRARY_ROUTE} className="item">
              <Icon name="folder" color="#605593" size={20} />
              <div className="item__name">Library</div>
            </Link>
            <Link to={CONSTRUCTOR_SETTINGS_ROUTE} className="item">
              <Icon name="settings" color="#605593" size={20} />
              <div className="item__name">Settings</div>
            </Link>
          </div>

          <div className="bottom-wrap bottom">
            <div className="bottom__items">
              <Link to={MAIN_CONSTRUCTOR} className="item">
                <Icon name="notification" color="#605593" size={20} />
                <div className="item__name">Notifications</div>
              </Link>
              <div className="item">
                <Icon name="time" color="#605593" size={20} />
                <div className="item__name">Time testing</div>
              </div>
            </div>
            <div className="user">
              <div className="user__avatar">YB</div>
              <div className="user-wrap user">
                <div className="user__email">test@example.com</div>
                <div className="user__name">Yauheni Bulyha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LeftNav;
