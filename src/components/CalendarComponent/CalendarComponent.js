import React from "react";
import { Calendar } from "primereact/calendar";
class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: null,
      date9: null,
    };
  }
  render() {
    return (
      <div className="grid grid-cols-2 w-full col-gap-5">
        <Calendar
          placeholder="Enter a Date"
          value={this.state.date1}
          onChange={(e) => this.setState({ date1: e.value })}
        />
        <Calendar
          value={this.state.date9}
          placeholder="Enter Time"
          onChange={(e) => this.setState({ date9: e.value })}
          timeOnly={true}
          hourFormat="12"
        />
      </div>
    );
  }
}

export default CalendarComponent;
