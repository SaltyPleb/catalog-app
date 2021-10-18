import React from "react";
import "./styles/devicepage.css";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Видеокарта Palit GeForce RTX 3060 Dual 12GB GDDR6 NE63060019K9-190AD",
    price: "500",
    raiting: "5",
    img: `https://www.asus.com/media/global/gallery/797CKaxpZhF41vQA_setting_xxx_0_90_end_800.png`,
    description:
      "Интерфейс   PCI Express x16 4.0    Производитель графического процессора  NVIDIA  Графический процессор  GeForce RTX 3060   «Разогнанная» версия   Защита от майнинга (LHR)   Технические характеристик (референсная) астота графического процессора    1 320 МГц   Максимальная частота графического процессора    1 777 МГц",
  };
  return (
    <div className="device_main">
      <div className="dev_main">
        <div className="top_name"><b>{device.name}</b></div>
        <div className="add_info">
          <img className="device_img" src={device.img} alt="" />
          <div className="device_info">
            <div className="description">{device.description}</div>
            <div className="device_price">Avarage price {device.price} $</div>
            <button className="btn-cyber">Available now</button>
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
