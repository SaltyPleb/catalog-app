import React, { Component } from "react";
import "./catalog.css";
import Card from "./card.js";
import Loader from "../../components/loader/loader.js";
import Types from "./types.js";

// const postCards = data.map((post, key) => (
//   <Card key={key} name={post.name} content={post.content} />
// ));

class Catalog extends Component {
  state = {
    data: [],
    isloading: true,
    value: '',
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
  onChange = (event) => {
    this.setState({value: event.target.value})
  }

  onClear = () => {
    this.setState({value: ""})
  }

  // onChange = () => {
  //   this.setState(prevState => ({
  //     value: !prevState.value,
  //   }));
  // }

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
                  <div className="closeModal" onClick={this.onClear}></div>
                  <div className="search__bar-suggest">
                    <input
                      className="search__input"
                      type="text"
                      placeholder="Поиск"
                      value={this.state.value} 
                      onChange={this.onChange}
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
                    <Types/>
                  </div>
                </div>
              </div>
              <div className="right_grid">
                <div className="grid">
                  {this.state.data.map(() => (
                    <Card key={this.state.data.id} />
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
