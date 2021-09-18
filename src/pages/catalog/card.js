import React from "react";

export default function Card(key) {
  //console.log(key);
  return (
    <div className="card">
      <div className="header">
        <img className="header-img skeleton" />
        <div className="title" data-title>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
      <div data-body>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    </div>
  );
}
