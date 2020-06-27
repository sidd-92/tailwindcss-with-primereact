import React, { Component } from "react";
import error from "../../assets/img/error.svg";
import { AutoComplete } from "primereact/autocomplete";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

class AutocompleteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSingle: null,
    };
  }

  filterSingle(event, collections) {
    setTimeout(() => {
      var results = collections.filter((country) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
      });
      this.setState({ filteredSingle: results });
    }, 250);
  }

  render() {
    return (
      <React.Fragment>
        <div className="p-fluid flex flex-row align-middle">
          <AutoComplete
            style={{ width: "100%" }}
            className={this.props.autocompleteClass}
            suggestions={this.state.filteredSingle}
            dropdown={true}
            placeholder="Your nationality?"
            value={this.props.country}
            field="name"
            completeMethod={(e) => this.filterSingle(e, this.props.arrayList)}
          />
          <InputText
            value={this.props.phonenumber}
            onChange={this.props.handlePhonenumberInput}
            keyfilter="pint"
            placeholder="Phonenumber"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default AutocompleteBox;
