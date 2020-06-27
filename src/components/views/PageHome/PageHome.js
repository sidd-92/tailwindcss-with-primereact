import React, { Component } from "react";
import Header from "../../../containers/Header";
import { HashLink as Link } from "react-router-hash-link";
import heroimg from "../../../assets/img/about.png";
import ImageCarousal from "../../ImageGallery";
import { Button } from "primereact/button";

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.responsiveOptions = [
      {
        breakpoint: "2560px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  carTemplate(car) {
    return (
      <div className="w-full">
        <img src={car} alt={car.brand} className="w-full" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="flex flex-col items-center  w-full">
          <div id="top" className="flex flex-col items-center w-full">
            <Header />
          </div>
          <div className="text-h1 text-center text-primary-color-800 font-bold">
            Test Home Page
          </div>
          <div className="m-8">
            <ImageCarousal
              responsiveOptions={this.responsiveOptions}
              itemTemplate={this.carTemplate}
              numVisible={2}
              numScroll={1}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
