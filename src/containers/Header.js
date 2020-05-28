import React from "react";
import logo from "../assets/img/logo.png";
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="w-full shadow-md">
          <div className="bg-primary flex flex-row items-center h-16 pl-4 pr-4 sm:pl-16 sm:pr-16">
            <div className="flex-grow text-left py-10">
              <img src={logo} className="w-24" />
            </div>
            <div className="flex flex-row text-2xl">
              <div className="pr-6 hover:text-primary">
                <a className="text-white">Home</a>
              </div>
              <div className="pr-6 hover:text-primary">
                <a className="text-white">About</a>
              </div>
              <div className="flex flex-row items-center pr-6 hover:text-primary">
                <a className="flex flex-row items-center pr-6 hover:text-primary">
                  <i className="pi pi-user"></i>
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
