import React, { useEffect, useState } from "react";
import "./styles/devicepage.css";
import { useParams } from "react-router-dom";
import { fetchOneDevices } from "../../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });

  const { id } = useParams();

  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data));
  }, []);

  return (
    <div className="device_main">
      <div className="wrapper">
        <div className="dev_card">
          <div className="product-left">
            <div className="dev_header">
              <h1>{device.name}</h1>
              <h2>Rating is {device.rating}</h2>
            </div>

            <div className="product-main">
              <div className="focus">
                <span style={{cursor: 'pointer'}}>Description</span>
                <span style={{cursor: 'pointer'}}>Links</span>
              </div>
              {/* <p> */}
                {device.info.map((info, index) => (
                  <div
                    key={info.id}
                    style={{
                      background: index % 2 === 0 ? "gray" : "transparent",
                      padding: 10,
                    }}
                  >
                    {info.title}: {info.description}
                  </div>
                ))}
              {/* </p> */}
            </div>

            <div className="product-details">
              <div className="product-total">
                <h3>Avarage Price</h3>
                <p>${device.price}</p>
              </div>
            </div>
            <div className="product-btns">
              <a href="#" className="product-add">
                Add To Favorite
              </a>
            </div>
          </div>
          <div className="product-right">
            <img src={"http://localhost:5000/" + device.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
