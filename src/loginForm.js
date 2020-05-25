import React, { Component } from "react";
import { Row, Col } from "antd";

import loggingImage from "./logging.jpg";
import "./App.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="logging">
        <Col xl={14} lg={12} xs={24} className="left-wrap">
        <img
              src={loggingImage}
              className="logging-image"
              alt="loggingImage"
            />
        </Col>
        <Col xl={10} lg={12} xs={24} className="right-wrap">
            <div>
                <div>
                    USER LOGIN
                </div>
            </div>
        
        </Col >
      </div>
    );
  }
}

export default LoginForm;
