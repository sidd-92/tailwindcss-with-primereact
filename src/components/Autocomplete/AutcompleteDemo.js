import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import ReactDOM from "react-dom";

import React, { Component } from "react";
import { AutoComplete } from "primereact/autocomplete";

export class AutoCompleteDemo extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: [],
      filteredCountriesSingle: null,
      filteredBrands: null,
      filteredCountriesMultiple: null,
      selectedCountry: null,
      selectedBrand: null,
      selectedCountries: null,
    };

    this.filterCountrySingle = this.filterCountrySingle.bind(this);
    this.filterBrands = this.filterBrands.bind(this);
    this.filterCountryMultiple = this.filterCountryMultiple.bind(this);
    this.itemTemplate = this.itemTemplate.bind(this);
  }

  componentDidMount() {
    this.setState({
      countriesData: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Bouvet Island", code: "BV" },
        { name: "Brazil", code: "BR" },
        { name: "British Indian Ocean Territory", code: "IO" },
        { name: "Brunei Darussalam", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Cape Verde", code: "CV" },
        { name: "Cayman Islands", code: "KY" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
      ],
    });
    this.brands = [
      "Audi",
      "BMW",
      "Fiat",
      "Ford",
      "Honda",
      "Jaguar",
      "Mercedes",
      "Renault",
      "Volvo",
    ];
  }

  filterCountrySingle(event) {
    setTimeout(() => {
      let results = this.state.countriesData.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
      this.setState({ filteredCountriesSingle: results });
    }, 250);
  }

  filterBrands(event) {
    setTimeout(() => {
      let results;

      if (event.query.length === 0) {
        results = [...this.brands];
      } else {
        results = this.brands.filter((brand) => {
          return brand.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      this.setState({ filteredBrands: results });
    }, 250);
  }

  filterCountryMultiple(event) {
    setTimeout(() => {
      let results = this.state.countriesData.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });

      this.setState({ filteredCountriesMultiple: results });
    }, 250);
  }

  itemTemplate(brand) {
    return (
      <div className="p-clearfix">
        <img
          alt={brand}
          src={`showcase/demo/images/car/${brand}.png`}
          srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          style={{
            width: "32px",
            display: "inline-block",
            margin: "5px 0 2px 5px",
          }}
        />
        <div
          style={{ fontSize: "16px", float: "right", margin: "10px 10px 0 0" }}
        >
          {brand}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Basic</h3>
        <AutoComplete
          value={this.state.selectedCountry}
          suggestions={this.state.filteredCountriesSingle}
          completeMethod={this.filterCountrySingle}
          field="name"
          size={30}
          placeholder="Countries"
          minLength={1}
          onChange={(e) => this.setState({ selectedCountry: e.value })}
        />
        <span style={{ marginLeft: "10px" }}>
          Country:{" "}
          {this.state.selectedCountry
            ? this.state.selectedCountry.name || this.state.selectedCountry
            : "none"}
        </span>

        <h3>Advanced</h3>
        <AutoComplete
          value={this.state.selectedBrand}
          suggestions={this.state.filteredBrands}
          completeMethod={this.filterBrands}
          size={30}
          minLength={1}
          placeholder="Hint: type 'v' or 'f'"
          dropdown={true}
          itemTemplate={this.itemTemplate}
          onChange={(e) => this.setState({ selectedBrand: e.value })}
        />
        <span style={{ marginLeft: "10px" }}>
          Brand: {this.state.selectedBrand || "none"}
        </span>

        <h3>Multiple</h3>
        <span className="p-fluid">
          <AutoComplete
            value={this.state.selectedCountries}
            suggestions={this.state.filteredCountriesMultiple}
            completeMethod={this.filterCountryMultiple}
            minLength={1}
            placeholder="Countries"
            field="name"
            multiple={true}
            onChange={(e) => this.setState({ selectedCountries: e.value })}
          />
        </span>
      </div>
    );
  }
}
