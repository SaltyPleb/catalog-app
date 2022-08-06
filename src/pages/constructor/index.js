import { observer } from "mobx-react-lite";
import React from "react";
import LeftNav from "./LeftNav";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../../components/routes/AppRouter";
import { constructorRoutes } from "../../components/routes/routes";

const index = observer(() => {
  return (
    <div className="system-container">
      <Router>
        <LeftNav />
        <div className="constructor_wrapper">
          <AppRouter routes={constructorRoutes} />
        </div>
      </Router>
    </div>
  );
});

export default index;
