import React, { useEffect, useState } from "react";
import "./styles/devicepage.css";
import {useParams} from "react-router-dom"
import { fetchOneDevices } from "../../http/deviceAPI";


const DevicePage = () => {
  const [device, setDevice] = useState({info: []})

  const {id} = useParams()

  useEffect(() => {
    fetchOneDevices(id).then(data => setDevice(data))
  }, [])

  return (
    <div className="device_main">
      <div class="wrapper">
        <div class="dev_card">
          <div class="product-left">
            <div class="dev_header">
              <h1>{device.name}</h1>
              <h2>Raiting is {device.raiting}</h2>
            </div>

            <div class="product-main">
              <div class="focus">
                <span>Description</span>
                <span>Details</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione voluptatem quam vel, delectus expedita ullam asperiores
                laudantium modi. Voluptatum eum cum quis ea modi. Reiciendis
                asperiores aut beatae odit minima.
              </p>
            </div>

            <div class="product-details">
              <div class="product-total">
                <h3>Total Price</h3>
                <p>${device.price}</p>
              </div>
            </div>
            <div class="product-btns">
              <a href="#" class="product-add">
                Add To Favorite
              </a>
            </div>
          </div>
          <div class="product-right">
            <img
              src={"http://localhost:5000/" + device.img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "90vh",
    //   }}
    // >
    //   <h1>devicepage</h1>
    // </div>
  );
};

export default DevicePage;
