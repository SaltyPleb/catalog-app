import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/consts";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(({}) => {
  
  const { device } = useContext(Context);
  const history = useHistory();
  return (
    <>
      {device.deviceCardsView.map((device) =>
        <DeviceItem key={device.id} device={device}/>
        )}
    </>
  );
});

export default DeviceList;
