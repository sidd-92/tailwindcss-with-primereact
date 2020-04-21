import React from "react";
import { Card } from "primereact/card";
const footer = (
  <span>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
      Edit
    </button>
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
        Content
      </Card>
    );
  }
}

export default CardComponent;
