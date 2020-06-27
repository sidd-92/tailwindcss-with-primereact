import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";

export class DropdownDemo extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
      car: null,
      car2: "BMW",
    };

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];

    this.cars = [
      { label: "Audi", value: "Audi" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" },
    ];

    this.onCityChange = this.onCityChange.bind(this);
    this.onCarChange = this.onCarChange.bind(this);
    this.onCarChange2 = this.onCarChange2.bind(this);
  }

  onCityChange(e) {
    this.setState({ city: e.value });
  }

  onCarChange(e) {
    this.setState({ car: e.value });
  }

  onCarChange2(e) {
    this.setState({ car2: e.value });
  }

  carTemplate(option) {
    if (!option.value) {
      return option.label;
    } else {
      let logoPath = "showcase/demo/images/car/" + option.label + ".png";

      return (
        <div className="p-clearfix">
          <img
            alt={option.label}
            src={logoPath}
            srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            style={{ display: "inline-block", margin: "5px 0 0 5px" }}
            width="24"
          />
          <span style={{ float: "right", margin: ".5em .25em 0 0" }}>
            {option.label}
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>Basic</h3>
        <Dropdown
          value={this.state.city}
          options={this.cities}
          onChange={this.onCityChange}
          placeholder="Select a City"
          optionLabel="name"
          style={{ width: "12em" }}
        />
        <div style={{ marginTop: ".5em" }}>
          {this.state.city
            ? "Selected City: " + this.state.city.name
            : "No city selected"}
        </div>

        <h3>Editable</h3>
        <Dropdown
          value={this.state.car}
          options={this.cars}
          onChange={this.onCarChange}
          style={{ width: "12em" }}
          editable={true}
          placeholder="Select a Brand"
        />
        <div style={{ marginTop: ".5em" }}>
          {this.state.car
            ? "Selected Car: " + this.state.car
            : "No car selected"}
        </div>

        <h3>Advanced</h3>
        <Dropdown
          value={this.state.car2}
          options={this.cars}
          onChange={this.onCarChange2}
          itemTemplate={this.carTemplate}
          style={{ width: "12em" }}
          filter={true}
          filterPlaceholder="Select Car"
          filterBy="label,value"
          showClear={true}
        />
        <div style={{ marginTop: ".5em" }}>
          {this.state.car2
            ? "Selected Car: " + this.state.car2
            : "No car selected"}
        </div>
      </div>
    );
  }
}
