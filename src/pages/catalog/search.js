import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import "./styles/search.css";

const search = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="search__container">
      <div className="cards">
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">Ut enim ad minim veniam.</h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Quis nostrud exercitation ullamco laboris nisi.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" className="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
});

export default search;
