import React from "react";
import arrow from "../../images/static/arrow.png";

const History = () => {
  return (
    <div className="history">
      <div className="history__header">
        <div className="h-name">History page</div>
        <div className="h-info">
          Here will be displayed al your visited pages.
        </div>
      </div>
      <div className="history__items">
        <div className="item">
          <div className="item__top">
            <div className="date">Today - Tuesday, April 09, 2022</div>
            <img className="icon " src={arrow} />
          </div>
          <div className="item__gap" />
          <div className="item__rows">
            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf fsoidj  sdofj oisdjf ois difjs isdi fjsdi jfois djfosdj fosjd o
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="item__top">
            <div className="date">Today - Tuesday, April 09, 2022</div>
            <img className="icon " src={arrow} />
          </div>
          <div className="item__gap" />
          <div className="item__rows">
            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf fsoidj  sdofj oisdjf ois difjs isdi fjsdi jfois djfosdj fosjd o
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row__time">2:20 PM</div>
              <div className="row__info">
                <div className="info-wrap">
                  <div className="info-wrap__name">
                    RTX 3090 Tim qoursdha n sdknf
                  </div>
                  <div className="info-wrap__link">www.rtx.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
