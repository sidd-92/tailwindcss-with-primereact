import React from "react";
import logo from "../assets/img/portoliologo.png";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="w-full shadow-md text-white">
          <div className="bg-header-bg flex flex-row items-center h-16 pl-4 pr-4 sm:pl-16 sm:pr-16">
            <div className="flex-grow text-left py-10">
              <img src={logo} className="w-24" />
            </div>
            <div className="flex flex-row text-2xl">
              <div className="pr-6 ">
                <NavLink
                  className="text-white hover:text-secondary"
                  to={"/home"}
                >
                  Home
                </NavLink>
              </div>
              <div className="pr-6">
                <NavLink
                  className="text-white hover:text-secondary"
                  to={"/about"}
                >
                  About
                </NavLink>
              </div>
              <div className="flex flex-row items-center pr-6">
                <a className="flex flex-row items-center pr-6">
                  <i className="pi pi-user text-icon-color"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
