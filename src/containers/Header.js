import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import ButtonBox from "../components/ButtonBox";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isClosed: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick(e) {}

  render() {
    return (
      <React.Fragment>
        <div className="w-full flex justify-end items-center p-4 bg-gray-100">
          <div className="text-xs text-black mr-4  w-auto">
            <NavLink to="#">Need Help? +91 9876543210</NavLink>
          </div>
          <div className="text-xs text-black  w-auto mr-4">
            <NavLink to="#">Signin</NavLink>
          </div>
          <div className="text-xs text-primary-color-400  w-auto mr-4">
            <NavLink to="#">Singup</NavLink>
          </div>
        </div>

        <nav className=" bg-white shadow-md">
          <div
            className="flex items-center  justify-between flex-wrap bg-header 
        px-4 py-4 lg:text-body1"
            style={{ maxWidth: "1366px", margin: "auto" }}
          >
            <div className="flex items-center w-full lg:w-auto justify-center lg:justify-start flex-shrink-0 text-white mr-6 logoPosition">
              <NavLink to="/">
                <a assets>
                  <img src={Logo} className="w-32" />
                </a>
              </NavLink>
            </div>

            <div
              className={` hidden lg:block w-full flex-grow lg:flex lg:items-center lg:w-auto
        z-10 bg-header text-center lg:text-left`}
            >
              <div className="lg:flex lg:flex-grow "></div>

              <div className="flex items-center">
                <div className="pr-6 text-sm hover:text-primar">
                  <NavLink to="/help">
                    <a assets>Home</a>
                  </NavLink>
                </div>
                <div className="text-sm pr-4">
                  <ButtonBox
                    buttonColor="bg-secondary-color-700"
                    buttonsize="small"
                    className="text-white"
                    rounded={true}
                    label="Schedule Meeting"
                  />
                </div>
                <div className="text-sm pr-4">
                  <ButtonBox
                    buttonsize="small"
                    label="Join Meeting"
                    className="text-white"
                    rounded={true}
                    buttonColor="bg-secondary-color-800"
                  />
                </div>

                <div className="text-sm pr-4">
                  <ButtonBox
                    buttonsize="small"
                    label="Host Instant Meeting"
                    className="text-white"
                    rounded={true}
                    buttonColor="bg-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
