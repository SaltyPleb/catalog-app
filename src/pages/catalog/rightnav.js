import React from "react";
import { Link, Switch } from "react-router-dom";

const rightnav = () => {
  return (
    <Switch>
      <div className="right_bar">
        <Link to="/catalog/likes" className="right_btn text__shadow">
          Likes
        </Link>
        {/* <Link to="/catalog/likes" className="right_btn text__shadow">
          Likes
        </Link> */}
        <Link to="/catalog/constructor" className="right_btn text__shadow">
          Constructor
        </Link>
        <Link to="/catalog/history" className="right_btn text__shadow">
          History
        </Link>
      </div>
    </Switch>
  );
};

export default rightnav;
