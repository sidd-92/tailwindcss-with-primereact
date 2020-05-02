import React from "react";
import { Card } from "primereact/card";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
const footer = (
  <span>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded">
      Save
    </button>
  </span>
);
class CardComponent extends React.Component {
  render() {
    return (
      <Card
        title="Basic Card"
        subTitle="Subtitle"
        footer={footer}
        className="h-full px-4 py-4"
      >
        <div className="grid grid-cols-1">
          <CalendarComponent />
        </div>
      </Card>
    );
  }
}

export default CardComponent;
