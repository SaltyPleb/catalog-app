import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchOneType } from "../../http/deviceAPI";
import Icon from "../../utils/Icon";

const ComponentCards = observer(({ selectedType }) => {
  const { device, constructor } = useContext(Context);

  useEffect(() => {
    fetchOneType(selectedType).then((data) =>
      device.setDeviceCardsView(data.device)
    );
  }, [selectedType, constructor]);

  const setOrUpdateComponent = (component, type) => {
    constructor.setCurrentComponents(component, type);
    console.log(component, type)
  }

  return (
    <div className="component-container">
      {/* { img, id, price, name, rating } */}
      {device.deviceCardsView.map((device) => (
        <div className="component" key={device.id} onClick={() => setOrUpdateComponent(device, selectedType)}>
          <div className="component__header">
            <div className="name">{device.name}</div>
            <div className="rating">
              <Icon name="star" color="#605593" size={20} />
              <div className="rating__count">{device.rating}</div>
            </div>
          </div>
          <div className="component__img">
            <img
              className="image"
              src={process.env.REACT_APP_API_VERSION_URL + device.img}
              alt=""
            />
          </div>
          <div className="component__footer">
            <div className="f-tags">
              <div className="tag">8 Cores</div>
              <div className="tag">3.6 GHz</div>
              <div className="tag">120W</div>
            </div>
            <div className="f-bottom">
              <div className="status">
                <Icon name="box" color="rgba(24, 181, 34, 1)" size={25} />
                <div className="value">In Stock</div>
              </div>
              <div className="price">$ {device.price}.00</div>
            </div>
          </div>
        </div>
      ))}
      <div className="component com-favorite">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer">
          <div className="f-tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="f-bottom">
            <div className="status">
              <Icon name="box" color="rgba(24, 181, 34, 1)" size={25} />
              <div className="value">In Stock</div>
            </div>
            <div className="price">$ 119.00</div>
          </div>
        </div>
      </div>
      <div className="component com-favorite">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer footer">
          <div className="footer__tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="footer__bottom">
            <div className="status">
              <Icon name="star" color="#605593" size={20} />
              <div className="value">In Stock</div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer footer">
          <div className="footer__tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="footer__bottom">
            <div className="status">
              <Icon name="star" color="#605593" size={20} />
              <div className="value">In Stock</div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer footer">
          <div className="footer__tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="footer__bottom">
            <div className="status">
              <Icon name="star" color="#605593" size={20} />
              <div className="value">In Stock</div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer footer">
          <div className="footer__tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="footer__bottom">
            <div className="status">
              <Icon name="star" color="#605593" size={20} />
              <div className="value">In Stock</div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="component__header">
          <div className="name">
            Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor
          </div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img
            className="image"
            src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg"
            alt=""
          />
        </div>
        <div className="component__footer footer">
          <div className="footer__tags">
            <div className="tag">8 Cores</div>
            <div className="tag">3.6 GHz</div>
            <div className="tag">120W</div>
          </div>
          <div className="footer__bottom">
            <div className="status">
              <Icon name="star" color="#605593" size={20} />
              <div className="value">In Stock</div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ComponentCards;
