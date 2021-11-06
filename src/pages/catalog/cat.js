import React, { useContext, useEffect } from "react";
import "./styles/catalog.css";
import DeviceList from "./DeviceList.js";
import Loader from "../../components/loader/loader.js";
import Types from "./types.js";
import RightNav from "./rightnav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import Search from "./search";
import { fetchTypes } from "../../http/deviceAPI";

const cat = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
  },[])

  return (
    <div>
      <RightNav />
      <div className="main_grid">
        <div className="search__grid">
          <div className="search__bar">
            <div className="search__bar-wrapper">
              <div className="closeModal" onClick={() => device.setSearchText("") }></div>
              <div className="search__bar-suggest">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Поиск"
                  value={device.searchText}
                  onChange={(event) => {device.setSearchText(event.target.value)}}
                />
              </div>
            </div>
            <div className= {device.searchText ? "search__results search_view" : "search__results"}>
              <Search/>
            </div>
            {/* <a href="#" class="close" /> */}
          </div>
        </div>
        <div className="middle_grid">
          <div className="grid_leftcolumn">
            <div className="filter_wrapper">
              <div className="sheema_filter">
                <Types />
              </div>
            </div>
          </div>
          <div className="right_grid">
            <div className="grid">
              {/* {this.state.data.map(() => ( */}

                <DeviceList/>

              {/* <Card /> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default cat;
