import { Button } from "primereact/button";
import React, { Component } from "react";
import ReactDom from "react-dom";

class BtnBox extends Button {
  constructor(props) {
    super(props);
    this.renderLabel = this.renderLabel.bind(this);
  }

  renderLabel() {
    if (this.props.img) {
      return null;
    }
    var buttonLabel = this.props.label || "";
    if (this.props.label) {
      return (
        <React.Fragment>
          <span className="p-button-text p-c">{buttonLabel}</span>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

class ButtonBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.social ? (
      <div className="w-full">
        <BtnBox
          label="Save"
          {...this.props}
          className={
            (this.props.buttonSize && this.props.buttonSize == "small"
              ? " h-8 "
              : " h-auto") +
            (this.props.buttonTransformation &&
            this.props.buttonTransformation == "grey"
              ? " text-gray-700 bg-gray-500  hover:bg-gray-400 focus:outline-none " +
                " rounded-full transition duration-300 ease-in-out active:bg-gray-200 shadow-lg   "
              : this.props.buttonTransformation &&
                this.props.buttonTransformation == "white"
              ? " text-black bg-white border-b2 hover:bg-primary-color-300 focus:outline-none  " +
                " rounded-full transition duration-300 ease-in-out active:bg-primary  "
              : `text-white ${
                  this.props.buttonColor || "bg-primary"
                } border-b2 hover:${
                  this.props.buttonHoverColor || "bg-primary-color-300"
                } focus:outline-none` +
                " rounded-full transition duration-300 ease-in-out active:bg-primary-color-700 shadow-lg ") +
            (this.props.className + " w-full")
          }
        >
          {this.props.img ? (
            <div className="flex items-center w-full">
              <div className="p-2">
                <img src={this.props.img} className="w-12" alt="Google Bar" />
              </div>
              <div className="pl-8 text-sm text-white font-thin">
                {this.props.label}
              </div>
            </div>
          ) : (
            ""
          )}
        </BtnBox>
      </div>
    ) : (
      <React.Fragment>
        {!this.props.rounded ? (
          <div className={this.props.className ? " " : "pt-0 pb-2"}>
            <Button
              label="Save"
              {...this.props}
              className={
                (this.props.buttonSize && this.props.buttonSize == "small"
                  ? " h-10 "
                  : " h-12 ") +
                (this.props.buttonTransformation &&
                this.props.buttonTransformation == "grey"
                  ? " text-white bg-primary border-b2 hover:bg-gray-500 focus:outline-none focus:shadow-outline " +
                    " w-full  transition duration-300 ease-in-out active:bg-gray-700 shadow-lg text-lg "
                  : " w-full text-white bg-primary border-b2 hover:bg-primary-color-600 focus:outline-none  " +
                    "  transition duration-300 ease-in-out active:bg-primary-color-700 shadow-lg text-lg ") +
                (this.props.className
                  ? " " + this.props.className + " "
                  : " w-full ")
              }
            >
              {this.props.img ? (
                <div className="flex flex-row justify-center items-center">
                  <div>
                    <img
                      className="h-6 pr-3"
                      src={this.props.img}
                      alt={this.props.imgalt ? this.props.imgalt : "btn image"}
                    />
                  </div>
                  <div>{this.props.label}</div>
                </div>
              ) : (
                ""
              )}
            </Button>
          </div>
        ) : (
          <div className="w-full">
            {this.props.validation ? (
              <p
                style={{ color: "#eb2d44" }}
                className="text-center font-bold pb-2"
              >
                {this.props.errorMessage}
              </p>
            ) : (
              <div className="invisible pb-2">{this.props.errorMessage}</div>
            )}
            <BtnBox
              label="Save"
              {...this.props}
              className={
                (this.props.buttonSize && this.props.buttonSize == "small"
                  ? " h-8 "
                  : this.props.buttonSize === "mid"
                  ? "h-16 "
                  : "h-10 ") +
                (this.props.buttonTransformation &&
                this.props.buttonTransformation == "grey"
                  ? " text-gray-700 bg-gray-500  hover:bg-gray-400 focus:outline-none " +
                    " rounded-full transition duration-300 ease-in-out active:bg-gray-200 shadow-lg   "
                  : this.props.buttonTransformation &&
                    this.props.buttonTransformation == "white"
                  ? " text-black bg-white border-b2 hover:bg-primary-color-300 focus:outline-none  " +
                    " rounded-full transition duration-300 ease-in-out active:bg-primary  "
                  : `text-white ${
                      this.props.buttonColor || "bg-primary"
                    } border-b2 hover:bg-primary-color-700 focus:outline-none` +
                    " rounded-full transition duration-300 ease-in-out active:bg-primary shadow-lg ") +
                (this.props.className + " w-full")
              }
            >
              {this.props.img ? (
                <div className="flex flex-row justify-center items-center">
                  <div>
                    <img
                      className="h-6 pr-3"
                      src={this.props.img}
                      alt={this.props.imgalt ? this.props.imgalt : "btn image"}
                    />
                  </div>
                  <div className={this.props.labelStyle}>
                    {this.props.label}
                  </div>
                </div>
              ) : (
                ""
              )}
            </BtnBox>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonBox;
