import React, { Component } from "react";

class nopage extends Component {
  state = {
    link: "",
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
      });
    console.log(this.state.link);
    // const response = await fetch("https://tv.giphy.com/v1/gifs/random?api_key=EdgHAspOU0eO4RRXbz215LSc9CYfjGWD&tag=cat");
    // const data = await response.json();
    // console.log(data.image_original_url)
    // this.setState({ link: data.image_original_url })
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
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "90vh"
            }}
          >
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
            <img
              src={this.state.link}
              style={{ width: "97%", height: "97%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default nopage;
