import React, { Component } from "react";
import "./catalog.css";
import Card from './card.js';
const data = [
  { name: "qwe", language: "ahsd", job: "ads" },
  { name: "tyu", language: "hgf", job: "kjh" },
  { name: "khj", language: "nm", job: "ads" },
];
class Catalog extends Component {
  render() {
    return (
      <div>
        <div class="grid">
          <Card name="qwe" language="asd" job="ds"/>
          <Card name="qwe" language="asd" job="ds"/>
          <Card name="qwe" language="asd" job="ds"/>
        </div>

        <template id="card-template">
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
        </template>
      </div>
    );
  }
}
export default Catalog;
