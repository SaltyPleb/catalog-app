import React from "react";
import {Link} from "react-router-dom"

const rightnav = () => {
  return (
    <div className="right_bar">
      <Link to="/catalog/likes" className="right_btn text__shadow">
        Likes
      </Link>
      <Link to="/catalog/constructor" className="right_btn text__shadow">
        Constructor
      </Link>
      <Link to="/catalog/history" className="right_btn text__shadow">
        History
      </Link>
    </div>
  );
};

export default rightnav;
