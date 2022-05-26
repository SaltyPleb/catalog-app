import React from "react";
import arrow from "../../images/static/arrow.png";
import Icon from "../../utils/Icon";

const LeftNav = () => {
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
            <div className="item">
              <Icon name="home" color="#605593" size={20} />
              <div className="item__name">Dashboard</div>
            </div>
            <div className="item selected">
              <Icon name="system" color="#605593" size={20} />
              <div className="item__name">Client Systems</div>
            </div>
            <div className="item">
              <Icon name="folder" color="#605593" size={20} />
              <div className="item__name">Library</div>
            </div>
            <div className="item">
              <Icon name="settings" color="#605593" size={20} />
              <div className="item__name">Settings</div>
            </div>
          </div>

          <div className="bottom-wrap bottom">
            <div className="bottom__items">
              <div className="item">
                <Icon name="notification" color="#605593" size={20} />
                <div className="item__name">Notifications</div>
              </div>
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
};

export default LeftNav;
