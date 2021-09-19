import React, { Component } from "react";
import "./catalog.css";
import Card from "./card.js";
import Loader from "../../components/loader/loader.js";

// const postCards = data.map((post, key) => (
//   <Card key={key} name={post.name} content={post.content} />
// ));

class Catalog extends Component {
  state = {
    data: [],
    isloading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    );
    const data = await response.json();

    console.log(data);

    this.setState({
      data: data,
      isloading: false,
    });
  }

  render() {
    return (
      <>
        {this.state.isloading ? (
          <Loader />
        ) : (
          <div className="main_grid">
            <div className="search__grid">
              <div className="search__bar">
                <div className="search__bar-wrapper">
                  <div className="closeModal"></div>
                  <div className="search__bar-suggest">
                    <input
                      class="search__input"
                      type="text"
                      placeholder="Поиск"
                      value=""
                      tabindex="1"
                      data-bind="hasFocus: $root.hasFocus,
                              value: $root.keyword,
                              valueUpdate: 'input',
                              event: {keydown: function (data, event) {return $root.onKeyDown(event)}}"
                    />
                  </div>
                </div>

                {/* <a href="#" class="close" /> */}
              </div>
            </div>
            <div className="middle_grid">
              {" "}
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
        )}
      </>
    );
  }
}
export default Catalog;
