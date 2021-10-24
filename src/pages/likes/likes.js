import React from "react";
import "./likes.css";
import Rightnav from "../catalog/rightnav";

const likes = () => {
  return (
    <>
      <Rightnav />
      <section class="likes_container">
        <header>
          <div class="button-col">
            <button class="btn" name="Add Task">
              Add Task
            </button>
          </div>

          <div class="status-col">
            <label> Status </label>
          </div>

          <div class="progress-col">
            <label> Progress </label>
          </div>

          <div class="dates-col">
            <label> Dates </label>
          </div>

          <div class="priority-col">
            <label> Priority </label>
          </div>

          <div class="icon-col">
            <i class="icon fa fa-user-o"> </i>
          </div>
        </header>

        <ul class="task-items">
          <li class="item type">
            <div class="status">
              <div class="icon off"> </div>
              <div class="text"> Ofdasdasdasdf Track </div>
            </div>

            <div class="progress">
              <progress value="15" max="100" />
            </div>

            <div class="dates">
              <div class="bar"> </div>
            </div>

            <div class="priority">
              <div class="bar"> </div>
            </div>

            <div class="user">
              <img
                src="https://source.unsplash.com/40x40/?gpu"
                alt="Image 001"
                class="owner-img"
              />
            </div>
          </li>
          <li class="item type">
            <div class="status">
              <div class="icon off"> </div>
              <div class="text"> Off Track </div>
            </div>

            <div class="progress">
              <progress value="35" max="100" />
            </div>

            <div class="dates">
              <div class="bar"> </div>
            </div>

            <div class="priority">
              <div class="bar"> </div>
            </div>

            <div class="user">
              <img
                src="https://source.unsplash.com/40x40/?cpu"
                alt="Image 001"
                class="owner-img"
              />
            </div>
          </li>
          <li class="item type">
            <div class="status">
              <div class="icon off"> </div>
              <div class="text"> Off Tfsdfsdfsrack </div>
            </div>

            <div class="progress">
              <progress value="55" max="100" />
            </div>

            <div class="dates">
              <div class="bar"> </div>
            </div>

            <div class="priority">
              <div class="bar"> </div>
            </div>

            <div class="user">
              <img
                src="https://source.unsplash.com/40x40/?ram"
                alt="Image 001"
                class="owner-img"
              />
            </div>
          </li>

          
        </ul>
      </section>
    </>
  );
};

export default likes;
