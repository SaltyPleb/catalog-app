import React, { useContext, useEffect } from "react";
import "./likes.css";
import Rightnav from "../catalog/rightnav";
import { Context } from "../..";

const Likes = () => {

const { user } = useContext(Context);

  useEffect(() => {
    // fetchTypes().then((data) => device.setTypes(data));
    // fetchBrands().then((data) => device.setBrands(data));
    // fetchOneType(device.selectedType).then((data) => device.setOneType(data));
  }, []);



  return (
    <>
      <Rightnav />
      <section className="likes_container">
        <header>
          <div className="button-col">
            <button className="btn" name="Add Task">
              Add Task
            </button>
          </div>

          <div className="status-col">
            <label> Status </label>
          </div>

          <div className="progress-col">
            <label> Progress </label>
          </div>

          <div className="dates-col">
            <label> Dates </label>
          </div>

          <div className="priority-col">
            <label> Priority </label>
          </div>

          <div className="icon-col">
            <i className="icon fa fa-user-o"> </i>
          </div>
        </header>

        <ul className="task-items">
          <li className="item type">
            <div className="status">
              <div className="icon off"> </div>
              <div className="text"> Ofdasdasdasdf Track </div>
            </div>

            <div className="progress">
              <progress value="15" max="100" />
            </div>

            <div className="dates">
              <div className="bar"> </div>
            </div>

            <div className="priority">
              <div className="bar"> </div>
            </div>

            <div className="user">
              <img
                src="https://source.unsplash.com/40x40/?gpu"
                alt="Image 001"
                className="owner-img"
              />
            </div>
          </li>
          <li className="item type">
            <div className="status">
              <div className="icon off"> </div>
              <div className="text"> Off Track </div>
            </div>

            <div className="progress">
              <progress value="35" max="100" />
            </div>

            <div className="dates">
              <div className="bar"> </div>
            </div>

            <div className="priority">
              <div className="bar"> </div>
            </div>

            <div className="user">
              <img
                src="https://source.unsplash.com/40x40/?cpu"
                alt="Image 001"
                className="owner-img"
              />
            </div>
          </li>
          <li className="item type">
            <div className="status">
              <div className="icon off"> </div>
              <div className="text"> Off Tfsdfsdfsrack </div>
            </div>

            <div className="progress">
              <progress value="55" max="100" />
            </div>

            <div className="dates">
              <div className="bar"> </div>
            </div>

            <div className="priority">
              <div className="bar"> </div>
            </div>

            <div className="user">
              <img
                src="https://source.unsplash.com/40x40/?ram"
                alt="Image 001"
                className="owner-img"
              />
            </div>
          </li>

          
        </ul>
      </section>
    </>
  );
};

export default Likes;
