import React, { Component } from "react";
import "./catalog.css";
import Card from "./card.js";

// const postCards = data.map((post, key) => (
//   <Card key={key} name={post.name} content={post.content} />
// ));

class Catalog extends Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    );
    const data = await response.json();

    console.log(data);

    this.setState({data: data});
  }

  render() {
    return (
      <div>
        <div class="grid">
          {this.state.data.map((card, key) => (
            <Card key={key}/>
          ))}
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
