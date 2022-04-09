import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevices } from "../../http/deviceAPI";
import { insertFavorite } from "../../http/favoriteAPI";
import { Context } from "../..";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });

  const { id } = useParams();

  const { user } = useContext(Context);

  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data));
  }, []);
  
  const addToFav = () => {
    const formData = new FormData()
    formData.append('device_name', device.name)
    formData.append('device_link', device.id)
    formData.append('userId', user.userInfo.id)
    formData.append('deviceId', device.id)
    insertFavorite(formData).then(data => console.log(data));
  }

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
              <div className="description_list">
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
                </div>
              {/* </p> */}
            </div>

            <div className="product-details">
              <div className="product-total">
                <h3>Avarage Price</h3>
                <p>${device.price}</p>
              </div>
            </div>
            <div onClick={() => addToFav()} className="product-btns">
              <a href="#" className="product-add">
                Add To Favorite
              </a>
            </div>
          </div>
          <div className="product-right">
            <img className="device-image" src={process.env.REACT_APP_API_VERSION_URL + device.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
