import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '../..';
import { fetchOneType } from '../../http/deviceAPI';
import Icon from '../../utils/Icon';

const ComponentCards = observer((data) => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchOneType(1).then((data) => device.setDeviceCardsView(data.device));
    console.log(device.deviceCardsView)
  }, []);

  return (
    <div className="component-container">
      <div className="component">
        <div className="component__header">
          <div className="name">Intel 10th Gen Core i3-10300F 3.70 GHz LGA1200 Processor</div>
          <div className="rating">
            <Icon name="star" color="#605593" size={20} />
            <div className="rating__count">1,259</div>
          </div>
        </div>
        <div className="component__img">
          <img class="image" src="http://localhost:5001/f43ca450-63ae-48a6-8ec0-0bd108d09fd3.jpg" alt="" />
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
  )
})

export default ComponentCards