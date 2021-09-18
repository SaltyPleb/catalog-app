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

    this.setState({ data: data });
  }

  render() {
    return (
      <div className="main_grid">
        <div className="middle_grid">
          <div className="grid_leftcolumn">
            <div className="filter_wrapper">
              <div className="sheema_filter">
                <div className="">Каталог</div>
                <div className="">мобильное приложение</div>
                <div className="">мобильное приложение</div>
                <div className="">мобильное приложение</div>
                <div className="">мобильное приложение</div>
              </div>
            </div>
          </div>
          <div className="right_grid">
            <div className="grid">
            {this.state.data.map(() => (
              <Card key={null} />
            ))}
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}
export default Catalog;
