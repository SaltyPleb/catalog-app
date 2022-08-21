import React, { useContext } from "react";
import { Context } from "../..";

const NotificationBar = () => {
  const { user } = useContext(Context);

  return (
    <div className="bar-wrapper">
      <div className="bar-wrapper__type">WARNING: </div>
      <div className="bar-wrapper__message">
        {" "}
        This site is required authorization, to access all pages and
        functionality, please login
      </div>
      <div onClick={() => user.setIsLoginNotification(false)} className="close" />
    </div>
  );
};

export default NotificationBar;
