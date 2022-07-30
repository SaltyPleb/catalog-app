import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { fetchHistoryByUserId } from "../../http/historyAPI";
import Unauthorized from "../403/Unauthorized";
import HistoryItem from "./HistoryItem";

const History = observer(() => {
  const [historyInfo, setHistoryInfo] = useState([]);

  const { user } = useContext(Context);

  useEffect(() => {
    fetchHistoryByUserId(user.userInfo.id).then((data) => setHistoryInfo(data));
  }, []);

  return (
    <div className="history">
      {user.isAuth ? (
        <>
          <div className="history__header">
            <div className="h-name">History page</div>
            <div className="h-info">
              Here will be displayed al your visited pages.
            </div>
          </div>
          <div className="history__items">
            {historyInfo.map((item) => HistoryItem(item))}
          </div>
        </>
      ) : (
        <Unauthorized />
      )}
    </div>
  );
});

export default History;
