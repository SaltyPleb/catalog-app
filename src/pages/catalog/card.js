import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <div class="header">
        <img class="header-img skeleton" />
        <div class="title" data-title>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
      <div data-body>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  );
}
