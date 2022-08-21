import React from "react";
import Icon from "../../utils/Icon";

const Settings = () => {
  return (
    <div className="settings_wrapper">
      <div className="settings">
        <h1>Local systems constructor settings:</h1>
        <div className="settings-container">
          <div className="toggle-container">
            <input type="checkbox" id="1" className="toggle" />
            <label for="1" className="label">
              <div className="ball"></div>
            </label>
            <div className="option">System validity check</div>
          </div>
          <div className="toggle-container">
            <input type="checkbox" id="2" className="toggle" />
            <label for="2" className="label">
              <div className="ball"></div>
            </label>
            <div className="option">Hide unavailable components</div>
          </div>
          <div className="toggle-container">
            <input type="checkbox" id="3" className="toggle" />
            <label for="3" className="label">
              <div className="ball"></div>
            </label>
            <div className="option">Auto save system when exit</div>
          </div>
          {/* <h1>Get email updates when:</h1> */}
          <div className="toggle-container">
            <input type="checkbox" id="4" className="toggle" />
            <label for="4" className="label">
              <div className="ball"></div>
            </label>
            <div className="option">Predict next selection</div>
          </div>

          <div className="settings__content">
            <p>
              You may also receive some email notifications that admin
              configured. <a href="#">Learn more</a>
              {/* <br /> */}
            </p>
          </div>
          <div className="settings__footer">
            <h1>System file format</h1>
            <label>
              <input type="radio" name="sendType" id="" checked />
              <span>JSON</span>
            </label>
            <label>
              <input type="radio" name="sendType" id="" />
              <span>CSV</span>
            </label>
            <div className="send">
              <input type="submit" value="Save" />
            </div>
          </div>
        </div>
      </div>

      <div class="card first-card">
        <h3>Personal information</h3>
        <div className="input-container">
          <div className="input-container__first">
            <div className="c-input-group">
              <input
                value="Yauheni"
                type="text"
                id="name"
                required
                className="c-input"
              />
              <label className="c-input-label">First Name</label>
            </div>
            <div className="c-input-group">
              <input
                value="Bulyha"
                type="text"
                id="name"
                required
                className="c-input"
              />
              <label className="c-input-label">Second Name</label>
            </div>
          </div>
          <div className="input-container__second">
            <div className="c-input-group">
              <input
                value="test@example.com"
                type="text"
                id="name"
                required
                className="c-input"
              />
              <label className="c-input-label">Email Address</label>
              <label className="c-input-label-verified">Email Verified</label>
            </div>
          </div>
          <div className="input-container__third">
            <div className="c-input-group">
              <input
                value=""
                type="text"
                id="name"
                required
                className="c-input"
              />
              <label className="c-input-label">Nick Name</label>
            </div>
            <div className="c-input-group">
              <input
                value=""
                type="text"
                id="name"
                required
                className="c-input"
              />
              <label className="c-input-label">GitHub</label>
            </div>
          </div>
        </div>
        <span class="link">See more topics</span>
      </div>

      <div class="card second-card">
        <h3>Address and contact information</h3>
        <div class="containers">
          <div class="container cone">
            <div class="icon">
              <Icon className="null" name="big-home" color="white" size={32} />
            </div>
            <h4>Residential address</h4>
            <p>12 Navoc Way 44756 Cioseega</p>
            <div class="btn">Report relocation</div>
          </div>
          <div class="container ctwo">
            <div class="icon">
              <Icon className="null" name="postal" color="white" size={32} />
            </div>
            <h4>Postal address</h4>
            <div class="chip">No address provided</div>
            <div class="btn active"> Add postal address</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
