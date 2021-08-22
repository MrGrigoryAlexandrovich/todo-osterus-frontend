import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/PageNotFound.css";
class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
    };
  }
  componentDidMount() {
    let timer = setInterval(() => {
      if (this.state.seconds === 0) {
        clearInterval(timer);
        this.props.history.push("/");
      } else this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }
  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
          </div>
          <span className="text-light">REDIRECTION</span>
          <div className="redirection text-light">{this.state.seconds}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(PageNotFound);
