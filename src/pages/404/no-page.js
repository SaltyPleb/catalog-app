import React, { Component } from "react";
import Loader from "../../components/loader/loader.js";

class nopage extends Component {
  state = {
    link: "",
    isLoading: true,
  };

  async componentDidMount() {
    await fetch(
      "https://tv.giphy.com/v1/gifs/random?api_key=EdgHAspOU0eO4RRXbz215LSc9CYfjGWD&tag=cat"
    )
      .then(function (e) {
        return e.json();
      })
      .then(function (e) {
        const link = e.data.image_original_url;
        return link;
      })
      .then((link) => {
        this.setState({ link: link });
        this.setState({ isLoading: false });
      });
    console.log(this.state.link);
    // const response = await fetch("https://tv.giphy.com/v1/gifs/random?api_key=EdgHAspOU0eO4RRXbz215LSc9CYfjGWD&tag=cat");
    // const data = await response.json();
    // console.log(data.image_original_url)
    // this.setState({ link: data.image_original_url })

    //test this later
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
    xhr.send();
  }

  render() {
    return (
      <div>
        <div
          class="nopage"
          style={{
            margin: "5px",
            textAlign: "center",
          }}
        >
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <div 
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
              }}
              >
                <img
                  src={this.state.link}
                  style={{ width: "97%", height: "97%" }}
                />
                <h1
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  404
                </h1>
                <h1
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Page Not Found
                </h1>
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default nopage;
