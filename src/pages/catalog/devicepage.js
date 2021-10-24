import React from "react";
import "./styles/devicepage.css";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Видеокарта Palit GeForce RTX 3060 Dual 12GB GDDR6 NE63060019K9-190AD",
    price: "500.00",
    raiting: "5",
    img: `https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png`,
    description:
      "Интерфейс   PCI Express x16 4.0    Производитель графического процессора  NVIDIA  Графический процессор  GeForce RTX 3060   «Разогнанная» версия   Защита от майнинга (LHR)   Технические характеристик (референсная) астота графического процессора    1 320 МГц   Максимальная частота графического процессора    1 777 МГц",
  };
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
                Add To Cart
              </a>
            </div>
          </div>
          <div class="product-right">
            <img
              src={device.img}
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
